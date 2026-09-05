export const educationData = [
  {
    id: "scrimba-ai",
    title: "AI Engineering",
    org: "Scrimba",
    date: "Ongoing",
    summary:
      "Part-time course in AI engineering, alongside freelance work.",
    url: "https://scrimba.com/",
  },
  {
    id: "noroff",
    title: "Frontend Development",
    org: "Noroff",
    date: "Aug 2020 – Jun 2022",
    summary:
      "Two-year full-time programme, online: HTML, CSS, JavaScript, React, and related tools.",
    url: "https://www.noroff.no/en/studies/vocational-school/front-end-development",
  },
  {
    id: "bachelor",
    title: "Bachelor's in Civil Engineering",
    org: "Bergen University College",
    date: "Aug 2005 – Jun 2008",
    summary:
      "Structural engineering in the later years — steel, timber and concrete. First contact with programming was VBA for Excel.",
    url: null,
  },
];

const norwegianEducationText = {
  "scrimba-ai": {
    date: "Pågående",
    summary:
      "Deltidskurs i AI Engineering ved siden av arbeidet som frilanser.",
  },
  noroff: {
    title: "Frontendutvikling",
    date: "Aug 2020 – jun 2022",
    summary:
      "Toårig fulltidsstudium på nett: HTML, CSS, JavaScript, React og tilhørende verktøy.",
  },
  bachelor: {
    title: "Bachelor i byggingeniørfag",
    date: "Aug 2005 – jun 2008",
    summary:
      "Fordypning i konstruksjonsteknikk med stål, tre og betong. Mitt første møte med programmering var VBA for Excel.",
  },
};

export function getEducationData(locale) {
  if (locale !== "nb") {
    return educationData;
  }

  return educationData.map((entry) => ({
    ...entry,
    ...norwegianEducationText[entry.id],
  }));
}
