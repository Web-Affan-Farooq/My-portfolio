import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";
import { Skills, SkillsData } from "@/@types/Skills";
import { skillsQuery } from "@/queries";

export const GET = async () => {

  const response = await sanityClient.fetch(skillsQuery);

  const data: SkillsData = {
    Fullstack: response.filter(
      (skill: Skills) => skill.domain.toLowerCase().trim() === "fullstack"
    ),
    Devops: response.filter(
      (skill: Skills) => skill.domain.toLowerCase().trim() === "devops"
    ),
    AI: response.filter(
      (skill: Skills) => skill.domain.toLowerCase().trim() === "ai"
    ),
  };

  return NextResponse.json({
    skills: data,
  });
};
