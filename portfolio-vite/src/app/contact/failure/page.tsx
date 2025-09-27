// components/ContactFailurePage.tsx
"use client";
import { XCircle } from "lucide-react";
import Link from "next/link";

const ContactFailurePage = () => {
    return (
        <main className="flex items-center justify-center min-h-screen bg-black p-4">
            <article className="rounded-2xl shadow-lg max-w-lg w-full p-8 text-center">
                <XCircle className="text-faun mx-auto mb-4" size={60} />
                <h1 className="text-2xl font-bold text-gray-400 mb-2">
                    Message Failed to Send
                </h1>
                <p className="mb-6 font-firacode text-sm text-gray-500">
                    Oops! Something went wrong while sending your message. Please try
                    again later or contact us directly.
                </p>
                <Link href="/contact" className="inline-block bg-white text-red-600 px-6 py-2 rounded-lg hover:bg-white/52 transition">
                    Try Again
                </Link>
            </article>
        </main>
    );
};

export default ContactFailurePage;
