export const projectData = [
  {
    id: 1,
    title: "Holidaze",
    type: "Project exam 2",
    date: "May 2022",
    description: [
      "Holidaze is an accommodation booking site for a local tourist agency located in Bergen, Norway. The site is coded with React based on React-Bootstrap components and styled using Sass. The site has a customer facing side with booking functionality, and a admin section that can be accessed with the use of JWT tokens. In the admin section, contact and booking enquiries can be handled as well the option to add new establishments.",
      "The WP WooCommerce API is used for the establishments, customer reviews and authentication, while an API from Strapi hosted on Heroku is used to store and fetch data from booking- and contact enquiries. In addition a Google Maps API is used to fetch live map data from establishment addresses.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1654681030/holidaze_x4owk1.jpg",
    url: "https://holidaze-v2.netlify.app",
    tools: ["react", "sass", "bootstrap", "wordpress", "strapi", "heroku"],
  },
  {
    id: 2,
    title: "Mercury shoes",
    type: "Semester Project 2",
    date: "Dec 2021",
    description: [
      "Mercury shoes is an e-commerce site selling running shoes. The site is coded using HTML and vanilla Javascript, and is styled using Sass. The site has a costumer facing side with basket functionality using local storage to store data, and also an admin facing side, where products can be added, edited and deleted. An API from Strapi hosted on Heroku is used to store and fetch product data.",
      "This project was an assignment from Noroff's Frontend course second year and was delivered in December 2021. The time frame was 5 weeks, and the project requirements are listed in the next section. The site was given a facelift as well as given some added functionality like the favorites feature, when working with our portfolio assignment from Noroff in 2022.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1654681036/mercury_lyf9vl.jpg",
    url: "https://mercury-shoes.netlify.app",
    tools: ["HTML", "javascript", "sass", "strapi", "heroku"],
  },
  {
    id: 3,
    title: "Passionate photography",
    type: "Project Exam 1",
    date: "May 2021",
    description: [
      "Passionate Photography is personal blog site for the fictional photographer Christopher Duvall. The site is coded using HTML and vanilla Javascript, and is styled using regular CSS. The site consists of a homepage, a page for blog posts, pages for specific posts, an about page and a contact page.",
      "The content for the website is stored on a WordPress installation used as a headless CMS, taking advantage of the WordPress REST API to fetch the data.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1666601693/Passionate_Photography_bhxp8s.jpg",
    url: "https://passionate-photography-7oiden.netlify.app",
    tools: ["HTML", "javascript", "CSS", "wordpress"],
  },
  {
    id: 4,
    title: "Community science museum",
    type: "Semester project 1",
    date: "Dec 2020",
    description: [
      "The Community Science Museum is a local science museum for children. The website for this fictional museum is developed with HTML and CSS.",
      "This project was an assignment from Noroff's Frontend course first year and was delivered in December 2020. The time frame was 4 weeks, and the project requirements are listed in the next section.",
    ],
    image:
      "https://res.cloudinary.com/dhd2paq70/image/upload/v1668508833/csm-bergen_gi4z7d.jpg",
    url: "https://csm-bergen.netlify.app",
    tools: ["HTML", "javascript", "CSS"],
  },
];
