import React from "react";
import ProjectBox from "./projectBox";
import { TEXT_PRIMARY } from "@/constants/colors";
import chatImage from "@/assets/images/chat application.webp";
import taskSchedularImage from "@/assets/images/taskschedular.webp";
import expenseImage from "@/assets/images/finance.svg";
import portfolioImg from "@/assets/images/portfolio.webp";

function ProjectComponent() {
  let projects = [
    {
      title: "Real-Time Chat App",
      description:
        "A responsive web-based chat application with real-time messaging, Google OAuth, and protected routes. Built with a Supabase backend and Tailwind for styling and layout.",
      techUsed: ["React.js", "Tailwind CSS", "Supabase"],
      image: chatImage,
    },
    {
      title: "Task Scheduler App",
      description:
        "A productivity app that lets users manage, schedule, and persist daily tasks. Real-time syncing using Firestore.",
      techUsed: ["Flutter", "Dart", "Firebase", "BLoC"],
      image: taskSchedularImage,
    },
    {
      title: "Developer Portfolio Website",
      description:
        "A fully responsive  portfolio showcasing skills, projects, and contact form. Designed with a modern UI and built using reusable components and Tailwind.",
      techUsed: ["React.js", "Tailwind CSS"],
      image: portfolioImg,
    },
    {
      title: "Expense Tracker App",
      description:
        "An intuitive mobile app to track personal finances and visualizes. Includes bar graph view, and persistent state management.",
      techUsed: ["Flutter", "Dart", "Firebase", "Provider"],
      image: expenseImage,
    },
  ];

  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-10">
        {" "}
        <div className="flex flex-col gap-x-2">
          <p className={`${TEXT_PRIMARY} font-Inter text-5xl font-extrabold`}>
            My
          </p>
          <p className={`${TEXT_PRIMARY} font-Inter text-5xl font-extrabold`}>
            Projects
          </p>
        </div>
        <p className={`${TEXT_PRIMARY}`}>
          Here are some my projects I have built
        </p>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-5">
        {projects.map((project, index) => {
          return (
            <ProjectBox
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.techUsed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectComponent;
