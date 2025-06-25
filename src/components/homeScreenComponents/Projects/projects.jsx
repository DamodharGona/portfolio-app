import React from "react";
import ProjectBox from "./projectBox";
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
  );
}

export default ProjectComponent;
