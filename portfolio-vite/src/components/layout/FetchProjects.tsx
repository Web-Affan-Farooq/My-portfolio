"use client";
import { useProjects } from "@/stores/projects";
import React, { useEffect } from "react";
import { ProjectsAction } from "@/actions";

const FetchProjects = ({ children }: { children: React.ReactNode }) => {
  const { setProjects } = useProjects();
  useEffect(() => {
    // ___Fetch data from API and update the content
    const getData = async () => {
      const projects = await ProjectsAction();
      setProjects(projects);
    };
    getData();
  }, [setProjects]);
  return <>{children}</>;
};
export default FetchProjects;
