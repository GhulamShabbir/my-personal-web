import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/socialLinks";

export default function Icons() {
  return (
    <div className="my-5 flex gap-3  md:text-sm">
      <Link
        href={SOCIAL_LINKS.FACEBOOK}
        target="_blank"
        className="group flex aspect-square w-9 items-center justify-center rounded-full border border-[#0866FF] text-[#0866FF] transition-all duration-700 last:mr-0"
      >
        <div className="group-hover:rotate-icon z-10 duration-1000">
          <FaFacebookF className=" h-5 w-5" />
        </div>
      </Link>
      <Link
        href={SOCIAL_LINKS.YOUTUBE}
        target="_blank"
        className="group flex aspect-square w-9 items-center justify-center rounded-full border border-[#ff0000] text-[#ff0000] transition-all duration-700 last:mr-0"
      >
        {" "}
        <div className="group-hover:rotate-icon z-10 duration-1000">
          <FaYoutube className="h-5 w-5" />
        </div>
      </Link>
      <Link
        href={SOCIAL_LINKS.TWITTER}
        target="_blank"
        className="group flex aspect-square w-9 items-center justify-center rounded-full border border-[#1DA1F2] text-[#1DA1F2] transition-all duration-700 last:mr-0 "
      >
        <div className="group-hover:rotate-icon z-10 duration-1000">
          <FaTwitter className="h-5 w-5" />
        </div>
      </Link>
      <Link
        href={SOCIAL_LINKS.INSTAGRAM}
        target="_blank"
        className="group flex aspect-square w-9 items-center justify-center rounded-full border border-[#CF2872] text-[#CF2872] transition-all duration-700 last:mr-0"
      >
        {" "}
        <div className="group-hover:rotate-icon z-10 duration-1000">
          <FaInstagram className="h-5 w-5" />
        </div>
      </Link>
      <Link
        href={SOCIAL_LINKS.LINKED_IN}
        target="_blank"
        className="group flex aspect-square w-9 items-center justify-center rounded-full border border-[#308aff] text-[#308aff] transition-all duration-700 last:mr-0"
      >
        {" "}
        <div className="group-hover:rotate-icon z-10 duration-1000">
          <FaLinkedin className="h-5 w-5 " />
        </div>
      </Link>
    </div>
  );
}
