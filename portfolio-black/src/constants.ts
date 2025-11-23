const testprojects = [
  {
    project_category: "Fullstack",
    project_github_link: "/",
    projects_casestudy:
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
    project_casestudy:
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
const testSkills = {
      "Fullstack development": [
        {
            _id: "06f92d9f-e194-4344-a36c-76838110b857",
            domain: "Fullstack",
            logo:"/icons/next.svg",
            name: "NextJS",
        },
        {
            _id: "148e315f-c39e-4a55-8ed9-a022bd9117db",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/b90d46623aebf5b6f0120cd2c2a029bbe01a29ae-44x44.svg",
            name: "Stripe",
        },
        {
            _id: "3ced1cf3-5994-4ca9-b8dc-39f072978159",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/67d69d0760b76affe612385a8ca7ae6d3b004bbd-44x44.svg",
            name: "Sanity",
        },
        {
            _id: "4dbcd0e7-e2ac-478f-a446-d05cae3cd1b5",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/8020b84a803e081089da65e87936a03f61b0d473-44x44.svg",
            name: "Typescript"
        },
        {
            _id: "735e6342-bf04-43ee-99a4-747d33076f13",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/cfdfefa29654dc63cf47ee907b3fa4c146cbb020-44x44.svg",
            name: "GSAP"
        },
        {
            _id: "8991046e-b1a2-45fb-b4a2-63460c8e7276",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/2eff91edcc87f4443cceeff2376cecbc19012836-44x44.svg",
            name: "Next.JS"
        },
        {
            _id: "93f3cced-b1d4-456d-8705-b8216c8c5ad4",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/9f84607c3ee1308eb3efd24522d9a0e1b60b3d3e-44x44.svg",
            name: "React"
        },
        {
            _id: "97e605d8-f063-4c56-bec4-9f32ab2c4d63",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/6597f3600d460751b6a2544685a10164d6f3f22c-40x40.svg",
            name: "Drizzle"
        },
        {
            _id: "b4e14c34-b86e-4f74-b9fd-ec558d457b55",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/92799048832cb5b6d8d1d1b05043dd5908194eeb-44x44.svg",
            name: "Supabase"
        },
        {
            _id: "b5137f6d-1316-4af9-abea-31992c2ebf51",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/a26a2099b5105f1618a3491a8223a9d9acc722dd-44x44.svg",
            name: "Postgres"
        },
        {
            _id: "cb3072cf-eefa-4d2d-9bfc-2b1834a0514a",
            domain: "Fullstack",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/9f5818406f021274ab9c88df512c2b46b88f890e-44x44.svg",
            name: "TailwindCSS"
        }
    ],    
  "Devops": [
        {
            _id: "7f4ac17b-c39b-4ff0-b9fd-4d039c18b32e",
            domain: "Devops",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/7ad282f61af4ec00554a8276a39a124e7fed0ebb-44x44.svg",
            name: "Vercel"
        },
        {
            _id: "f66fa5e6-7f08-4826-a616-1f600be2e277",
            domain: "Devops",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/3a2f99513f8047a3012d7f758deaf85ccdc1eb13-44x44.svg",
            name: "Git"
        }
    ],
      "AI": [
        {
            _id: "7b1fcf02-8663-4138-a4cb-c512bf302e52",
            domain: "AI",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/38aeea809e674c398d3c6079e77463f0325d4950-44x44.svg",
            name: "OpenAI agents SDK"
        },
        {
            _id: "ace26e9f-cc3f-4963-82e2-9c67a5afa9da",
            domain: "AI",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/0dbd3794c17ed47b45475471d6dc525270385591-44x44.svg",
            name: "Python"
        },
        {
            _id: "e5de4c44-ee14-4a87-92ca-2b8157bc3836",
            domain: "AI",
            logo: "https://cdn.sanity.io/images/z1fkh3m6/production/a359e6c0bda8782e9e67aee5a25ff7721f60fb69-44x44.svg",
            name: "Streamlit"
        }
    ]
}

const footerLinks = [
  {
    name:"... / About me ...",
    url:"/"
  },
  {
     name:"... / Contact me ...",
     url:"/contact"
  },{
    name:"... / My work ...",
    url:"/projects"
  }
]
export { testprojects, pagesNotAllowed, testSkills , footerLinks };