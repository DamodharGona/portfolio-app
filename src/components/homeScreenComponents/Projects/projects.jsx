import React from "react";
import ProjectBox from "./projectBox";
import chatImage from "@/assets/images/chat application.webp";
import taskSchedularImage from "@/assets/images/taskschedular.webp";
import expenseImage from "@/assets/images/finance.svg";
import movieImage from "@/assets/images/movie.png";

function ProjectComponent() {
  let projects = [
    {
      title: "REALTIME CHAT APPLICATION",
      description:
        "Built full-stack realtime chat application using React.js, Tailwind CSS, and Supabase, developing a responsive frontend for an optimal user experience. Integrated Supabase backend with PostgreSQL and implemented Google OAuth and email/password authentication with protected routes. Built realtime messaging using Supabase Channels and PostgreSQL triggers, enabling message timestamping and conversation history management.",
      techUsed: ["React.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
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
      title: "FAVOURITE TV & MOVIE SHOWS",
      description:
        "Built full-stack web app using React.js, TypeScript, Tailwind CSS, and Shadcn UI for managing personal favorite movies and TV shows. Engineered backend with Node.js (Express), MySQL, and JWT authentication, supporting secure user accounts and CRUD operations.",
      techUsed: [
        "React.js",
        "TypeScript",
        "Node.js",
        "MySQL",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      image: movieImage,
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
    <div className="flex flex-col md:grid md:grid-flow-row  md:grid-cols-2 xl:grid xl:grid-flow-row xl:grid-cols-3  gap-5">
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
