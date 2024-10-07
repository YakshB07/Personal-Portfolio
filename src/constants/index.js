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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    hackclub,
    first,
    gamejam,
    stem,
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
      title: "Web Frontend Developer",
      icon: web,
    },
    {
      title: "Travel Soccer Player",
      icon: mobile,
    },
    {
      title: "MasseyHacks Winner",
      icon: backend,
    },
    {
      title: "Hack Club Co-President",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Chapter Co-Preisdent",
      company_name: "Hack Club @VMSS",
      icon: hackclub,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        "Developing 5+ lesson plans on HTML, CSS, Javascript, and React to prepare students for hackathon competitions.",
        "Provided mentorship to 20+ club members, assisting with coding challenges, project development, and career adivce.",
        "Led Hack Club as President, overseeing 10+ club activites, meetings, and events, guiding a team of 15 members to acheive club goals.",
      ],
    },
    {
      title: "First Robotics Programming Lead",
      company_name: "Team 4903 @VMSS",
      icon: first,
      iconBg: "#E6DEDD",
      date: "Sep 2024 - Present",
      points: [
        "Contributed to the Programming of the Robot's Vision Subsystem.",
        "Contributed to the development of an AI model for game peice detection, enhancing the team's visual perception by a significant 45%.",
        "Fully developed Command Based Tank drive robot code for testing purposes.",
        "Developing Autonomus Routine for next FRC season.",
      ],
    },
    {
      title: "Co-chair",
      company_name: "Massey Game Jam",
      icon: gamejam,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Co-President of Massey's Game Jam, overseeing the organization of the event and coordinating with team members.",
        "Developing the offical Game Jam website using modern web technologies, ensuring an intuitive and user-friendly experience for participants.",
        "Promoting the event and encouraging participation in the game jam.",
      ],
    },
    {
      title: "Counsellor in Training",
      company_name: "Stem Camp",
      icon: stem,
      iconBg: "#E6DEDD",
      date: "June 2024 - Aug 2024",
      points:[
        "Assisted in organizing and leading STEM-based activities for children aged 6-12, fostering their interest in science, technology, engineering, and mathematics.",
        "Provided mentorship and guidance to campers during hands-on projects, ensuring a safe and engaging learning environment.",
       "Developed communication and leadership skills by collaborating with camp staff and supporting campers' individual learning needs.",
        ],
      },
  ];
  

  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };