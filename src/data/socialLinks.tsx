import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  // FaTiktok,
  // FaCheck,
} from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

interface ISocialLinks {
  id: number;
  platform: string;
  link: string;
  class: string;
  icon: any;
}
export enum SOCIAL_LINKS {
  FACEBOOK = "https://www.facebook.com/cyberabadai",
  INSTAGRAM = "https://www.instagram.com/cyberabad_ai/",
  TWITTER = "https://twitter.com/CyberabadAi",
  LINKED_IN = "https://www.linkedin.com/company/cyberabadai/",
  YOUTUBE = "https://www.youtube.com/channel/UCcuvQAAVQP8ZP2dhJvs3Fug",
}

export const socialLinks: ISocialLinks[] = [
  {
    id: 1,
    platform: "facebook",
    link: SOCIAL_LINKS.FACEBOOK,
    class: "bg-[#4267B2]",
    icon: <FaFacebookF className="h-5 w-5" />,
  },
  {
    id: 2,
    platform: "youtube",
    link: SOCIAL_LINKS.YOUTUBE,
    class: "bg-[#FF0000]",
    icon: <FaYoutube className="h-5 w-5" />,
  },
  {
    id: 3,
    platform: "twitter",
    link: SOCIAL_LINKS.TWITTER,
    class: "bg-[#1DA1F2]",
    icon: <FaTwitter className="h-5 w-5" />,
  },
  {
    id: 4,
    platform: "instagram",
    link: SOCIAL_LINKS.INSTAGRAM,
    class: "instagram",
    icon: <FaInstagram className="h-5 w-5" />,
  },
  {
    id: 5,
    platform: "linkedIn",
    link: SOCIAL_LINKS.LINKED_IN,
    class: "bg-[#1DA1F2]",
    icon: <FaLinkedin className="h-5 w-5" />,
  },
  {
    id: 6,
    platform: "Apply",
    link: "",
    class: "bg-green-500 !cursor-not-allowed",
    icon: <GiCheckMark size={14} />,
  },
];
