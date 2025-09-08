"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pagesNotAllowed } from "@/constants";
const Footer = () => {
  const pathname = usePathname();
  const hide = pagesNotAllowed.some((page) => pathname.startsWith(page));

  if (hide) {
    return <div className=""></div>;
  } else {
    return (
      <>
        <footer className="selection:text-black selection:bg-faun pt-[100px] flex flex-row max-sm:flex-col flex-wrap justify-evenly items-center bg-black">
          <div className="text-right p-7">
            <h1
              className="text-white-custom
                    font-firacode font-bold 
                    2xl:text-[130px]
                    xl:text-[120px]
                    lg:text-[100px]
                    md:text-[77px]
                    sm:text-[50px]
                    max-sm:text-[40px]"
            >
              Muhammad
            </h1>
            <h1
              className="text-white-custom
                    font-firacode font-bold 
                    2xl:text-[130px]
                    xl:text-[120px]
                    lg:text-[100px]
                    md:text-[77px]
                    sm:text-[50px]
                    max-sm:text-[40px]"
            >
              Affan
            </h1>
          </div>

          <div className="flex flex-col max-sm:flex-row flex-wrap justify-start items-start gap-3">
            <Link
              href={"/"}
              className="text-white max-sm:text-sm
            w-full px-[20px] py-[10px] text-left
            "
            >
              ... /About me ...
            </Link>

            <Link
              href={"/contact"}
              className="text-white max-sm:text-sm
            w-full px-[20px] py-[10px] text-left
            "
            >
              ... /Contact me ...
            </Link>

            <Link
              href={"/projects"}
              className="text-white max-sm:text-sm
            w-full px-[20px] py-[10px] text-left
            "
            >
              ... /My Work ...
            </Link>
          </div>
          <br />
          <br />
        </footer>

        <div className="p-[30px] bg-black text-white selection:bg-faun selection:text-black">
          &copy; Muhammad Affan | All rights reserved
        </div>
      </>
    );
  }
};

export default Footer;
