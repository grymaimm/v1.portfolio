import {
  User as AboutIcon,
  Cpu as DashboardIcon,
  GraduationCap as EducationIcon,
  House as HomeIcon,
  Coffee as ProjectsIcon,
  CodeXml as SkillsIcon,
} from "lucide-react";

export const MENU_ITEMS = {
  Pages: [
    {
      label: "Home",
      href: "/",
      icon: HomeIcon,
      isShow: true,
    },
  ],
  Section: [
    {
      label: "About",
      href: "#about",
      icon: AboutIcon,
      isShow: true,
    },
    {
      label: "Projects",
      href: "#projects",
      icon: ProjectsIcon,
      isShow: true,
    },
    {
      label: "Skills",
      href: "#skills",
      icon: SkillsIcon,
      isShow: false,
    },
    {
      label: "Education",
      href: "#education",
      icon: EducationIcon,
      isShow: false,
    },
    {
      label: "Dashboard",
      href: "#dashboard",
      icon: DashboardIcon,
      isShow: true,
    },
  ],
};
