const skillsQuery = `*[_type == "Skills"]{
  _id,
  domain,
  "logo": logo[].asset->url
}
`;
export { skillsQuery };

// "logo": "https://cdn.sanity.io/images/z1fkh3m6/production/0b668584cb45b51f64d7b496931062751282ab01-44x44.svg",
