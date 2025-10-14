"use client";

import HeroSection from "@/components/heroSection";
import ProjectCard from "@/components/projectCard";
import { projectsData } from "@/data/projectsData";

export default function ProjectsSection() {
  return (
    <HeroSection
      id="projects"
      title="My Projects"
      subtitle="Some of the recent projects I've built"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            {...project} 
          />
        ))}
      </div>
    </HeroSection>
  );
}