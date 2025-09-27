const skillsQuery = `*[_type == "Skills" && active]{
  _id,
  domain,
  "logo": logo.asset->url,
    name
}
`;
const projectsQuery = `*[_type == "projects"]{
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
`
export { skillsQuery ,projectsQuery};