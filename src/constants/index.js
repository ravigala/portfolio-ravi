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
  varcode,
  pfoptimizer,
  noteVault,
  newsflow,
  helpinghands,
  tradeshow,
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
    name: "Varcode",
    description: "VarCode is an online code compiler and editor built using ReactJs, NodeJs, MongoDB and Judge0 Api. It supports over 20 programming languages, enabling users to run, save, and download their code with ease, from anywhere and at any time.",
    image: varcode,
    source_code_link: "",
    demo_link: "",
    details_link: "",
  },
  {
    name: "NoteVault",
    description: "NoteVault is a secure note management web app powered by React.js, Express.js, and MongoDB. Users can create, edit, and delete notes via a secure API with robust authentication and authorization.",
    image: noteVault,
    source_code_link: "",
    demo_link: "",
    details_link: "",
  },
  {
    name: "NewsFlow",
    description: "NewsFlow is a dynamic web application that offers real-time global news with user-friendly features like category-based filtering and infinite scrolling. Developed using ReactJS, Bootstrap, and NewsAPI",
    image: newsflow,
    source_code_link: "",
    demo_link: "",
    details_link: "",
  },
  {
    name: "Helping Hands",
    description: "A web application created using JavaScript, PHP, MySQL and Bootstrap. It allows users to register, donate essential items to the less fortunate through various organizations, and conveniently track their donation history.",
    image: helpinghands,
    source_code_link: "",
    demo_link: "",
    details_link: "",
  },
  {
    name: "Tradeshow Tracker",
    description: "An event management tool powered by ReactJs, Tailwind Css, and Google Apps Script. It effortlessly filters and showcases upcoming events from Google Sheets, enabling real-time attendee tracking, editing, and addition.",
    image: tradeshow,
    source_code_link: "",
    demo_link: "",
    details_link: "",
  },
  {
    name: "Portfolio Optimizer",
    description: "It is a Flask-based web tool that harnesses 20+ years of historical data from Yahoo Finance to generate 3 portfolios provide expected returns. Users just have to input their preferred stocks, investment amount, and time horizon.",
    image: pfoptimizer,
    source_code_link: "",
    demo_link: "",
    details_link: "",
  },
];


export { technologies, projects };
