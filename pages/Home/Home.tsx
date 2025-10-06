"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { PROFILE_DATA, ICON_MAP } from "@/constants";

export default function LinktreePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const profileVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6cd0d0] via-[#8dd5d5] to-[#ba008a] py-4 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Blur Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#ba008a]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-300/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Mobile Frame Container */}
      <motion.div
        className="max-w-md mx-auto relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glass Frame with Border */}
        <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 shadow-2xl border-4 border-white/30">
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] sm:rounded-[3rem]">
            {[
              { left: 20, top: 15, duration: 3.5, delay: 0.5 },
              { left: 70, top: 30, duration: 4.2, delay: 1.2 },
              { left: 45, top: 60, duration: 3.8, delay: 0.8 },
              { left: 80, top: 75, duration: 4.5, delay: 1.5 },
              { left: 15, top: 85, duration: 3.2, delay: 0.3 },
              { left: 60, top: 20, duration: 4.0, delay: 1.0 },
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/40 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Profile Section */}
            <motion.div
              className="flex flex-col items-center mb-8 sm:mb-10"
              variants={profileVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Avatar with Glow */}
              <motion.div
                className="relative mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-cyan-200 to-pink-200"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  style={{ padding: "4px" }}
                />
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-white/40 shadow-2xl shadow-[#ba008a]/30">
                  <img
                    src={PROFILE_DATA.avatar}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Name with Gradient */}
              <motion.h1
                className="text-3xl sm:text-4xl font-bold text-white mb-3 text-center px-4 drop-shadow-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                {PROFILE_DATA.name}
              </motion.h1>

              {/* Bio */}
              <motion.p
                className="text-white/95 text-center max-w-xs text-base sm:text-lg px-4 leading-relaxed drop-shadow-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {PROFILE_DATA.bio}
              </motion.p>
            </motion.div>

            {/* Links Section */}
            <motion.div
              className="space-y-3 sm:space-y-4 mb-8 sm:mb-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {PROFILE_DATA.links.map((link, index) => {
                const IconComponent = link.icon ? ICON_MAP[link.icon] : null;

                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                      backgroundColor: "#6cd0d0",
                      boxShadow:
                        "0 25px 50px -12px rgba(108, 208, 208, 0.4), 0 0 30px rgba(108, 208, 208, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full bg-white/95 backdrop-blur-md border-2 border-white/60 font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl shadow-xl text-[#4a4a4a] transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    <div className="relative flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-300">
                      {IconComponent && (
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6, type: "spring" }}
                        >
                          <IconComponent size={22} className="sm:w-6 sm:h-6" />
                        </motion.div>
                      )}
                      <span className="text-base sm:text-lg tracking-wide">
                        {link.title}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              className="flex justify-center gap-6 sm:gap-8 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {PROFILE_DATA.socialLinks.map((social, index) => {
                const IconComponent = social.icon;

                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-white/90 hover:text-white transition-colors duration-300 drop-shadow-xl"
                    aria-label={social.platform}
                    whileHover={{
                      scale: 1.3,
                      y: -10,
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    {/* Glow ring */}
                    <motion.div
                      className="absolute inset-0 bg-white/30 rounded-full blur-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2, opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon with pulse */}
                    <motion.div
                      className="relative bg-white/10 backdrop-blur-sm p-3 rounded-full border-2 border-white/30"
                      whileHover={{
                        borderColor: "rgba(255, 255, 255, 0.8)",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <IconComponent size={24} className="sm:w-6 sm:h-6" />
                    </motion.div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Footer */}
            <motion.div
              className="text-center text-xs sm:text-sm text-white/90 drop-shadow-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p>
                © {new Date().getFullYear()} {PROFILE_DATA.name}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
