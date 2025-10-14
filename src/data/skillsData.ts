import { BsBootstrap } from "react-icons/bs";
import { FaJs, FaNodeJs, FaReact, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import {  RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { SiMongodb } from "react-icons/si"; // Updated to use correct MongoDB & Mongoose logos
import { componentTypes } from "@/types";
import { TbBrandNextjs } from "react-icons/tb";

type IconType = componentTypes["IconTypeProps"];

export const skillsData: IconType[] = [
  { component: FaJs, color: "#F7DF1E", name: "JavaScript" }, // Corrected JS color
  { component: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { component: FaNodeJs, color: "#339933", name: "Node.js" }, // Corrected Node.js color
  { component: FaReact, color: "#61DAFB", name: "React" },
  { component: ImHtmlFive2, color: "#E34F26", name: "HTML" },
  { component: FaCss3Alt, color: "#1572B6", name: "CSS" }, // Corrected CSS color
  { component: RiTailwindCssFill, color: "#38B2AC", name: "Tailwind CSS" }, // Tailwind correct color
  { component: FaGitAlt, color: "#F05032", name: "Git" }, // Corrected Git color
  { component: BsBootstrap, color: "#7952B3", name: "Bootstrap" }, // Corrected Bootstrap color
  { component: DiDatabase, color: "#fbbc05", name: "Database" }, // Keeping generic DB color
  { component: SiMongodb, color: "#47A248", name: "MongoDB" }, // Corrected MongoDB logo & color
  { component: TbBrandNextjs, color: "blue", name: "Nextjs" }, // Corrected Mongoose logo & color
];
