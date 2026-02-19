import {
  SiBootstrap as BootstrapIcon,
  SiCss3 as CssIcon,
  SiDaisyui as DaisyUIIcon,
  SiFastapi as FastAPIIcon,
  SiFigma as FigmaIcon,
  SiFilament as FilamentIcon,
  SiFirebase as FirebaseIcon,
  SiFlask as FlaskIcon,
  SiGithub as GitHubIcon,
  SiHtml5 as HtmlIcon,
  SiJavascript as JavaScriptIcon,
  SiLaravel as LaravelIcon,
  SiMui as MaterialUIIcon,
  SiMysql as MySQLIcon,
  SiNextdotjs as NextIcon,
  SiNodedotjs as NodeIcon,
  SiPhp as PHPIcon,
  SiPostgresql as PostgreSQLIcon,
  SiPostman as PostmanIcon,
  SiPrisma as PrismaIcon,
  SiPython as PythonIcon,
  SiReact as ReactIcon,
  SiShadcnui as ShadcnUIIcon,
  SiSqlite as SQLiteIcon,
  SiSupabase as SupabaseIcon,
  SiTailwindcss as TailwindIcon,
  SiVite as ViteIcon,
} from "react-icons/si";

const iconSize = 18;

export const SKILLS_DATA = [
  {
    name: "Frontend Development",
    skills: [
      {
        name: "HTML",
        icon: <HtmlIcon size={iconSize} className="text-orange-500" />,
      },
      {
        name: "CSS",
        icon: <CssIcon size={iconSize} className="text-blue-500" />,
      },
      {
        name: "Vite",
        icon: <ViteIcon size={iconSize} className="text-violet-500" />,
      },
      {
        name: "React",
        icon: <ReactIcon size={iconSize} className="text-sky-500" />,
      },
      {
        name: "Next.js",
        icon: <NextIcon size={iconSize} className="text-primary" />,
      },
    ],
  },

  {
    name: "UI/UX & Libraries",
    skills: [
      {
        name: "TailwindCSS",
        icon: <TailwindIcon size={iconSize} className="text-sky-500" />,
      },
      {
        name: "Shadcn/UI",
        icon: <ShadcnUIIcon size={iconSize} className="text-primary" />,
      },
      {
        name: "Material UI",
        icon: <MaterialUIIcon size={iconSize} className="text-blue-500" />,
      },
      {
        name: "DaisyUI",
        icon: <DaisyUIIcon size={iconSize} className="text-teal-500" />,
      },
      {
        name: "Bootstrap",
        icon: <BootstrapIcon size={iconSize} className="text-violet-500" />,
      },
      {
        name: "Filament",
        icon: <FilamentIcon size={iconSize} className="text-orange-500" />,
      },
    ],
  },

  {
    name: "Backend Development",
    skills: [
      {
        name: "Flask",
        icon: <FlaskIcon size={iconSize} className="text-primary" />,
      },
      {
        name: "Node.js",
        icon: <NodeIcon size={iconSize} className="text-green-500" />,
      },
      // {
      //   name: "Express.js",
      //   icon: <ExpressIcon size={iconSize} className='text-primary' />,
      // },
      {
        name: "FastAPI",
        icon: <FastAPIIcon size={iconSize} className="text-emerald-500" />,
      },
      // {
      //   name: "Django",
      //   icon: <DjangoIcon size={iconSize} className='text-green-500' />,
      // },
      {
        name: "Laravel",
        icon: <LaravelIcon size={iconSize} className="text-red-500" />,
      },
    ],
  },

  {
    name: "Programming Languages",
    skills: [
      {
        name: "Python",
        icon: <PythonIcon size={iconSize} className="text-blue-500" />,
      },
      {
        name: "JavaScript",
        icon: <JavaScriptIcon size={iconSize} className="text-yellow-500" />,
      },
      {
        name: "PHP",
        icon: <PHPIcon size={iconSize} className="text-violet-500" />,
      },
    ],
  },

  {
    name: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: <MySQLIcon size={iconSize} className="text-blue-500" />,
      },
      // {
      //   name: "MongoDB",
      //   icon: <MongoDBIcon size={iconSize} className='text-green-500' />,
      // },
      {
        name: "PostgreSQL",
        icon: <PostgreSQLIcon size={iconSize} className="text-indigo-500" />,
      },
      {
        name: "SQLite",
        icon: <SQLiteIcon size={iconSize} className="text-sky-500" />,
      },
      {
        name: "Prisma",
        icon: <PrismaIcon size={iconSize} className="text-green-500" />,
      },
      {
        name: "Firebase",
        icon: <FirebaseIcon size={iconSize} className="text-orange-500" />,
      },
      {
        name: "Supabase",
        icon: <SupabaseIcon size={iconSize} className="text-teal-500" />,
      },
    ],
  },

  {
    name: "Tools & Platforms",
    skills: [
      {
        name: "GitHub",
        icon: <GitHubIcon size={iconSize} className="text-gray-500" />,
      },
      {
        name: "Postman",
        icon: <PostmanIcon size={iconSize} className="text-orange-500" />,
      },
      {
        name: "Figma",
        icon: <FigmaIcon size={iconSize} className="text-primary" />,
      },
    ],
  },
];

export const getAllSkills = () =>
  SKILLS_DATA.flatMap((category) => category.skills);

/** Lookup map: { "React": <Icon /> } */
export const SKILLS_MAP = getAllSkills().reduce((acc, skill) => {
  acc[skill.name] = skill.icon;
  return acc;
}, {});

export const getSkillsByCategory = (categoryName) =>
  SKILLS_DATA.find((c) => c.name === categoryName)?.skills ?? [];

export const searchSkills = (query) =>
  getAllSkills().filter((skill) =>
    skill.name.toLowerCase().includes(query.toLowerCase()),
  );

export const getRandomSkills = (count) =>
  [...getAllSkills()].sort(() => 0.5 - Math.random()).slice(0, count);

export const skillsStats = {
  totalSkills: getAllSkills().length,
  totalCategories: SKILLS_DATA.length,
  averageSkillsPerCategory: Math.round(
    getAllSkills().length / SKILLS_DATA.length,
  ),
  categoryWithMostSkills: SKILLS_DATA.reduce((prev, current) =>
    prev.skills.length > current.skills.length ? prev : current,
  ).name,
  categoryWithLeastSkills: SKILLS_DATA.reduce((prev, current) =>
    prev.skills.length < current.skills.length ? prev : current,
  ).name,
};
