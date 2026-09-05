export const hobbiesArr = [
  "photography",
  "gaming",
  "football",
  "literature",
  "film",
  "working out",
  "science",
  "hiking",
  "mindfulness",
  "metaverse",
  "psychology",
];

export const attributesArr = [
  "Attention to detail",
  "Problem solver",
  "Enjoys learning",
  "Organized",
  "Good communicator",
  "Aesthetic sense",
  "Takes responsibility",
  "Quality oriented",
  "Analytical skills",
];

const norwegianAboutData = {
  hobbies: [
    "fotografering",
    "dataspill",
    "fotball",
    "litteratur",
    "film",
    "trening",
    "vitenskap",
    "friluftsliv",
    "mindfulness",
    "metaverset",
    "psykologi",
  ],
  attributes: [
    "Nøyaktig",
    "Løsningsorientert",
    "Lærevillig",
    "Organisert",
    "God kommunikasjonsevne",
    "Estetisk sans",
    "Tar ansvar",
    "Kvalitetsbevisst",
    "Analytisk",
  ],
};

export function getAboutData(locale) {
  if (locale === "nb") {
    return norwegianAboutData;
  }

  return {
    hobbies: hobbiesArr,
    attributes: attributesArr,
  };
}
