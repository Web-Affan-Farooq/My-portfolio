// ____ API endpoint for fetching data from sanity ...

import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";

// ____fetch and returns the array of projects
const getData = async () => {
  const q = `*[_type == "projects"]{
  _id,
  project_name,
  project_category,
  project_link,
  project_github_link,
  project_description,
  project_casestudy,
  status,
  "project_images": project_images[].asset->url,
  "project_tags": project_tags[]{
    project_tech_text,
    "project_tech_image": project_tech_image.asset->url
  }
}
`;

  const response = await sanityClient.fetch(q, {});
  return response;

  // __ attach error handling there
};
export const GET = async () => {
  const content = await getData();
  return NextResponse.json({ data: content });
};
