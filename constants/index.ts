import { ProfileData } from "@/interfaces";
import { IconType } from "react-icons";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaYoutube,
  FaFacebook,
  FaTiktok,
  FaDiscord,
  FaSpotify,
  FaTwitch,
  FaSnapchat,
  FaTelegram,
} from "react-icons/fa";

// Icon mapping for link icons
export const ICON_MAP: Record<string, IconType> = {
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  whatsapp: FaWhatsapp,
  mail: FaEnvelope,
  globe: FaGlobe,
  youtube: FaYoutube,
  facebook: FaFacebook,
  tiktok: FaTiktok,
  discord: FaDiscord,
  spotify: FaSpotify,
  twitch: FaTwitch,
  snapchat: FaSnapchat,
  telegram: FaTelegram,
};

// Profile Data - Edit this to customize your page
export const PROFILE_DATA: ProfileData = {
  name: "Lava Cafe",
  bio: "Lava Café 🔥 | Great coffee, cozy vibes & unforgettable moments in Mokattam. Come sip, relax & enjoy your day! ☕✨",
  avatar:
    "https://j8v6vnsfxb.ufs.sh/f/KWERu0J43fSU8vbp3FUutPHwZYf1O0bULcEdyVeFlBJSAna6",

  // Main links that appear as buttons
  links: [
    {
      id: "1",
      title: "WhatsApp Num 1",
      url: "https://wa.me/201029350051",
      icon: "whatsapp",
    },
    {
      id: "2",
      title: "WhatsApp Num 2",
      url: "https://wa.me/201148494119",
      icon: "whatsapp",
    },
    {
      id: "3",
      title: "Instagram",
      url: "https://instagram.com/lavacafe.restaurant",
      icon: "instagram",
    },
    {
      id: "4",
      title: "Facebook",
      url: "https://facebook.com/lavacafe.reg",
      icon: "facebook",
    },
    {
      id: "5",
      title: "TikTok",
      url: "https://www.tiktok.com/@lava_cafe0",
      icon: "tiktok",
    },
    {
      id: "6",
      title: "Our Website",
      url: "https:/lavaacafe.com",
      icon: "globe",
    },
    {
      id: "7",
      title: "WhatsApp Channel",
      url: "https://whatsapp.com/channel/0029Vb0Phgu9mrGX7LTPGJ3b",
      icon: "whatsapp",
    },
    {
      id: "8",
      title: "Occasions Pdf",
      url: "https://j8v6vnsfxb.ufs.sh/f/KWERu0J43fSUcxzrOJ5ZeGmATNYO45FCkWlKu8JzHoPIqfb9",
      icon: "globe",
    },
    {
      id: "9",
      title: "Owner Links",
      url: "https://yehialinks.vercel.app/",
      icon: "globe",
    },
  ],

  // Social media links that appear as icons
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/lavacafe.restaurant",
      icon: FaInstagram,
    },
    {
      platform: "facebook",
      url: "https://facebook.com/lavacafe.reg",
      icon: FaFacebook,
    },
    {
      platform: "whatsapp",
      url: "https://wa.me/201148494119",
      icon: FaWhatsapp,
    },
    {
      platform: "tiktok",
      url: "https://www.tiktok.com/@lava_cafe0",
      icon: FaTiktok,
    },
  ],
};

export const THEME = {
  // Background gradient with cyan to magenta
  background: "from-[#6cd0d0] via-[#8dd5d5] to-[#ba008a]",

  // Button background - white with transparency
  buttonBg: "bg-white/95",

  // Button hover - cyan with glow effect
  buttonHover:
    "hover:bg-[#6cd0d0] hover:text-white hover:shadow-xl hover:shadow-[#6cd0d0]/30",

  // Primary text - white for gradient background
  textPrimary: "text-white",

  // Secondary text - slightly transparent white
  textSecondary: "text-white/90",

  // Accent color - cyan
  accent: "text-[#6cd0d0]",

  // Additional styling
  buttonText: "text-[#4a4a4a]",
  buttonBorder: "border-2 border-white/50",
  avatarRing: "ring-4 ring-white/30 shadow-2xl shadow-[#ba008a]/20",
  socialIcon: "text-white/90",
  socialIconHover: "hover:text-white hover:scale-125",
};
