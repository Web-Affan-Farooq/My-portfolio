import { create } from "zustand";
import { Project } from "@/@types/Projects";

interface ProjectState {
  projects: Project[];
  setProjects: (list: Project[]) => void;
}

export const useProjects = create<ProjectState>()((set) => ({
  projects: [],
  setProjects: (list) =>
    set(() => ({
      projects: list,
    })),
}));