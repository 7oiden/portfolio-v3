import { archiveProjects, selectedProjects } from "./projectMeta";

export const nb = {
  localeName: "Norsk",
  nav: {
    home: "Hjem",
    projects: "Prosjekter",
    background: "Bakgrunn",
    about: "Om meg",
    menu: "Meny",
    close: "Lukk",
    languageLabel: "Velg språk",
  },
  common: {
    moreInfo: "Mer informasjon",
    toTop: "Til toppen",
    githubLabel: "Besøk GitHub-profilen min",
    linkedinLabel: "Besøk LinkedIn-profilen min",
    notFoundTitle: "Siden ble ikke funnet",
    notFoundBody: "Denne adressen finnes ikke.",
    backHome: "Til forsiden",
  },
  backgroundText: {
    home: "Hjem.",
    projects: "Prosjekter.",
    background: "Bakgrunn.",
    about: "Om meg.",
  },
  home: {
    hero: {
      subtitle:
        "Frontendutvikler som bygger nettsider for små og mellomstore bedrifter.",
      getInTouch: "Ta kontakt",
      viewWork: "Se arbeid",
      latestWork: "Siste arbeid",
      scrollDown: "Skroll",
      imageSuffix: "nettside",
    },
    intro: {
      portraitAlt: "Portrett av Tommy Johnsen",
      basedIn: "Basert i Bergen",
      kicker: "Om meg",
      heading: "Fra byggingeniør til frontend.",
      firstParagraph:
        "Jeg heter Tommy. Jeg jobbet i over ti år som byggingeniør og ledet store byggeprosjekter. I 2020 byttet jeg til frontend — den samme typen problemløsing, kombinert med det visuelle håndverket jeg ikke fikk brukt i ingeniørjobben.",
      secondBeforeReact:
        "Nå bygger jeg nettsider og apper for lokale bedrifter. For tiden er det en ny nettside for en næringsdrivende, bygget i ",
      secondBetween: ", samtidig som jeg tar et kurs i ",
      secondAfter: " hos Scrimba.",
      facts: [
        { label: "Bakgrunn", value: "Byggingeniør" },
        { label: "Jobber med", value: "Lokale bedrifter" },
        { label: "Bygger med", value: "React og KI" },
      ],
      learnMore: "Les mer",
    },
    skills: {
      kicker: "Kompetanse",
      heading: "Dette jobber jeg med.",
      groups: [
        {
          label: "Frontend",
          items: ["HTML, CSS & Sass", "JavaScript", "React", "Next.js", "WordPress"],
        },
        {
          label: "Design",
          items: [
            "Figma",
            "UI & UX",
            "Universell utforming",
            "Responsivt design",
            "SEO",
          ],
        },
        {
          label: "Verktøy",
          items: ["Git & GitHub", "Sanity", "Supabase", "KI-arbeidsflyt"],
        },
      ],
    },
  },
  projects: {
    pageTitle: "Prosjekter",
    selectedKicker: "Utvalgte arbeider",
    selectedHeading: "Nettsider og apper for lokale bedrifter.",
    archiveKicker: "Arkiv",
    archiveHeading: "Skoleprosjekter fra Noroff.",
    liveSite: "Se nettside",
    selected: [
      {
        id: "eidesjoen",
        ...selectedProjects.eidesjoen,
        type: "Nettside med booking",
        date: "3. kvartal 2026",
        description: [
          "Dette er en ny nettside for det lokale grendalaget mitt. Den er bygget med Next.js og Tailwind, med Sanity som publiseringsløsning.",
          "Løsningen har et brukervennlig grensesnitt for bestilling og administrasjon av brukerkontoer.",
        ],
        imageAlt:
          "Skjermbilde av forsiden til Eidesjøen Grendalag på datamaskin",
      },
      {
        id: "stjernedryss",
        ...selectedProjects.stjernedryss,
        type: "Belønningsapp for barn",
        date: "3. kvartal 2026",
        description: [
          "Stjernedryss er en app der foreldre kan belønne barn for god oppførsel. Den er bygget med Next.js og Tailwind, med Supabase som backend.",
          "Barna får sin egen side der de kan se opptjente stjerner og fremgangen mot neste belønning.",
        ],
        imageAlt: "Skjermbilde av landingssiden til Stjernedryss",
      },
      {
        id: "storesund-service",
        ...selectedProjects["storesund-service"],
        type: "Bedriftsnettside",
        date: "3. kvartal 2026",
        description: [
          "Jeg bygger en ny nettside for en servicetekniker innen varmepumper og klimaanlegg. Den er bygget med Next.js og Tailwind, med Supabase som backend.",
          "Løsningen har et brukervennlig grensesnitt for bestilling og administrasjon av brukerkontoer.",
        ],
        imageAlt: "Skjermbilde av forsiden til Storesund Service",
      },
      {
        id: "storesund-utleie",
        ...selectedProjects["storesund-utleie"],
        type: "Bedriftsnettside",
        date: "3. kvartal 2026",
        description: [
          "Jeg bygger en ny nettside for et lokalt utleiefirma innen varmepumper og klimaanlegg.",
          "Nettstedet er bygget med Next.js og Tailwind, med Supabase som backend.",
        ],
        imageAlt: "Skjermbilde av forsiden til Storesund Utleie",
      },
      {
        id: "herifra",
        ...selectedProjects.herifra,
        type: "Nettside med booking",
        date: "3.–4. kvartal 2025",
        description: [
          "Herifra.no er en bookingplattform bygget med React og Vite, stylet med Sass og støttet av Supabase.",
          "Den omfatter bestillingsflyt, kontoadministrasjon, Stripe-betalinger og e-post via SendGrid.",
        ],
        imageAlt: "Skjermbilde av forsiden til Herifra.no på datamaskin",
      },
    ],
    archive: [
      {
        id: "holidaze",
        ...archiveProjects.holidaze,
        type: "Prosjekteksamen 2",
        date: "Mai 2022",
        description: [
          "Holidaze er en overnattingsportal for et lokalt turistbyrå i Bergen. Nettstedet er bygget med React, React-Bootstrap og Sass. Det har en kundeside med bestilling og en administrasjonsside for henvendelser, bestillinger og nye overnattingssteder.",
          "WooCommerce-API-et brukes til overnattingssteder, omtaler og autentisering. Strapi lagrer bestillings- og kontakthenvendelser, mens Google Maps viser kartdata basert på adressene.",
        ],
        imageAlt: "Skjermbilde av forsiden til Holidaze på datamaskin",
      },
      {
        id: "portfolio-v2",
        ...archiveProjects["portfolio-v2"],
        type: "Modulprosjekt",
        date: "Jan 2022",
        description: [
          "Dette var mitt første ordentlige forsøk på å lage en personlig portefølje, og et obligatorisk prosjekt som avsluttet porteføljemodulen ved Noroff.",
          "Nettstedet ble bygget på én uke med HTML, vanlig JavaScript og Sass. Det er responsivt og utviklet med en mobil-først-tilnærming.",
        ],
        imageAlt:
          "Forsiden til den andre versjonen av porteføljen på datamaskin",
      },
      {
        id: "mercury",
        ...archiveProjects.mercury,
        type: "Semesterprosjekt 2",
        date: "Des 2021",
        description: [
          "Mercury Shoes er en nettbutikk for løpesko, bygget med HTML, vanlig JavaScript og Sass. Kundesiden har handlekurv med lokal lagring, mens administrasjonssiden lar brukeren legge til, redigere og slette produkter. Produktdata hentes fra Strapi.",
          "Prosjektet ble levert i det andre året av frontendstudiet ved Noroff. Det fikk senere et visuelt løft og ny funksjonalitet, blant annet favoritter, under porteføljearbeidet i 2022.",
        ],
        imageAlt: "Skjermbilde av forsiden til Mercury Shoes på datamaskin",
      },
      {
        id: "photography",
        ...archiveProjects.photography,
        type: "Prosjekteksamen 1",
        date: "Mai 2021",
        description: [
          "Passionate Photography er en blogg for den fiktive fotografen Christopher Duvall. Nettstedet er bygget med HTML, vanlig JavaScript og CSS, og inneholder forside, bloggoversikt, innlegg, om-side og kontaktside.",
          "Innholdet ligger i en WordPress-installasjon som brukes som headless CMS, og hentes gjennom WordPress REST API.",
        ],
        imageAlt:
          "Skjermbilde av forsiden til Passionate Photography på datamaskin",
      },
      {
        id: "csm",
        ...archiveProjects.csm,
        type: "Semesterprosjekt 1",
        date: "Des 2020",
        description: [
          "Community Science Museum er et fiktivt, lokalt vitensenter for barn. Nettstedet er utviklet med HTML og CSS.",
          "Prosjektet var en fire ukers oppgave i det første året av frontendstudiet ved Noroff og ble levert i desember 2020.",
        ],
        imageAlt:
          "Skjermbilde av forsiden til Community Science Museum på datamaskin",
      },
    ],
  },
  career: {
    pageTitle: "Bakgrunn",
    kicker: "Karriere",
    heading: "Arbeid og utdanning.",
    lead:
      "Jeg jobber for tiden som frilanser og er åpen for en fulltidsstilling innen frontend.",
    experienceLabel: "Erfaring",
    educationLabel: "Utdanning",
    download: "Last ned CV",
    downloadLabel: "Last ned CV-en min",
    experience: [
      {
        id: "freelance",
        title: "Frontendutvikler",
        org: "Frilanser",
        date: "Sep 2025 – i dag",
        summary:
          "Jeg bygger nettsider og apper for lokale bedrifter. For tiden jobber jeg med en ny React-side for en næringsdrivende.",
        url: null,
      },
      {
        id: "herifra",
        title: "Fullstackutvikler",
        org: "Herifra AS",
        date: "Jun 2025 – sep 2025",
        summary:
          "Internt arbeid med kundenes webapper i Herifra-teamet — utvikling og vedlikehold av både grensesnitt og backend.",
        url: "https://herifra.no/",
      },
      {
        id: "box-protector",
        title: "Utvikler, lager og logistikk",
        org: "Box Protector AS",
        date: "Jun 2023 – jan 2024",
        summary:
          "Eneste ansatte i en nettbutikk for retrospill. Jeg driftet nettstedet og produktkatalogen, i tillegg til lager, pakking, fotografering og kundeservice.",
        url: null,
      },
      {
        id: "nobi",
        title: "Teamleder, prosjektering",
        org: "NOBI Voss",
        date: "Jan 2018 – mai 2019",
        summary:
          "Prosjektledelse, planlegging og personalansvar for prosjekteringsavdelingen. Innførte LEAN-arbeidsflyt i teamet.",
        url: null,
      },
      {
        id: "project-engineer",
        title: "Prosjektingeniør",
        org: "Spenncon AS / Voss Cementvarefabrikk AS",
        date: "Aug 2008 – jan 2018",
        summary:
          "Prosjektering av prefabrikkerte betongelementer for produksjon, konstruksjon og montasje. De siste årene jobbet jeg med de største og mest komplekse prosjektene.",
        url: null,
      },
    ],
    education: [
      {
        id: "scrimba-ai",
        title: "AI Engineering",
        org: "Scrimba",
        date: "Pågående",
        summary:
          "Deltidskurs i AI Engineering ved siden av arbeidet som frilanser.",
        url: "https://scrimba.com/",
      },
      {
        id: "noroff",
        title: "Frontendutvikling",
        org: "Noroff",
        date: "Aug 2020 – jun 2022",
        summary:
          "Toårig fulltidsstudium på nett: HTML, CSS, JavaScript, React og tilhørende verktøy.",
        url: "https://www.noroff.no/en/studies/vocational-school/front-end-development",
      },
      {
        id: "bachelor",
        title: "Bachelor i byggingeniørfag",
        org: "Bergen University College",
        date: "Aug 2005 – jun 2008",
        summary:
          "Fordypning i konstruksjonsteknikk med stål, tre og betong. Mitt første møte med programmering var VBA for Excel.",
        url: null,
      },
    ],
  },
  about: {
    pageTitle: "Om meg",
    biography: {
      kicker: "Biografi",
      heading: "Veien hit.",
      originBefore: "Jeg er opprinnelig fra Sunnmøre. Jeg flyttet til ",
      originAfter:
        " i 2004 for å studere, og har bodd i området — mer eller mindre — siden.",
      careerBefore:
        "Før dette jobbet jeg i over ti år som byggingeniør, hovedsakelig med store byggeprosjekter. I 2020 begynte jeg på ",
      careerAfter:
        " sitt frontendstudium som nettstudent på fulltid. Jeg ønsket å kombinere den analytiske siden av ingeniørfaget med det visuelle arbeidet jeg savnet der.",
      finalParagraph:
        "Det er fortsatt denne kombinasjonen som holder på interessen min: logikk på den ene siden og det å skape noe synlig på den andre.",
      place: "Basert i Bergensområdet",
    },
    info: {
      kicker: "Personlig profil",
      heading: "Bli bedre kjent.",
      interests: "Interesser",
      interestsIntro:
        "Jeg har mange ulike interesser — det holder hodet skjerpet og arbeidet variert.",
      howIWork: "Slik jobber jeg",
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
    },
    contact: {
      kicker: "Kontakt",
      heading: "Send en melding.",
      intro: "Bruk skjemaet, eller send meg en e-post direkte.",
    },
  },
  form: {
    fields: {
      name: "Navn",
      email: "E-post",
      subject: "Emne",
      message: "Melding",
    },
    validation: {
      nameRequired: "* Skriv inn navnet ditt",
      nameMin: "* Navnet må inneholde minst 3 tegn",
      nameMax: "* Navnet kan ikke inneholde mer enn 20 tegn",
      emailRequired: "* Skriv inn e-postadressen din",
      emailInvalid: "* Skriv inn en gyldig e-postadresse",
      subjectRequired: "* Skriv inn et emne",
      subjectMin: "* Emnet må inneholde minst 4 tegn",
      subjectMax: "* Emnet kan ikke inneholde mer enn 20 tegn",
      messageRequired: "* Skriv inn en melding",
      messageMin: "* Meldingen må inneholde minst 10 tegn",
      messageMax: "* Meldingen kan ikke inneholde mer enn 400 tegn",
    },
    successHeading: "Takk for meldingen!",
    successBody: "Jeg svarer deg så snart jeg kan.",
    errorHeading: "Noe gikk galt!",
    errorBody: "Meldingen kunne ikke sendes. Prøv igjen senere.",
    submitting: "Sender...",
    send: "Send",
    clearField: "Tøm feltet",
  },
};
