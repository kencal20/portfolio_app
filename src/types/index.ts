import { StaticImageData } from "next/image";

type heroSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  gradient?: string;
  className?: string;
};

type IconTypeProps = {
  component: React.ElementType;
  color?: string;
  name: string;
};

type projectProps = {
  id: number;
  title: string;
  description: string;
  image?: string | StaticImageData;
  github: string;
  languages: string[];
  live?: string;
}




export type componentTypes = {
  HeroSection: heroSectionProps;
  IconTypeProps: IconTypeProps
  projectProps: projectProps
};
