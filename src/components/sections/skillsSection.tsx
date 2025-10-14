import { skillsData } from "@/data/skillsData";
import HeroSection from "../heroSection";

export default function SkillsComponent() {
  return (
    <HeroSection id="skills" title="Skills" subtitle="Technologies I work with">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
      {skillsData.map(({ component: Icon, color, name }, index) => (
        <div key={index} className="group flex flex-col items-center">
          <Icon
            size={60}
            className="transition-all duration-300 group-hover:scale-110"
            style={{ color }}
          />
          <span
            className="mt-1 text-xs sm:text-sm font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ color }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
    </HeroSection>
  );
}
