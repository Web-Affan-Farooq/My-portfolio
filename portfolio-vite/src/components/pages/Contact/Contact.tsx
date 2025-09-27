"use client";
import { ArrowUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "@/actions";
import { ContactFormSchema } from "@/validations";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
  });

  const submitContactForm = async (
    formData: z.infer<typeof ContactFormSchema>
  ) => {
    try {
      console.log(formData);
    } catch (err) {}
  };
  return (
    <div className="h-screen pt-30 flex justify-center items-center">
      <div className="text-white flex flex-row flex-wrap gap-[30px] max-md:px-10 max-sm:px-1">
        <div className="flex justify-center items-center">
          <h1
            className="px-5 m-auto text-white-custom text-left w-full font-firacode font-bold 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px]
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[40px]"
          >
            Contact me
          </h1>
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center gap-5 md:w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="border border-white px-[20px] w-[350px] max-sm:w-[300px] placeholder:text-gray-500 placeholder:text-sm py-[7px] rounded-[10px]"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
          <input
            type="email"
            placeholder="Email"
            className="border border-white px-[20px] w-[350px] max-sm:w-[300px] placeholder:text-gray-500 placeholder:text-sm py-[7px] rounded-[10px]"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <textarea
            id="message"
            placeholder="Message "
            className="border border-white w-[350px] max-sm:w-[300px] placeholder:text-gray-500 placeholder:text-sm rounded-[10px] px-[20px] py-[7px] h-[200px]"
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
          <div className="button-container flex items-center gap-2">
            <button
              onClick={handleSubmit(submitContactForm)}
              className="
                    bg-white-custom text-black
                    2xl:px-[60px]
                    xl:px-[55px]
                    lg:px-[50px]
                    md:px-[45px]
                    sm:px-[40px] sm:py-[10px]
                    max-sm:px-[35px] max-sm:py-[8px]
                    text-[14px] max-sm:text-[12px]
                    rounded-[40px] py-[11px]"
            >
              <div className="font-italic flex flex-row flex-nowrap justify-center items-center gap-3">
                <span>Submit</span>
              </div>
            </button>
            <button className="bg-white-custom rounded-full">
              <ArrowUp size={38} className="text-black rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
