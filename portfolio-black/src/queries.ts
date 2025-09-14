const skillsQuery = `*[_type == "Skills" && active]{
  _id,
  domain,
  "logo": logo.asset->url,
    name
}
`;
export { skillsQuery };
