"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ContactFormSchema } from "@/validations";
import axios from "axios";

type ContactFormData = z.infer<typeof ContactFormSchema>;

const Contact = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
  });
  const [disabled, setdisabled] = useState(false);
  const submitForm = async (data: ContactFormData) => {
    setdisabled(true);
    try {
      const response = await axios.post("/api/contact", data);
      router.push(response.data.redirect);
    } catch (err) {
      console.log("Error : ", err);
      router.push("/contact/success");
    }
    setdisabled(false);
  };

  return (
    <main className="bg-black text-white py-40">
      <article className="max-w-4xl mx-auto px-6">
        <section>
          {/* Section Header */}
          <div className="text-center mb-10">
            <button
              type="button"
              className="bg-white text-black px-5 py-1 rounded-2xl -rotate-2 shadow-sm"
            >
              Contact Me
            </button>
            <h1 className="mt-4 font-bold font-firacode text-[2.5rem] leading-tight">
              Let’s Make an Impact
            </h1>
            <p className="text-faun mt-2 text-sm">
              Have a project in mind? Let’s discuss and bring your ideas to
              life.
            </p>
          </div>

          {/* Contact Form */}
          <form className="grid gap-6" onSubmit={handleSubmit(submitForm)}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  {...register("name")}
                  className="w-full border border-gray-600 bg-transparent text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder:text-faun"
                />
                {errors.name && (
                  <p className="text-red-700 text-xs mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className="w-full border border-gray-600 bg-transparent text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder:text-faun"
                />
                {errors.email && (
                  <p className="text-red-700 text-xs mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Your project brief (markdown allowed)
              </label>
              <textarea
                id="message"
                placeholder="here you go..."
                {...register("message")}
                className="w-full h-32 border border-gray-600 bg-transparent text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder:text-faun"
              />
              {errors.message && (
                <p className="text-red-700 text-xs mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div>
              <button
                type="submit"
                className={`${disabled ? "bg-white/50 cursor-not-allowed" : "bg-white cursor-pointer"} text-black font-medium rounded-full px-8 py-3 hover:bg-gray-200 transition-colors`}
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </article>
    </main>
  );
};

export default Contact;
