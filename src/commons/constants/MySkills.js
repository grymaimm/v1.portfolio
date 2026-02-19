import {
  SiBootstrap,
  SiCss3,
  SiDaisyui,
  SiFastapi,
  SiFigma,
  SiFilament,
  SiFirebase,
  SiFlask,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

export const ICON_MAP = {
  html: SiHtml5,
  css: SiCss3,
  vite: SiVite,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  shadcn: SiShadcnui,
  mui: SiMui,
  daisyui: SiDaisyui,
  bootstrap: SiBootstrap,
  filament: SiFilament,
  flask: SiFlask,
  node: SiNodedotjs,
  fastapi: SiFastapi,
  laravel: SiLaravel,
  python: SiPython,
  javascript: SiJavascript,
  php: SiPhp,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,
  prisma: SiPrisma,
  firebase: SiFirebase,
  supabase: SiSupabase,
  github: SiGithub,
  postman: SiPostman,
  figma: SiFigma,
};

export const SKILLS_DATA = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML", icon: "html", color: "text-orange-500" },
      { name: "CSS", icon: "css", color: "text-blue-500" },
      { name: "Vite", icon: "vite", color: "text-violet-500" },
      { name: "React", icon: "react", color: "text-sky-500" },
      { name: "Next.js", icon: "nextjs", color: "text-primary" },
    ],
  },
  {
    name: "UI/UX & Libraries",
    skills: [
      { name: "TailwindCSS", icon: "tailwind", color: "text-sky-500" },
      { name: "Shadcn/UI", icon: "shadcn", color: "text-primary" },
      { name: "Material UI", icon: "mui", color: "text-blue-500" },
      { name: "DaisyUI", icon: "daisyui", color: "text-teal-500" },
      { name: "Bootstrap", icon: "bootstrap", color: "text-violet-500" },
      { name: "Filament", icon: "filament", color: "text-orange-500" },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Flask", icon: "flask", color: "text-primary" },
      { name: "Node.js", icon: "node", color: "text-green-500" },
      { name: "FastAPI", icon: "fastapi", color: "text-emerald-500" },
      { name: "Laravel", icon: "laravel", color: "text-red-500" },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", icon: "python", color: "text-blue-500" },
      { name: "JavaScript", icon: "javascript", color: "text-yellow-500" },
      { name: "PHP", icon: "php", color: "text-violet-500" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: "mysql", color: "text-blue-500" },
      { name: "PostgreSQL", icon: "postgresql", color: "text-indigo-500" },
      { name: "SQLite", icon: "sqlite", color: "text-sky-500" },
      { name: "Prisma", icon: "prisma", color: "text-green-500" },
      { name: "Firebase", icon: "firebase", color: "text-orange-500" },
      { name: "Supabase", icon: "supabase", color: "text-teal-500" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "GitHub", icon: "github", color: "text-gray-500" },
      { name: "Postman", icon: "postman", color: "text-orange-500" },
      { name: "Figma", icon: "figma", color: "text-primary" },
    ],
  },
];

export const getAllSkills = () =>
  SKILLS_DATA.flatMap((category) => category.skills);

