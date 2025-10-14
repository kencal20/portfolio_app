import ContactUs from "@/components/sections/contactSection";
import IntroSection from "@/components/sections/introSection";
import ProjectsSection from "@/components/sections/projects";
import SkillsComponent from "@/components/sections/skillsSection";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <ProjectsSection/>
      <SkillsComponent/>
      <ContactUs/>
    </main>
  );
}
