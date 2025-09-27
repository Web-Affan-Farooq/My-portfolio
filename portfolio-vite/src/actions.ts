"use server";

import sanityClient from "@/lib/sanity";
import { projectsQuery } from "@/queries";
import { Skills } from "@/@types/Skills";
import { skillsQuery } from "@/queries";
import { z, ZodError } from "zod";
import { ContactFormSchema } from "@/validations";

const ProjectsAction = async () => {
  const response = await sanityClient.fetch(projectsQuery);
  return response;
};

const skillsAction = async () => {
    const categories: Record<string, Skills[]> = {};
    const response: Skills[] = await sanityClient.fetch(skillsQuery);
    response.forEach((skill) => {
      categories[skill.domain] = [];
    });
    response.forEach((skill) => {
      categories[skill.domain].push(skill);
    });
  
  return categories;
};

const submitContactForm = async (formData:z.infer<typeof ContactFormSchema>) => {
  try {
    const sanitizedData = ContactFormSchema.parse(formData);

    try {
      const payload = {
        _type: "Message",
        ...sanitizedData,
      };
      await sanityClient.create(payload);
        return {
          message: "Message sent successfully",
          redirect: "/contact/success",
        }

    } catch (err) {
      console.log("Error : ", err);
      return {
          message: "An error occured",
          redirect: "/contact/failure",
        }
    }
  } catch (err) {
    console.log("Error : ", err);

    if (err instanceof ZodError) {
      return {
          message: err.message[0],
        }
    }
  }
}

export {
    ProjectsAction,
    skillsAction,
    submitContactForm
}