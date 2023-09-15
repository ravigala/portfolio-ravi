import {
  javascript,
  java,
  html,
  css,
  tailwind,
  bootstrap,
  reactjs,
  nodejs,
  mongodb,
  sql,
  appscript,
  php,
  git,
  carrent,
  jobit,
  tripguide
} from "../Assets";

const technologies = [
  {
    name: "Java",
    icon: java,
    link: "https://docs.oracle.com/en/java/"
  },
  {
    name: "JavaScript",
    icon: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "React JS",
    icon: reactjs,
    link: "https://react.dev/"
    
  },
  {
    name: "Node JS",
    icon: nodejs,
    link: "https://nodejs.org/en/docs/"
  },
  {
    name: "Google Apps Script",
    icon: appscript,
    link: "https://developers.google.com/apps-script/guides/"
  },
  {
    name: "HTML 5",
    icon: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS 3",
    icon: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    link: "https://docs.mongodb.com/"
  },
  {
    name: "MySQL",
    icon: sql,
    link: "https://dev.mysql.com/doc/"
  },
  {
    name: "PHP",
    icon: php,
    link: "https://www.php.net/docs.php"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    link: "https://tailwindcss.com/docs"
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    link: "https://getbootstrap.com/docs/5.1/getting-started/introduction/"
  },
  {
    name: "Git",
    icon: git,
    link: "https://git-scm.com/doc"
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    image: jobit,
    source_code_link: "https://github.com/",
    demo_link: "abc.com",
    details_link: "abc.com"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { technologies, projects };
