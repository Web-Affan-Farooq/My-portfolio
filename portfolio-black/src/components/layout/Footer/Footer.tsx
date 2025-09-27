"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pagesNotAllowed, footerLinks } from "@/constants";

const Footer = () => {
  const pathname = usePathname();
  const hide = pagesNotAllowed.some((page) => pathname.startsWith(page));

  const nameStyle = `
  text-green-light font-firacode font-bold
  2xl:text-[130px] xl:text-[120px] lg:text-[100px]
  md:text-[77px] sm:text-[50px] max-sm:text-[40px]
`;

  if (hide) {
    return null;
  } else {
    return (
      <>
        <footer className="flex flex-row max-sm:flex-col flex-wrap justify-evenly items-center bg-black">
          <div className="text-right p-7">
            <h1 className={nameStyle}>
              Muhammad <br /> Affan
            </h1>
          </div>

          <div className="flex flex-col max-sm:flex-row flex-wrap justify-start items-start gap-3">
            {footerLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.url}
                className="text-faun max-sm:text-sm
            w-full px-[20px] py-[10px] text-left
            "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </footer>

        <div className="p-[30px] bg-black text-green-light text-sm">
          &copy; Muhammad Affan | All rights reserved
        </div>
      </>
    );
  }
};

export default Footer;
