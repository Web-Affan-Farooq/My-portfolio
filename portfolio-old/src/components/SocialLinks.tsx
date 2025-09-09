import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="rounded-md fixed z-10 right-0 top-[40%] w-[60px] p-3 bg-hue flex flex-col justify-center items-center gap-[10px]">
      {socialLinks.map((link, idx) => (
        <Link
          href={link.url}
          key={idx}
          className="group cursor-pointer p-2 bg-green rounded-full transition-all duration-200 ease-in-out hover:bg-black"
        >
          <Image
            src={link.icon}
            alt={link.name}
            width={20}
            height={20}
            className="w-[20px] h-[20px] shadow-xl group-hover:shadow-green-700 shadow-green-900"
          />
        </Link>
      ))}
    </div>
  );
};
export default SocialLinks;
