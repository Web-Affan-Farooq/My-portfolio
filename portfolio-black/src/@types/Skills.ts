interface Skills {
  name:string;
  domain:string;
  logo: {
    asset: {
      url:string;
    }
  }
}

type SkillsData = Record<string,Skills[]> 

export type {
Skills,
SkillsData
}