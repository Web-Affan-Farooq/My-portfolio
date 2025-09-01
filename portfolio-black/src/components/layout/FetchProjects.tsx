"use client"
import { useProjects } from "@/stores/projects";
import React, { useEffect } from "react";

const FetchProjects = ({children}:{children:React.ReactNode}) => {
const {setProjects} = useProjects();
    useEffect(() => {
    // ___Fetch data from API and update the content
    const getData = async () => {
      const response = await fetch(`/api/projects`, {
        next: { revalidate: 600 },
      });
      const { data } = await response.json();

      if (data !== "Error while creating connection") {
        setProjects(data);
      } else {
      }
    };
    getData();
  }, [setProjects]);
    return (
        <>{children}</>
    )
}
export default FetchProjects