export const skillGroups = [
  {
    label: "Frontend",
    items: ["HTML, CSS & Sass", "JavaScript", "React", "Next.js", "WordPress"],
  },
  {
    label: "Design",
    items: ["Figma", "UI & UX", "Accessibility", "Responsive design", "SEO"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "Sanity", "Supabase", "AI workflows"],
  },
];

const norwegianSkillGroups = skillGroups.map((group) => {
  if (group.label === "Design") {
    return {
      ...group,
      items: [
        "Figma",
        "UI & UX",
        "Universell utforming",
        "Responsivt design",
        "SEO",
      ],
    };
  }

  if (group.label === "Tools") {
    return {
      ...group,
      label: "Verktøy",
      items: ["Git & GitHub", "Sanity", "Supabase", "KI-arbeidsflyt"],
    };
  }

  return group;
});

export function getSkillGroups(locale) {
  return locale === "nb" ? norwegianSkillGroups : skillGroups;
}
