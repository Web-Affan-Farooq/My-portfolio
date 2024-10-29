import React from 'react';
import { FaGithub, FaFacebook, FaDiscord, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Follow = () => {
    return (
        <div>
            <section className="text-white py-10 ">
                <h1 className="text-4xl font-bold text-center">Follow <span className="text-primary">me</span></h1>
                <br />
                <div className="flex flex-row flew-wrap gap-3 justify-center align-middle">
                    <div className="text-primary p-2 hover:bg-primary transition-0.4 hover:text-black rounded-full"><FaGithub size={30} /></div>
                    <div className="text-primary p-2 hover:bg-primary transition-0.4 hover:text-black rounded-full"><FaFacebook size={30} /></div>
                    <div className="text-primary p-2 hover:bg-primary transition-0.4 hover:text-black rounded-full"><FaDiscord size={30} /></div>
                    <div className="text-primary p-2 hover:bg-primary transition-0.4 hover:text-black rounded-full"><FaLinkedinIn size={30} /></div>
                    <div className="text-primary p-2 hover:bg-primary transition-0.4 hover:text-black rounded-full"><FaInstagram size={30} /></div>
                    <div className="text-primary p-2 hover:bg-primary transition-0.4 hover:text-black rounded-full"><FaTwitter size={30} /></div>
                </div>
            </section>
        </div>
    )
}

export default Follow;