"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const LinkButtons = () => {
    const linkButtons = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if(linkButtons.current) {
            gsap.fromTo(
                linkButtons.current,
                {
                    x:-500,
                    duration:1
                },
                {
                    x:0,
                    duration:1,
                }
            )
        }
    },[]);

    const socialLinks = [
        { src:"/icons/github.svg", label: "Github" , link:"https://github.com/Web-Affan-Farooq"},
        { src:"/icons/linkedin.svg", label: "Linkedin",link:"https://linkedin.com/in/muhammad-affan-139a3a290" },
    ];

    return (
        <div className='p-5 w-full flex '>
            <div ref={linkButtons} className='flex gap-5 max-[400px]:mx-0 mx-10'>
                {socialLinks.map((link, index) => (
                    <Link href={link.link} key={index}>
                        <button
                        type="button"
                        className="
                            relative overflow-hidden max-sm:text-sm
                            px-[20px] py-[8px] max-sm:px-[20px] max-sm:py-[10px]
                            flex flex-row flex-nowrap justify-center items-center gap-2
                            shadow-md shadow-gray-800 border border-gray-700 rounded-[30px]
                            text-white-custom
                            transition-colors duration-300
                        "
                    >
                        <Image src={link.src} width={20} height={20} className="w-[20px] h-[20px]" alt={link.label}/>
                        <span className="z-10">{link.label}</span>
                    </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LinkButtons;
