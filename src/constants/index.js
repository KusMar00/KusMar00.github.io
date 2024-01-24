import { portfolio, itu, satlasNews } from "../assets";

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },

  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "about",
    title: "About",
  },
];

export const skills = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Python", "C#", "F#", "Java", "Go"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["JS/TS", "ReactJS", "Tailwind", "MUI"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["NodeJS", "ASP.NET", "PostgreSQL", "REST API", "Protobuf"],
  },

  {
    id: "softSkills",
    title: "Soft Skills",
    skills: ["Collaboration", "Communication", "Effective Learner", "Reliable"],
  },
];

export const experience = [
  {
    id: "itu",
    title: "BSc, Software Development",
    description:
      "A three year full-time education from the IT-University of Copenhagen. Here i have explored the many facets of Software Development and acquired a strong foundational understanding of the craft. Through many projects I have explored a plethora of different technologies. Most of the time I have worked in C# and ReactJS with Typescript.",
    tags: [
      "OOP",
      "Discrete Math",
      "Projects/Communication",
      "Algorithms/Datastructures",
      "UI/UX",
      "Databases",
      "Software Development",
      "Distributed Systems",
      "Functional Programming",
      "Operating Systems",
      "Security",
      "IoT",
      "DevOps",
    ],
    img: itu,
    siteUrl:
      "https://itustudent.itu.dk/Your-Programme/BSc-Programmes/BSc-in-Software-Development",
  },
  {
    id: "satlas-news",
    title: "Satlas News",
    description:
      "A project built in collaboration with DHI during a course at ITU on industrial software engineering. A big part of this project was to learn about and implement the Scrum framework for development. This involved having a dedicated scrum master, a product owner and other developers on the team, as well as having a number of weekly ceremonies (sprint planning, review, retrospective, daily standups). The product itself is an internal news platform, for showcasing weather related news on a map of Denmark.",
    tags: [
      "Scrum",
      "NextJS",
      "Typescript",
      "TypeORM",
      "PostgreSQL",
      "MUI",
      "Azure Functions",
    ],
    img: satlasNews,
    githubUrl: "https://github.com/Mhttt/Satlas-News",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "My personal developer portfolio that you are likely visiting right now. A lot of thought and care have gone into designing and building this website. Hope you like it! 😁",
    tags: [
      "ReactJS",
      "Tailwind",
      "Mobile First",
      "Responsive Design",
      "Spotify API",
    ],
    img: portfolio,
    githubUrl: "https://github.com/KusMar00/KusMar00.github.io",
  },
];
