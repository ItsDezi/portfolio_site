import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    cpp,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sql,
    firebase,
    python,
    vhdl,
    meta,
    genetec,
    opw,
    octobins,
    stem_solvers,
    employMe,
    eternity2puzzle,
    ai_cnn,
    hiveFlyers,
    concordia,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Backend Development",
      icon: creator,
    },
    {
      title: "Hardware design",
      icon: mobile,
    },
    {
      title: "Database management",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C Plus Plus",
      icon: cpp,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "VHDL",
      icon: vhdl,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Firebase",
      icon: firebase,
    }
  ];
  
  const experiences = [
    {
      title: "Bachelors of Computer Engineering (ECP)",
      company_name: "Concordia",
      icon: concordia,
      iconBg: "#922338",
      date: "2019 - 2024",
      points: [
        "Learned core computer science concepts across the tech stack from low level hardware design to higher level programming.",
        "Collaborated with teams to engage in academic and personal projects.",
        "Learned key concepts such as hardware design, databases, networks and protocols, real time operating systems, artificial intelligence, and data structures/algorithms.",
      ],
    },
    {
      title: "Electronic Production tester",
      company_name: "Genetec",
      icon: genetec,
      iconBg: "#183861",
      date: "2022",
      points: [
        "Refactored cloud based service used by the manufacturing department.",
        "Gained experience with typescript and the Angular framework.",
        "Gained insights to database management and configuration.",
        "Engaged in meaningful SCRUM practices throughout the internship.",
      ],
    },
    {
      title: "Wordpress developer",
      company_name: "On Point Wellness",
      icon: opw,
      iconBg: "#ffc06c",
      date: "April 2024 - May 2024",
      points: [
        "Used wordpress and a variety of plugins to create a website for a local wellness center.",
        "Gained valuable insights into Client acquistion.",
        "Prioritized thorough and continuous communication with the client.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Octobins",
      icon: octobins,
      iconBg: "#FFFFFF",
      date: "June 2024 - July 2024",
      points: [
        "Facilitated easier transactions by managing API calls between React app and wix marketplace.",
        "Gained valuable insights into Client acquistion.",
        "Prioritized thorough and continuous communication with the client.",
        "Bug fixes.",
      ],
    },
    {
      title: "Backend web developer",
      company_name: "STEM Solvers",
      icon: stem_solvers,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining a web application using React.js and other related technologies.",
        "Development plannification to ensure project scope is achieved.",
        "Adaptaptability with React.js and other services to ensure client satisfaction.",
        "Configuring and managing a robust database.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Facial expression recognition AI",
      description:
        "A convolutional neural network that was trained to detect the emotion that an individual was expressing. Every aspect of the pipeline was performed, including data acquisition, data cleaning, hyperparameter settings, training, validation, and bias detection.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "pyTorch",
          color: "green-text-gradient",
        },
        {
          name: "numPy",
          color: "pink-text-gradient",
        },
      ],
      image: ai_cnn,
      source_code_link: "https://github.com/COMP472/projectPart2/tree/main",
    },
    {
      name: "EmployMe",
      description:
        "Web application that enables users to search for job openings, update their personal information, contact recruiters. It also allows recruiters to manage job postings, and scout job candidates. There are also admin functionalities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: employMe,
      source_code_link: "https://github.com/COENS-SOENS/-COENS-SOENS-soen341project2023-",
    },
    {
      name: "Eternity 2 puzzle algorithm",
      description:
        "An early project of mine that consisted of a program written to solve the 16x16 puzzle that remains unsolved in the world as well as smaller versions of it. It features the A* search pathfinding algorithm.",
      tags: [
        {
          name: "Algorithm development",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Data structures",
          color: "pink-text-gradient",
        },
      ],
      image: eternity2puzzle,
      source_code_link: "https://github.com/ItsDezi/Eternity2Puzzle/tree/main",
    },
    {
      name: "HiveFlyers",
      description:
        "My multidisciplinary capstone project with the scope of drones working cooperatively to connect and disconnect from eachother mid-flight. I'm proud to say that we achieved third place at the ICAO advanced air mobility day conference capstone competition.",
      tags: [
        {
          name: "Robot Operating Systems(ROS)",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "C++",
          color: "pink-text-gradient",
        },
      ],
      image: hiveFlyers,
      source_code_link: "https://github.com/HiveFlyers",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };