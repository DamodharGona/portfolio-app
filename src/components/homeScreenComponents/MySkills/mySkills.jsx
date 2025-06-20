import React from "react";
import SkillBox from "./skillbox";
import { TEXT_PRIMARY } from "@/constants/colors";
import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import reactImage from "@/assets/images/react.jpeg";
import flutterImage from "@/assets/images/flutter.png";
import tailwindImage from "@/assets/images/tailwind.png";
import supabaseImage from "@/assets/images/supabase.webp";
import firebaeImage from "@/assets/images/firebase.jpg";

function MySkillsComponent() {
  let skillInfo = [
    {
      title: "React.js",
      subtitle: "Modern Web Interfaces & Frontend Architecture",
      description:
        "Developed a real-time chat application using React and Tailwind CSS. Implemented Google OAuth, protected routes, and responsive UI. Combined React with Supabase for backend integration and real-time messaging.",
      Icon: <FaReact />,
      color: "text-cyan-400",
      image: reactImage,
    },
    {
      title: "Flutter",
      subtitle: "Cross-Platform Mobile Development",
      description:
        "Built multiple mobile apps using Flutter including a task scheduler, personal vault, and expense tracker. Implemented clean architecture using BLoC and Provider for robust state management.Integrated Firebase for authentication, storage, and real-time data handling.",
      Icon: <FaFlutter />,
      color: "text-blue-800",
      image: flutterImage,
    },
    {
      title: "Tailwind CSS",
      subtitle: "Utility-First Styling for Responsive Design",
      description:
        "Styled web apps with consistent and responsive UI using Tailwind CSS. Leveraged Tailwind for clean layouts, dark mode, and component-based design. Enhanced developer productivity with rapid prototyping and reusable styles.",
      Icon: <RiTailwindCssFill />,
      color: "text-sky-500",
      hover_color: "hover: bg-sky-500",
      image: tailwindImage,
    },
    {
      title: "Supabase",
      subtitle: "Open Source Backend for Modern Applications",
      description:
        "Built a full-stack chat app using Supabase for real-time messaging and PostgreSQL storage. Used Supabase Channels and Triggers for realtime data sync. Implemented authentication and database operations with serverless ease.",
      Icon: <RiSupabaseFill />,
      color: "text-emerald-500",
      image: supabaseImage,
    },
    {
      title: "Firebase",
      subtitle: "Backend-as-a-Service for Scalable Apps",
      description:
        "Used Firebase extensively for authentication, Firestore database, and cloud storage. Applied Firebase in both mobile (Flutter) and web (React) projects. Designed real-time features and secure file storage using Firebase services.",
      Icon: <IoLogoFirebase />,
      color: "text-amber-400",
      image: firebaeImage,
    },
  ];
  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-10">
        {" "}
        <div className="flex flex-col gap-x-2">
          <p
            className={`${TEXT_PRIMARY} font-Inter font-extrabold text-white text-5xl`}
          >
            My
          </p>
          <p
            className={`${TEXT_PRIMARY} font-Inter font-extrabold text-white text-5xl`}
          >
            Skills
          </p>
        </div>
        <p
          className={`${TEXT_PRIMARY} font-SpaceGrotesk font-medium text-white`}
        >
          Here are some my skills I have learnt
        </p>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-5">
        {skillInfo.map((skill, index) => {
          return (
            <SkillBox
              key={index}
              image={skill.image}
              iconColor={skill.color}
              icon={skill.Icon}
              title={skill.title}
              subtitle={skill.subtitle}
              description={skill.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MySkillsComponent;
