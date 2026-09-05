export const experienceData = [
  {
    id: "freelance",
    title: "Frontend Developer",
    org: "Freelance",
    date: "Sep 2025 – Present",
    summary:
      "I build websites and apps for local businesses. Right now that's a new site for an entrepreneur, in React.",
    url: null,
  },
  {
    id: "herifra",
    title: "Fullstack Developer",
    org: "Herifra AS",
    date: "Jun 2025 – Sep 2025",
    summary:
      "In-house work on client web apps with the Herifra team — building and maintaining interfaces, and the backend that sits behind them.",
    url: "https://herifra.no/",
  },
  {
    id: "box-protector",
    title: "Developer, Warehouse and Logistics",
    org: "Box Protector AS",
    date: "Jun 2023 – Jan 2024",
    summary:
      "Sole employee at a retro-games webshop. I ran the site and product catalogue, alongside warehouse, packing, photography and customer service.",
    url: null,
  },
  {
    id: "nobi",
    title: "Team Leader, Engineering",
    org: "NOBI Voss",
    date: "Jan 2018 – May 2019",
    summary:
      "Project management, planning and personnel responsibility for the engineering department. Brought LEAN workflow into the team.",
    url: null,
  },
  {
    id: "project-engineer",
    title: "Project Engineer",
    org: "Spenncon AS / Voss Cementvarefabrikk AS",
    date: "Aug 2008 – Jan 2018",
    summary:
      "Project engineering for precast concrete — production, design and assembly. The later years were the larger, more complex jobs.",
    url: null,
  },
];

const norwegianExperienceText = {
  freelance: {
    title: "Frontendutvikler",
    org: "Frilanser",
    date: "Sep 2025 – i dag",
    summary:
      "Jeg bygger nettsider og apper for lokale bedrifter. For tiden jobber jeg med en ny React-side for en næringsdrivende.",
  },
  herifra: {
    title: "Fullstackutvikler",
    date: "Jun 2025 – sep 2025",
    summary:
      "Internt arbeid med kundenes webapper i Herifra-teamet — utvikling og vedlikehold av både grensesnitt og backend.",
  },
  "box-protector": {
    title: "Utvikler, lager og logistikk",
    date: "Jun 2023 – jan 2024",
    summary:
      "Eneste ansatte i en nettbutikk for retrospill. Jeg driftet nettstedet og produktkatalogen, i tillegg til lager, pakking, fotografering og kundeservice.",
  },
  nobi: {
    title: "Teamleder, prosjektering",
    date: "Jan 2018 – mai 2019",
    summary:
      "Prosjektledelse, planlegging og personalansvar for prosjekteringsavdelingen. Innførte LEAN-arbeidsflyt i teamet.",
  },
  "project-engineer": {
    title: "Prosjektingeniør",
    date: "Aug 2008 – jan 2018",
    summary:
      "Prosjektering av prefabrikkerte betongelementer for produksjon, konstruksjon og montasje. De siste årene jobbet jeg med de største og mest komplekse prosjektene.",
  },
};

export function getExperienceData(locale) {
  if (locale !== "nb") {
    return experienceData;
  }

  return experienceData.map((entry) => ({
    ...entry,
    ...norwegianExperienceText[entry.id],
  }));
}
