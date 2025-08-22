export type Tags = {
  project_tech_text: string;
  project_tech_image: string;
};
export type Project = {
  project_category: string;
  project_github_link: string;
  project_description: string;
  project_images: string[];
  project_tags: Tags[];
  _id: string;
  project_name: string;
  project_link: string;
  project_casestudy: string;
};
