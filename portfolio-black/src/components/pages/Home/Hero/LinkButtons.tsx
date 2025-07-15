import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

const LinkButtons = () => {
    const socialLinks = [
        { icon: <IoLogoGithub />, label: "Github" },
        { icon: <FaLinkedinIn />, label: "Linkedin" },
        { icon: <RiTelegram2Fill />, label: "Telegram" },
        { icon: <FaFacebookF />, label: "Facebook" },
        { icon: <FaInstagram />, label: "Instagram" },
    ];

    return (
        <div className='p-5 w-full flex justify-center items-center'>
            <div className='flex flex-row flex-wrap justify-center max-sm:justify-start items-center gap-5 m-auto'>
                {socialLinks.map((link, index) => (
                    <button
                        key={index}
                        type="button"
                        className="
                            relative overflow-hidden
                            px-[20px] py-[8px]
                            flex flex-row flex-nowrap justify-center items-center gap-2
                            shadow-md shadow-gray-800 border border-gray-700 rounded-[30px]
                            text-white-custom hover:text-black-custom
                            transition-colors duration-300

                            before:content-[''] before:absolute before:inset-0
                            before:bg-white-custom before:-z-10
                            before:scale-x-0 hover:before:scale-x-100
                            before:origin-left before:transition-transform before:duration-300
                        "
                    >
                        {link.icon}
                        <span className="z-10">{link.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LinkButtons;
