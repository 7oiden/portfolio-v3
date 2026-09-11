import { archiveProjects, selectedProjects } from "./projectMeta";

export const en = {
  localeName: "English",
  nav: {
    home: "Home",
    projects: "Projects",
    background: "Background",
    about: "About",
    menu: "Menu",
    close: "Close",
    languageLabel: "Choose language",
  },
  common: {
    moreInfo: "More info",
    toTop: "To top",
    githubLabel: "Visit my GitHub page",
    linkedinLabel: "Visit my LinkedIn profile",
    notFoundTitle: "Page not found",
    notFoundBody: "This address doesn't exist.",
    backHome: "Back home",
  },
  backgroundText: {
    home: "Home.",
    projects: "Projects.",
    background: "Background.",
    about: "About.",
  },
  home: {
    hero: {
      subtitle:
        "Frontend developer building websites and apps for local businesses.",
      getInTouch: "Get in touch",
      viewWork: "View work",
      latestWork: "Latest work",
      scrollDown: "Scroll down",
      imageSuffix: "website",
    },
    intro: {
      portraitAlt: "Portrait of Tommy Johnsen",
      basedIn: "Based in Bergen",
      kicker: "About me",
      heading: "From structural engineering to frontend.",
      firstParagraph:
        "I'm Tommy. I spent over a decade as a structural engineer, running large construction projects. In 2020 I switched to frontend — the same kind of problem-solving, plus the visual craft I never quite got to use in engineering.",
      secondBeforeReact:
        "I now build websites and apps for local businesses. Right now that's a new site for an entrepreneur, in ",
      secondBetween: ", while I take an ",
      secondAfter: " course at Scrimba.",
      facts: [
        { label: "Background", value: "Structural engineering" },
        { label: "Working with", value: "Local businesses" },
        { label: "Building with", value: "React & AI" },
      ],
      learnMore: "Learn more",
    },
    skills: {
      kicker: "Skills",
      heading: "What I work with.",
      groups: [
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
      ],
    },
  },
  projects: {
    pageTitle: "Projects",
    selectedKicker: "Selected work",
    selectedHeading: "Sites and apps for local businesses.",
    archiveKicker: "Archive",
    archiveHeading: "Noroff school projects.",
    liveSite: "Live site",
    selected: [
      {
        id: "eidesjoen",
        ...selectedProjects.eidesjoen,
        type: "Booking Platform Website",
        date: "Q3 2026",
        description: [
          "This is a new site for my local Grendalag. The site is built with Next.js and styled using Tailwind, while Sanity is used for the content management system.",
          "It features a user-friendly interface for booking appointments and managing user accounts.",
        ],
        imageAlt:
          "Screenshot of the Eidesjøen Grendalag site home page on desktop",
      },
      {
        id: "stjernedryss",
        ...selectedProjects.stjernedryss,
        type: "Kids Reward App",
        date: "Q3 2026",
        description: [
          "Stjernedryss is an app where parents can reward their kids for good behavior. The app is built with Next.js and styled using Tailwind, while Supabase is used for the backend.",
          "Kids get their own page to see stars earned and the progress towards the next reward.",
        ],
        imageAlt: "Screenshot of the Stjernedryss landing page on desktop",
      },
      {
        id: "storesund-service",
        ...selectedProjects["storesund-service"],
        type: "Business Website",
        date: "Q3 2026",
        description: [
          "I am currently building a new business website for a heat-pump and air-conditioning service technician. The site is built with Next.js and styled using Tailwind, while Supabase is used for the backend.",
          "It features a user-friendly interface for booking appointments and managing user accounts.",
        ],
        imageAlt: "Screenshot of the Storesund Service site home page on desktop",
      },
      {
        id: "storesund-utleie",
        ...selectedProjects["storesund-utleie"],
        type: "Business Website",
        date: "Q3 2026",
        description: [
          "I am currently building a new business website for a local heat-pump and air-conditioning rental company.",
          "The site is built with Next.js and styled using Tailwind, while Supabase is used for the backend.",
        ],
        imageAlt: "Screenshot of the Storesund Utleie site home page on desktop",
      },
      {
        id: "herifra",
        ...selectedProjects.herifra,
        type: "Booking Platform Website",
        date: "Q3 - Q4 2025",
        description: [
          "Herifra.no is a booking platform built with React and Vite, styled with Sass, and backed by Supabase.",
          "It includes booking flows, account management, Stripe payments, and email via SendGrid.",
        ],
        imageAlt: "Screenshot of the Herifra.no site home page on desktop",
      },
    ],
    archive: [
      {
        id: "holidaze",
        ...archiveProjects.holidaze,
        type: "Project Exam 2",
        date: "May 2022",
        description: [
          "Holidaze is an accommodation booking site for a local tourist agency located in Bergen, Norway. The site is coded with React based on React-Bootstrap components and styled using Sass. The site has a customer facing side with booking functionality, and a admin section that can be accessed with the use of JWT tokens. In the admin section, contact and booking enquiries can be handled as well the option to add new establishments.",
          "The WP WooCommerce API is used for the establishments, customer reviews and authentication, while an API from Strapi hosted on Heroku is used to store and fetch data from booking- and contact enquiries. In addition a Google Maps API is used to fetch live map data from establishment addresses.",
        ],
        imageAlt: "Screenshot of the Holidaze site home page on desktop",
      },
      {
        id: "portfolio-v2",
        ...archiveProjects["portfolio-v2"],
        type: "Module Course Project",
        date: "Jan 2022",
        description: [
          "This was my first real attempt to make a personal portfolio site, and was a mandatory project that marked the end of the Portfolio module at Noroff.",
          "The site is coded using HTML and vanilla Javascript, and is styled using Sass, with a time frame of one week . The site is responsive and has a mobile first approach.",
        ],
        imageAlt: "The Portfolio version 2 site home page on desktop",
      },
      {
        id: "mercury",
        ...archiveProjects.mercury,
        type: "Semester Project 2",
        date: "Dec 2021",
        description: [
          "Mercury shoes is an e-commerce site selling running shoes. The site is coded using HTML and vanilla Javascript, and is styled using Sass. The site has a costumer facing side with basket functionality using local storage to store data, and also an admin facing side, where products can be added, edited and deleted. An API from Strapi hosted on Heroku is used to store and fetch product data.",
          "This project was an assignment from Noroff's Frontend course second year and was delivered in December 2021. The site was given a facelift as well as given some added functionality like the favorites feature, when working with our portfolio assignment from Noroff in 2022.",
        ],
        imageAlt: "Screenshot of the Mercury Shoes site home page on desktop",
      },
      {
        id: "photography",
        ...archiveProjects.photography,
        type: "Project Exam 1",
        date: "May 2021",
        description: [
          "Passionate Photography is personal blog site for the fictional photographer Christopher Duvall. The site is coded using HTML and vanilla Javascript, and is styled using regular CSS. The site consists of a homepage, a page for blog posts, pages for specific posts, an about page and a contact page.",
          "The content for the website is stored on a WordPress installation used as a headless CMS, taking advantage of the WordPress REST API to fetch the data.",
        ],
        imageAlt:
          "Screenshot of The Passionate Photography home page on desktop",
      },
      {
        id: "csm",
        ...archiveProjects.csm,
        type: "Semester project 1",
        date: "Dec 2020",
        description: [
          "The Community Science Museum is a local science museum for children. The website for this fictional museum is developed with HTML and CSS.",
          "This project was an assignment from Noroff's Frontend course first year and was delivered in December 2020. The time frame was 4 weeks, and the project requirements are listed in the next section.",
        ],
        imageAlt:
          "Screenshot of the Community Science Museum homepage on desktop",
      },
    ],
  },
  career: {
    pageTitle: "Background",
    kicker: "Career",
    heading: "Work and study.",
    lead: "Currently freelance, open to a full-time frontend role.",
    experienceLabel: "Experience",
    educationLabel: "Education",
    download: "Download résumé",
    downloadLabel: "Download my résumé",
    experience: [
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
    ],
    education: [
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
    ],
  },
  about: {
    pageTitle: "About",
    biography: {
      kicker: "Biography",
      heading: "How I got here.",
      originBefore: "I'm originally from Sunnmøre. I moved to ",
      originAfter:
        " in 2004 to study, and I've been in the area — more or less — ever since.",
      careerBefore:
        "Before this I spent over a decade as a structural engineer, mostly on large construction projects. In 2020 I enrolled in ",
      careerAfter:
        "'s frontend program as a full-time online student. I wanted the analytical side of engineering, plus the visual work I never quite got to do there.",
      finalParagraph:
        "That mix is still what holds my attention: logic on one side, making something you can see on the other.",
      place: "Based in the Bergen area",
    },
    info: {
      kicker: "Personal profile",
      heading: "Know me better.",
      interests: "Interests",
      interestsIntro:
        "I keep a wide range of interests — it keeps the mind sharp and the work less one-note.",
      howIWork: "How I work",
      hobbies: [
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
      ],
      attributes: [
        "Attention to detail",
        "Problem solver",
        "Enjoys learning",
        "Organized",
        "Good communicator",
        "Aesthetic sense",
        "Takes responsibility",
        "Quality oriented",
        "Analytical skills",
      ],
    },
    contact: {
      kicker: "Contact",
      heading: "Send a message.",
      intro: "Use the form, or email me directly.",
    },
  },
  form: {
    fields: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    validation: {
      nameRequired: "* Please enter your name",
      nameMin: "* Your name must be at least 3 characters",
      nameMax: "* Name can't be more than 20 characters",
      emailRequired: "* Please enter your email address",
      emailInvalid: "* Please enter a valid email address",
      subjectRequired: "* Please enter a subject",
      subjectMin: "* Subject must be at least 4 characters",
      subjectMax: "* Subject can't be more than 20 characters",
      messageRequired: "* Please enter your message",
      messageMin: "* Your message must be at least 10 characters",
      messageMax: "* Message can't be more than 400 characters",
    },
    successHeading: "Thank you for your message!",
    successBody: "I will get back to you shortly.",
    errorHeading: "Something went wrong!",
    errorBody: "The message could not be sent. Please try again later.",
    submitting: "Submitting...",
    send: "Send",
    clearField: "Clear field",
  },
};
