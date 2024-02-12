export const projectData = [
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
    tools: ["react", "sass", "bootstrap", "wordpress", "strapi", "heroku"],
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
    tools: ["HTML", "javascript", "sass"],
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
    tools: ["HTML", "javascript", "sass", "strapi", "heroku"],
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
    tools: ["HTML", "javascript", "CSS", "wordpress"],
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
    tools: ["HTML", "javascript", "CSS"],
  },
];
