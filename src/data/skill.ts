export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "C#", "C++", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React.js", "TanStack Query", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "Microsoft SQL Server",
      "T-SQL",
      "Supabase",
      "MongoDB",
    ],
  },
  {
    label: "ORM / ODM",
    items: ["Prisma", "Mongoose"],
  },
  {
    label: "Cloud",
    items: [
      "Microsoft Azure",
      "Azure Functions",
      "Azure Storage",
      "Azure App Service",
    ],
  },
  {
    label: "Testing",
    items: ["Vitest", "React Testing Library"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Eclipse", "npm"],
  },
];
