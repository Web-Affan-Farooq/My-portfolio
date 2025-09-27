interface Skills {
  name:string;
  domain:string;
  logo: string;
  _id:string;
}

type SkillsData = Record<string,Skills[]> 
export type {
Skills,
SkillsData
}