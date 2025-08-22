import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";
import { Skills, SkillsData } from "@/@types/Skills";

export const GET = async () => {
  const q = `*[_type == "Skills" && active]{
  _id,
    domain,
    name,
logo {
    asset-> {
      _id,
      url
    }
  }
}`;

  const response = await sanityClient.fetch(q);

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
