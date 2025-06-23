import React from "react";
import SkillBox from "./skillbox";

import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import tailwindImage from "@/assets/images/tailwind.png";
import supaBaseImage from "@/assets/images/supabase.webp";
import firebaseImage from "@/assets/images/firebase.jpg";
import webDevImage from "@/assets/images/websiteDevelopment.webp";
import mobileDevImage from "@/assets/images/mobileDevelopment.png";
import flutterImage from "@/assets/images/flutter.png";
import reactImage from "@/assets/images/react.jpeg";

function MySkillsComponent({ gridColumns }) {
  let skillInfo = [
    {
      title: "Web Development",
      technologies: [
        {
          name: "React.js",
          Icon: <FaReact />,
          iconColor: "text-cyan-400",
          image: reactImage,
        },
        {
          name: "Tailwind CSS",
          Icon: <RiTailwindCssFill />,
          iconColor: "text-sky-400",
          image: tailwindImage,
        },
        {
          name: "Supabase",
          Icon: <RiSupabaseFill />,
          iconColor: "text-emerald-400",
          image: supaBaseImage,
        },
      ],
      about:
        "Web Development is the process of building websites and web apps that look good and work smoothly. It includes designing user interfaces, writing code, and using various tools and technologies to make sure everything runs well and is easy to use.",
      description:
        "Developed a real-time chat application using React and Tailwind CSS. Implemented Google OAuth, protected routes, and responsive UI. Combined React with Supabase for backend integration and real-time messaging.",

      image: webDevImage,
    },
    {
      title: "Cross-Platform Mobile Development",
      technologies: [
        {
          name: "flutter",
          Icon: <FaFlutter />,
          iconColor: "text-blue-800",
          image: flutterImage,
        },
        {
          name: "firebase",
          Icon: <IoLogoFirebase />,
          iconColor: "text-amber-400",
          image: firebaseImage,
        },
      ],
      about:
        "Cross-Platform Mobile Development is about building mobile apps that work on both Android and iOS using a single codebase. It helps save time and effort while still delivering smooth, responsive, and visually consistent apps across different devices.",
      description:
        "Built multiple mobile apps using Flutter including a task scheduler, personal vault, and expense tracker. Implemented clean architecture using BLoC and Provider for robust state management.Integrated Firebase for authentication, storage, and real-time data handling.",

      image: mobileDevImage,
    },
  ];
  return (
    <div className="p-3">
      <div className={`grid grid-flow-row ${gridColumns} gap-5`}>
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
    </div>
  );
}

export default MySkillsComponent;
