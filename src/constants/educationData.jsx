import { SiScrimba } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { MdArchitecture } from "react-icons/md";
import { TbMathIntegralX } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";

export const educationData = [
  {
    id: 1,
    title: "The Frontend Career Path",
    institution: "Scrimba",
    date: "Feb '23 - Jan '24",
    description: [
      "The Frontend Developer Path course contains over 70 hours of top-notch tutorials, hundreds of coding challenges, and dozens of real-world projects.",
      "The program contains 12 modules. All modules are filled with interactive coding challenges to ensure that you don't fall off the wagon. You'll learn HTML, CSS, JavaScript, React, UI design, career strategy, and more.",
    ],
    url: "https://scrimba.com/",
    icon: <SiScrimba />,
  },
  {
    id: 2,
    title: "Frontend Development",
    institution: "Noroff",
    date: "Aug '21 - Jun '22",
    description: [
      "The Frontend Development course at Noroff is a 2 year full time study. The course covers HTML, CSS, Javascript, React, Wordpress, Strapi and more.",
      "The course is delivered online, and is a combination of lectures, assignments and projects. The course is delivered in English, and is a mix of Norwegian and international students.",
    ],
    url: "https://www.noroff.no/en/studies/vocational-school/front-end-development",
    icon: <FaCode />,
  },
  {
    id: 3,
    title: "Bachelor's programme in Civil Engineering",
    institution: "Bergen University College",
    date: "Aug '05 - Jun '08",
    description: [
      "Specializing in structural in the second and third year, with a focus on steel, wood and concrete structures.",
    ],
    url: null,
    icon: <FaUniversity />,
  },
  {
    id: 4,
    title: "Preperatory course for engineering",
    institution: "Ålesund University College",
    date: "Aug '03 - Jun '04",
    description: [
      "One year programme in order to obtain higher education entrance qualification.",
      "The subjects included math, physics, chemistry, english and norwegian.",
    ],
    url: null,
    icon: <TbMathIntegralX />,
  },
  {
    id: 5,
    title: "Sixt-Form College",
    institution: "Hærøy VGS",
    date: "Aug '94 - Jun '97",
    description: [
      "GK Technical Construction Subjects.",
      "VK1 & VK2 Technical Drawing.",
    ],
    url: null,
    icon: <MdArchitecture />,
  },
];
