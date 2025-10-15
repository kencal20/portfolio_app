'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../projectCard"; // your component
import { componentTypes } from "@/types";
import HeroSection from "../heroSection";

type Project= componentTypes["projectProps"]

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

   useEffect(() => {
    axios.get("/data/projects.json")
      .then(res => {
        setProjects(res.data);
        console.log("Projects loaded:", res.data);
      })
      .catch(err => console.error("Failed to load projects:", err));
  }, []);


  return (
  <HeroSection
      id="projects"
      title="My Projects"
      subtitle="Some of the recent projects I've built"
      className="pt-10"
    >

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10  ">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
      </HeroSection>
  );
}
