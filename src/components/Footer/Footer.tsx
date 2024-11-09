import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-5 m-auto w-[90vw] border-t-2 border-solid border-link">
      <br />
      <div className="flex flex-row flex-wrap gap-12 justify-between max-md:flex-col">
        <div className="text-3xl font-bold text-primary">Affan .</div>
        <div className="flex flex-row flew-wrap justify-center align-middle gap-7 max-md:flex-col max-md:gap-10 max-md:text-center">
          <Link
            href={"/"}
            className="text-link hover:text-white transition-0.3"
          >
            Reach me
          </Link>
          <Link
            href={"/"}
            className="text-link hover:text-white transition-0.3"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/"}
            className="text-link hover:text-white transition-0.3"
          >
            Contact
          </Link>
          <Link
            href={"/"}
            className="text-link hover:text-white transition-0.3"
          >
            Blogs
          </Link>
        </div>
      </div>
      <br />
      <br />
      <p className="text-gray-400">&copy; Muhammad Affan 2024 | all rights reserved</p>
    </footer>
  );
};

export default Footer;

