export const schoolProjectData = [
  {
    id: 1,
    title: "Holidaze",
    type: "Project Exam 2",
    date: "May 2022",
    description: [
      "Holidaze is an accommodation booking site for a local tourist agency located in Bergen, Norway. The site is coded with React based on React-Bootstrap components and styled using Sass. The site has a customer facing side with booking functionality, and a admin section that can be accessed with the use of JWT tokens. In the admin section, contact and booking enquiries can be handled as well the option to add new establishments.",
      "The WP WooCommerce API is used for the establishments, customer reviews and authentication, while an API from Strapi hosted on Heroku is used to store and fetch data from booking- and contact enquiries. In addition a Google Maps API is used to fetch live map data from establishment addresses.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1654681030/holidaze_x4owk1.jpg",
    image_alt: "Screenshot of the Holidaze site home page on desktop",
    netlify_url: "https://holidaze-v2.netlify.app",
    github_url: "https://github.com/7oiden/holidaze-exam-2-v2.git",
    tools: [
      "react",
      "sass",
      "bootstrap",
      "wordpress",
      "strapi",
      "heroku",
      "adobe XD",
    ],
  },
  {
    id: 2,
    title: "My Portfolio v2",
    type: "Module Course Project",
    date: "Jan 2022",
    description: [
      "This was my first real attempt to make a personal portfolio site, and was a mandatory project that marked the end of the Portfolio module at Noroff.",
      "The site is coded using HTML and vanilla Javascript, and is styled using Sass, with a time frame of one week . The site is responsive and has a mobile first approach.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1706447026/my-portfolio-v2_vjerto.png",
    image_alt: "The Portfolio version 2 site home page on desktop",
    netlify_url: "https://tommy-johnsen-portfolio.netlify.app",
    github_url: "https://github.com/7oiden/my-portfolio.git",
    tools: ["HTML", "javascript", "sass", "adobe XD"],
  },
  {
    id: 3,
    title: "Mercury Shoes",
    type: "Semester Project 2",
    date: "Dec 2021",
    description: [
      "Mercury shoes is an e-commerce site selling running shoes. The site is coded using HTML and vanilla Javascript, and is styled using Sass. The site has a costumer facing side with basket functionality using local storage to store data, and also an admin facing side, where products can be added, edited and deleted. An API from Strapi hosted on Heroku is used to store and fetch product data.",
      "This project was an assignment from Noroff's Frontend course second year and was delivered in December 2021. The site was given a facelift as well as given some added functionality like the favorites feature, when working with our portfolio assignment from Noroff in 2022.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1654681036/mercury_lyf9vl.jpg",
    image_alt: "Screenshot of the Mercury Shoes site home page on desktop",
    netlify_url: "https://mercury-shoes.netlify.app",
    github_url: "https://github.com/7oiden/mercury-shoes-sp2.git",
    tools: ["HTML", "javascript", "sass", "strapi", "heroku", "adobe XD"],
  },
  {
    id: 4,
    title: "Passionate Photography",
    type: "Project Exam 1",
    date: "May 2021",
    description: [
      "Passionate Photography is personal blog site for the fictional photographer Christopher Duvall. The site is coded using HTML and vanilla Javascript, and is styled using regular CSS. The site consists of a homepage, a page for blog posts, pages for specific posts, an about page and a contact page.",
      "The content for the website is stored on a WordPress installation used as a headless CMS, taking advantage of the WordPress REST API to fetch the data.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1666601693/Passionate_Photography_bhxp8s.jpg",
    image_alt: "Screenshot of The Passionate Photography home page on desktop",
    netlify_url: "https://passionate-photography-7oiden.netlify.app",
    github_url: "https://github.com/7oiden/passionate-photography-exam-1.git",
    tools: ["HTML", "javascript", "CSS", "wordpress", "adobe XD"],
  },
  {
    id: 5,
    title: "Community Science Museum",
    type: "Semester project 1",
    date: "Dec 2020",
    description: [
      "The Community Science Museum is a local science museum for children. The website for this fictional museum is developed with HTML and CSS.",
      "This project was an assignment from Noroff's Frontend course first year and was delivered in December 2020. The time frame was 4 weeks, and the project requirements are listed in the next section.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1668508833/csm-bergen_gi4z7d.jpg",
    image_alt: "Screenshot of the Community Science Museum homepage on desktop",
    netlify_url: "https://csm-bergen.netlify.app",
    github_url: "https://github.com/7oiden/community-science-museum-sp1.git",
    tools: ["HTML", "javascript", "CSS", "adobe XD"],
  },
];

export const realProjectData = [
  {
    id: 1,
    title: "Eidesjøen Grendalag",
    type: "Booking Platform Website",
    date: "Q3 2026",
    description: [
      "This is a new site for my local Grendalag. The site is built with Next.js and styled using Tailwind, while Sanity is used for the content management system.",
      "It features a user-friendly interface for booking appointments and managing user accounts.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1788456799/eidesjoen-grendalag-hero_mpmsyx.png",
    image_alt:
      "Screenshot of the Eidesjøen Grendalag site home page on desktop",
    netlify_url: "https://eidesjoen-grendalag.vercel.app/",
    github_url: "",
    tools: ["NextJS", "Tailwind", "Cursor", "Sanity"],
  },
  {
    id: 2,
    title: "Stjernedryss",
    type: "Kids Reward App",
    date: "Q3 2026",
    description: [
      "Stjernedryss is an app where parents can reward their kids for good behavior. The app is built with Next.js and styled using Tailwind, while Supabase is used for the backend.",
      "Kids get their own page to see stars earned and the progress towards the next reward.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1788455960/stjernedryss-lamding-page_yy2ev2.png",
    image_alt: "Screenshot of the Stjernedryss landing page on desktop",
    netlify_url: "https://stjernedryss.netlify.app/",
    github_url: null,
    tools: ["NextJS", "Tailwind", "Cursor", "Supabase"],
  },
  {
    id: 3,
    title: "Storesund Service",
    type: "Business Website",
    date: "Q3 2026",
    description: [
      "I am currently building a new business website for a heat-pump and air-conditioning service technician. The site is built with Next.js and styled using Tailwind, while Supabase is used for the backend.",
      "It features a user-friendly interface for booking appointments and managing user accounts.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1788455660/storesund-service-hero_up2mnl.png",
    image_alt:
      "Screenshot of the Storesund Service site home page on desktop",
    netlify_url: "https://storesund-service.netlify.app",
    github_url: null,
    tools: ["NextJS", "Tailwind", "Cursor", "Supabase"],
  },
  {
    id: 4,
    title: "Storesund Utleie",
    type: "Business Website",
    date: "Q3 2026",
    description: [
      "I am currently building a new business website for a local heat-pump and air-conditioning rental company.",
      "The site is built with Next.js and styled using Tailwind, while Supabase is used for the backend.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1788456261/storesund-utleie-hero_drhhj8.png",
    image_alt:
      "Screenshot of the Storesund Utleie site home page on desktop",
    netlify_url: "https://storesund-utleie.netlify.app/",
    github_url: null,
    tools: ["NextJS", "Tailwind", "Cursor", "Supabase"],
  },
  {
    id: 5,
    title: "Herifra",
    type: "Booking Platform Website",
    date: "Q3 - Q4 2025",
    description: [
      "Herifra.no is a booking platform built with React and Vite, styled with Sass, and backed by Supabase.",
      "It includes booking flows, account management, Stripe payments, and email via SendGrid.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1762432814/herifra-hero_fjiz0k.png",
    image_alt: "Screenshot of the Herifra.no site home page on desktop",
    netlify_url: "https://www.herifra.no",
    github_url: "",
    tools: ["react", "vite", "sass", "supabase", "stripe", "sendgrid"],
  },
];

const norwegianProjectText = {
  school: {
    1: {
      type: "Prosjekteksamen 2",
      date: "Mai 2022",
      description: [
        "Holidaze er en overnattingsportal for et lokalt turistbyrå i Bergen. Nettstedet er bygget med React, React-Bootstrap og Sass. Det har en kundeside med bestilling og en administrasjonsside for henvendelser, bestillinger og nye overnattingssteder.",
        "WooCommerce-API-et brukes til overnattingssteder, omtaler og autentisering. Strapi lagrer bestillings- og kontakthenvendelser, mens Google Maps viser kartdata basert på adressene.",
      ],
      image_alt: "Skjermbilde av forsiden til Holidaze på datamaskin",
    },
    2: {
      type: "Modulprosjekt",
      date: "Jan 2022",
      description: [
        "Dette var mitt første ordentlige forsøk på å lage en personlig portefølje, og et obligatorisk prosjekt som avsluttet porteføljemodulen ved Noroff.",
        "Nettstedet ble bygget på én uke med HTML, vanlig JavaScript og Sass. Det er responsivt og utviklet med en mobil-først-tilnærming.",
      ],
      image_alt:
        "Forsiden til den andre versjonen av porteføljen på datamaskin",
    },
    3: {
      type: "Semesterprosjekt 2",
      date: "Des 2021",
      description: [
        "Mercury Shoes er en nettbutikk for løpesko, bygget med HTML, vanlig JavaScript og Sass. Kundesiden har handlekurv med lokal lagring, mens administrasjonssiden lar brukeren legge til, redigere og slette produkter. Produktdata hentes fra Strapi.",
        "Prosjektet ble levert i det andre året av frontendstudiet ved Noroff. Det fikk senere et visuelt løft og ny funksjonalitet, blant annet favoritter, under porteføljearbeidet i 2022.",
      ],
      image_alt: "Skjermbilde av forsiden til Mercury Shoes på datamaskin",
    },
    4: {
      type: "Prosjekteksamen 1",
      date: "Mai 2021",
      description: [
        "Passionate Photography er en blogg for den fiktive fotografen Christopher Duvall. Nettstedet er bygget med HTML, vanlig JavaScript og CSS, og inneholder forside, bloggoversikt, innlegg, om-side og kontaktside.",
        "Innholdet ligger i en WordPress-installasjon som brukes som headless CMS, og hentes gjennom WordPress REST API.",
      ],
      image_alt:
        "Skjermbilde av forsiden til Passionate Photography på datamaskin",
    },
    5: {
      type: "Semesterprosjekt 1",
      date: "Des 2020",
      description: [
        "Community Science Museum er et fiktivt, lokalt vitensenter for barn. Nettstedet er utviklet med HTML og CSS.",
        "Prosjektet var en fire ukers oppgave i det første året av frontendstudiet ved Noroff og ble levert i desember 2020.",
      ],
      image_alt:
        "Skjermbilde av forsiden til Community Science Museum på datamaskin",
    },
  },
  real: {
    1: {
      type: "Nettside med booking",
      date: "3. kvartal 2026",
      description: [
        "Dette er en ny nettside for det lokale grendalaget mitt. Den er bygget med Next.js og Tailwind, med Sanity som publiseringsløsning.",
        "Løsningen har et brukervennlig grensesnitt for bestilling og administrasjon av brukerkontoer.",
      ],
      image_alt:
        "Skjermbilde av forsiden til Eidesjøen Grendalag på datamaskin",
    },
    2: {
      type: "Belønningsapp for barn",
      date: "3. kvartal 2026",
      description: [
        "Stjernedryss er en app der foreldre kan belønne barn for god oppførsel. Den er bygget med Next.js og Tailwind, med Supabase som backend.",
        "Barna får sin egen side der de kan se opptjente stjerner og fremgangen mot neste belønning.",
      ],
      image_alt: "Skjermbilde av landingssiden til Stjernedryss",
    },
    3: {
      type: "Bedriftsnettside",
      date: "3. kvartal 2026",
      description: [
        "Jeg bygger en ny nettside for en servicetekniker innen varmepumper og klimaanlegg. Den er bygget med Next.js og Tailwind, med Supabase som backend.",
        "Løsningen har et brukervennlig grensesnitt for bestilling og administrasjon av brukerkontoer.",
      ],
      image_alt: "Skjermbilde av forsiden til Storesund Service",
    },
    4: {
      type: "Bedriftsnettside",
      date: "3. kvartal 2026",
      description: [
        "Jeg bygger en ny nettside for et lokalt utleiefirma innen varmepumper og klimaanlegg.",
        "Nettstedet er bygget med Next.js og Tailwind, med Supabase som backend.",
      ],
      image_alt: "Skjermbilde av forsiden til Storesund Utleie",
    },
    5: {
      type: "Nettside med booking",
      date: "3.–4. kvartal 2025",
      description: [
        "Herifra.no er en bookingplattform bygget med React og Vite, stylet med Sass og støttet av Supabase.",
        "Den omfatter bestillingsflyt, kontoadministrasjon, Stripe-betalinger og e-post via SendGrid.",
      ],
      image_alt: "Skjermbilde av forsiden til Herifra.no på datamaskin",
    },
  },
};

function localizeProjects(projects, locale, group) {
  if (locale !== "nb") {
    return projects;
  }

  return projects.map((project) => ({
    ...project,
    ...norwegianProjectText[group][project.id],
  }));
}

export function getSchoolProjectData(locale) {
  return localizeProjects(schoolProjectData, locale, "school");
}

export function getRealProjectData(locale) {
  return localizeProjects(realProjectData, locale, "real");
}
