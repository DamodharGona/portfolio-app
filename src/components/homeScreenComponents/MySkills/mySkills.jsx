import React from "react";
import SkillBox from "./skillbox";

import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiFastify } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import tailwindImage from "@/assets/images/tailwind.png";
import supaBaseImage from "@/assets/images/supabase.webp";
import firebaseImage from "@/assets/images/firebase.jpg";
import webDevImage from "@/assets/images/websitedevelopment.webp";
import backendImage from "@/assets/images/backend.webp";
import mobileDevImage from "@/assets/images/mobileDevelopment.png";
import flutterImage from "@/assets/images/flutter.png";
import reactImage from "@/assets/images/react.jpeg";

function MySkillsComponent({ gridColumns }) {
  let skillInfo = [
    {
      title: "Frontend Development",
      technologies: [
        {
          name: "React.js",
          Icon: <FaReact />,
          iconColor: "text-cyan-400",
          image: reactImage,
        },
        {
          name: "TypeScript",
          Icon: <SiTypescript />,
          iconColor: "text-blue-500",
          image: reactImage,
        },
        {
          name: "Tailwind CSS",
          Icon: <RiTailwindCssFill />,
          iconColor: "text-sky-400",
          image: tailwindImage,
        },
        {
          name: "HTML",
          Icon: <FaHtml5 />,
          iconColor: "text-orange-500",
          image: reactImage,
        },
        {
          name: "CSS",
          Icon: <FaCss3Alt />,
          iconColor: "text-blue-400",
          image: reactImage,
        },
      ],
      about:
        "Frontend Development focuses on creating user interfaces and user experiences for web applications. It involves building responsive, interactive, and visually appealing websites using modern frameworks and technologies.",
      description:
        "Developed full-stack web applications using React.js, TypeScript, and Tailwind CSS. Built responsive UIs with HTML/CSS, implemented Google OAuth, protected routes, and real-time features with Supabase integration.",

      image: webDevImage,
    },
    {
      title: "Backend Development",
      technologies: [
        {
          name: "Node.js",
          Icon: <FaNodeJs />,
          iconColor: "text-green-500",
          image: reactImage,
        },
        {
          name: "Express.js",
          Icon: <SiExpress />,
          iconColor: "text-gray-400",
          image: reactImage,
        },
        {
          name: "Fastify.js",
          Icon: <SiFastify />,
          iconColor: "text-black",
          image: reactImage,
        },
        {
          name: "PostgreSQL",
          Icon: <SiPostgresql />,
          iconColor: "text-blue-600",
          image: reactImage,
        },
        {
          name: "MySQL",
          Icon: <SiMysql />,
          iconColor: "text-orange-600",
          image: reactImage,
        },
      ],
      about:
        "Backend Development involves building server-side applications, APIs, and database systems that power web and mobile applications. It focuses on data management, security, and creating robust server infrastructure.",
      description:
        "Developed RESTful API endpoints using Node.js, Express.js, and Fastify.js. Created database migrations with Knex.js for PostgreSQL and MySQL. Built secure authentication systems with JWT and integrated cross-platform services.",

      image: backendImage,
    },
    {
      title: "Mobile Development",
      technologies: [
        {
          name: "Flutter",
          Icon: <FaFlutter />,
          iconColor: "text-blue-800",
          image: flutterImage,
        },
        {
          name: "Dart",
          Icon: <FaFlutter />,
          iconColor: "text-blue-600",
          image: flutterImage,
        },
        {
          name: "Firebase",
          Icon: <IoLogoFirebase />,
          iconColor: "text-amber-400",
          image: firebaseImage,
        },
        {
          name: "BLoC Pattern",
          Icon: <FaFlutter />,
          iconColor: "text-purple-500",
          image: flutterImage,
        },
      ],
      about:
        "Mobile Development focuses on creating cross-platform mobile applications that work seamlessly on both Android and iOS. It involves building responsive, performant apps using modern frameworks and state management patterns.",
      description:
        "Built multiple mobile apps using Flutter and Dart including a task scheduler, personal vault, and expense tracker. Implemented clean architecture using BLoC and Provider patterns for robust state management. Integrated Firebase for authentication, storage, and real-time data handling.",

      image: mobileDevImage,
    },
    {
      title: "Tools & Technologies",
      technologies: [
        {
          name: "GitHub",
          Icon: <FaGithub />,
          iconColor: "text-gray-800",
          image: reactImage,
        },
        {
          name: "Postman",
          Icon: <SiPostman />,
          iconColor: "text-orange-500",
          image: reactImage,
        },
        {
          name: "Swagger",
          Icon: <SiSwagger />,
          iconColor: "text-green-600",
          image: reactImage,
        },
      ],
      about:
        "Tools and Technologies that enhance development workflow, testing, and collaboration. These tools help in API testing, version control, documentation, and maintaining code quality throughout the development process.",
      description:
        "Used Postman for comprehensive API testing and debugging. Leveraged GitHub for version control and collaborative development. Implemented Swagger for API documentation and testing. Utilized Docker for containerization and deployment.",

      image: webDevImage,
    },
  ];
  return (
    <div
      className={`flex flex-col gap-y-5 md:grid md:grid-flow-row ${gridColumns} md:gap-5`}
    >
      {skillInfo.map((skill, index) => {
        return (
          <SkillBox
            key={index}
            image={skill.image}
            technologies={skill.technologies}
            about={skill.about}
            title={skill.title}
            description={skill.description}
          />
        );
      })}
    </div>
  );
}

export default MySkillsComponent;
