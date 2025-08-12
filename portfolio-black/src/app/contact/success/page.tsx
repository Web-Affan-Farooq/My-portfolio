"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const ContactSuccessPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black p-4">
      <article className="rounded-2xl max-w-lg w-full p-8 text-center">
        {/* Success Icon */}
        <CheckCircle className="text-faun mx-auto mb-4" size={60} />
        
        {/* Main Message */}
        <h1 className="text-2xl font-bold text-gray-200 mb-2">
          Message Sent Successfully!
        </h1>
        <p className="mb-6 font-firacode text-sm text-gray-400">
          Thank you for getting in touch. We’ll respond to your message as soon
          as possible.
        </p>

        {/* Section Divider */}
        <hr className="border-gray-700 my-4" />

        {/* Follow-up Navigation */}
        <h2 className="text-[20px] text-faun font-firacode font-bold mb-3 text-left">
          Proceed with
        </h2>
        <div className="flex flex-col max-sm:flex-row flex-wrap gap-3">
          {[
            { href: "/", label: "...  /About me ..." },
            { href: "/contact", label: "...  /Contact me ..." },
            { href: "/projects", label: "...  /My Work ..." }
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-white bg-gray-900 border border-gray-700 rounded-lg
                         px-5 py-2 text-sm w-full hover:bg-faun hover:text-black 
                         transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
};

export default ContactSuccessPage;
