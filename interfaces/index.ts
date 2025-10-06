import { IconType } from "react-icons";

export interface Link {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType; // Added this line
}

export interface ProfileData {
  name: string;
  bio: string;
  avatar: string;
  links: Link[];
  socialLinks: SocialLink[];
}
