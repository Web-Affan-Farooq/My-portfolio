import Skills from "./skills.json";
const testSkills = Skills;

const testprojects = [
  {
    project_category: "Fullstack",
    project_github_link: "/",
    project_description:
      "this is project description df dfidhfi kfjdjf dfdksf dksjfk dskfjdsk jfkdsjfjfgkjf kgkfjgkjkkjdklv jdkljksf jfkdj difuid dkfjd fidufiu jdgk jfkgjiofugi udfifugiodfu gioud",
    project_images: ["/images/example-project.png"],
    project_tags: [
      {
        project_tech_text: "React",
        project_tech_image: "/icons/supabase.svg",
      },
      {
        project_tech_text: "Node.JS",
        project_tech_image: "/icons/vercel.svg",
      },
      {
        project_tech_text: "Express.JS",
        project_tech_image: "/icons/openai.svg",
      },
    ],
    _id: "1",
    project_name: "example project : a fullstack modern Saas",
    project_link: "/",
  },
  {
    project_category: "Fullstack",
    project_github_link: "/",
    project_description:
      "this is project description df dfidhfi kfjdjf dfdksf dksjfk dskfjdsk jfkdsjfjfgkjf kgkfjgkjkkjdklv jdkljksf jfkdj difuid dkfjd fidufiu jdgk jfkgjiofugi udfifugiodfu gioud",
    project_images: ["/images/example-project.png"],
    project_tags: [
      {
        project_tech_text: "React",
        project_tech_image: "/icons/supabase.svg",
      },
      {
        project_tech_text: "Node.JS",
        project_tech_image: "/icons/vercel.svg",
      },
      {
        project_tech_text: "Express.JS",
        project_tech_image: "/icons/openai.svg",
      },
    ],
    _id: "1",
    project_name: "example project : a fullstack modern Saas",
    project_link: "/",
  },
];

const pagesNotAllowed = ["/contact/success", "/contact/failure", "/casestudy"];
export { testprojects, pagesNotAllowed , testSkills};