/** Lookup map: { "React": { icon, color } } */
export const SKILLS_MAP = getAllSkills().reduce((acc, skill) => {
  acc[skill.name] = {
    icon: skill.icon,
    color: skill.color,
  };
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

// const iconSize = 18;

// export const SKILLS_DATA = [
//   {
//     name: "Frontend Development",
//     skills: [
//       {
//         name: "HTML",
//         icon: <HtmlIcon size={iconSize} className="text-orange-500" />,
//       },
//       {
//         name: "CSS",
//         icon: <CssIcon size={iconSize} className="text-blue-500" />,
//       },
//       {
//         name: "Vite",
//         icon: <ViteIcon size={iconSize} className="text-violet-500" />,
//       },
//       {
//         name: "React",
//         icon: <ReactIcon size={iconSize} className="text-sky-500" />,
//       },
//       {
//         name: "Next.js",
//         icon: <NextIcon size={iconSize} className="text-primary" />,
//       },
//     ],
//   },

//   {
//     name: "UI/UX & Libraries",
//     skills: [
//       {
//         name: "TailwindCSS",
//         icon: <TailwindIcon size={iconSize} className="text-sky-500" />,
//       },
//       {
//         name: "Shadcn/UI",
//         icon: <ShadcnUIIcon size={iconSize} className="text-primary" />,
//       },
//       {
//         name: "Material UI",
//         icon: <MaterialUIIcon size={iconSize} className="text-blue-500" />,
//       },
//       {
//         name: "DaisyUI",
//         icon: <DaisyUIIcon size={iconSize} className="text-teal-500" />,
//       },
//       {
//         name: "Bootstrap",
//         icon: <BootstrapIcon size={iconSize} className="text-violet-500" />,
//       },
//       {
//         name: "Filament",
//         icon: <FilamentIcon size={iconSize} className="text-orange-500" />,
//       },
//     ],
//   },

//   {
//     name: "Backend Development",
//     skills: [
//       {
//         name: "Flask",
//         icon: <FlaskIcon size={iconSize} className="text-primary" />,
//       },
//       {
//         name: "Node.js",
//         icon: <NodeIcon size={iconSize} className="text-green-500" />,
//       },
//       // {
//       //   name: "Express.js",
//       //   icon: <ExpressIcon size={iconSize} className='text-primary' />,
//       // },
//       {
//         name: "FastAPI",
//         icon: <FastAPIIcon size={iconSize} className="text-emerald-500" />,
//       },
//       // {
//       //   name: "Django",
//       //   icon: <DjangoIcon size={iconSize} className='text-green-500' />,
//       // },
//       {
//         name: "Laravel",
//         icon: <LaravelIcon size={iconSize} className="text-red-500" />,
//       },
//     ],
//   },

//   {
//     name: "Programming Languages",
//     skills: [
//       {
//         name: "Python",
//         icon: <PythonIcon size={iconSize} className="text-blue-500" />,
//       },
//       {
//         name: "JavaScript",
//         icon: <JavaScriptIcon size={iconSize} className="text-yellow-500" />,
//       },
//       {
//         name: "PHP",
//         icon: <PHPIcon size={iconSize} className="text-violet-500" />,
//       },
//     ],
//   },

//   {
//     name: "Databases",
//     skills: [
//       {
//         name: "MySQL",
//         icon: <MySQLIcon size={iconSize} className="text-blue-500" />,
//       },
//       // {
//       //   name: "MongoDB",
//       //   icon: <MongoDBIcon size={iconSize} className='text-green-500' />,
//       // },
//       {
//         name: "PostgreSQL",
//         icon: <PostgreSQLIcon size={iconSize} className="text-indigo-500" />,
//       },
//       {
//         name: "SQLite",
//         icon: <SQLiteIcon size={iconSize} className="text-sky-500" />,
//       },
//       {
//         name: "Prisma",
//         icon: <PrismaIcon size={iconSize} className="text-green-500" />,
//       },
//       {
//         name: "Firebase",
//         icon: <FirebaseIcon size={iconSize} className="text-orange-500" />,
//       },
//       {
//         name: "Supabase",
//         icon: <SupabaseIcon size={iconSize} className="text-teal-500" />,
//       },
//     ],
//   },

//   {
//     name: "Tools & Platforms",
//     skills: [
//       {
//         name: "GitHub",
//         icon: <GitHubIcon size={iconSize} className="text-gray-500" />,
//       },
//       {
//         name: "Postman",
//         icon: <PostmanIcon size={iconSize} className="text-orange-500" />,
//       },
//       {
//         name: "Figma",
//         icon: <FigmaIcon size={iconSize} className="text-primary" />,
//       },
//     ],
//   },
// ];

// export const getAllSkills = () =>
//   SKILLS_DATA.flatMap((category) => category.skills);

// /** Lookup map: { "React": <Icon /> } */
// export const SKILLS_MAP = getAllSkills().reduce((acc, skill) => {
//   acc[skill.name] = skill.icon;
//   return acc;
// }, {});

// export const getSkillsByCategory = (categoryName) =>
//   SKILLS_DATA.find((c) => c.name === categoryName)?.skills ?? [];

// export const searchSkills = (query) =>
//   getAllSkills().filter((skill) =>
//     skill.name.toLowerCase().includes(query.toLowerCase()),
//   );

// export const getRandomSkills = (count) =>
//   [...getAllSkills()].sort(() => 0.5 - Math.random()).slice(0, count);

// export const skillsStats = {
//   totalSkills: getAllSkills().length,
//   totalCategories: SKILLS_DATA.length,
//   averageSkillsPerCategory: Math.round(
//     getAllSkills().length / SKILLS_DATA.length,
//   ),
//   categoryWithMostSkills: SKILLS_DATA.reduce((prev, current) =>
//     prev.skills.length > current.skills.length ? prev : current,
//   ).name,
//   categoryWithLeastSkills: SKILLS_DATA.reduce((prev, current) =>
//     prev.skills.length < current.skills.length ? prev : current,
//   ).name,
// };
