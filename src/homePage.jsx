import React from "react";
import {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_TERTIARY,
} from "./constants/colors";

function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] px-6 md:px-20 py-12 text-sm md:text-base selection:bg-white/10">
      <div className="max-w-5xl mx-auto">
        
        {/* HERO */}
        <section className="mb-20">
          <h1 className={`${TEXT_PRIMARY} text-3xl md:text-5xl font-semibold mb-4 tracking-tight`}>
            Damodhar Reddy
          </h1>

          <p className={`${TEXT_SECONDARY} text-lg md:text-xl mb-6 font-medium`}>
            Backend Developer (Node.js • PostgreSQL • GCP)
          </p>

          <p className={`${TEXT_TERTIARY} max-w-2xl leading-relaxed`}>
            Built and deployed a healthcare scheduling system handling
            appointments, triage, and role-based workflows used by doctors and
            receptionists. Focused on scalable architectures and efficient data modeling.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/Backend_Developer_NodeJS.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-all font-medium">
                Resume
              </button>
            </a>

            <a
              href="https://github.com/DamodharGona"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-gray-700 px-6 py-2.5 rounded-lg text-white hover:bg-white/10 transition-all font-medium">
                GitHub
              </button>
            </a>
          </div>
        </section>

        <div className="border-t border-gray-900 my-16" />

        {/* PROJECTS */}
        <section className="mb-20">
          <h2 className={`${TEXT_PRIMARY} text-2xl md:text-3xl font-semibold mb-8`}>
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Healthcare */}
            <div className="bg-[#111111] border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-all group">
              <h3 className={`${TEXT_PRIMARY} text-xl font-semibold mb-3 group-hover:text-white transition-colors`}>
                Healthcare Scheduling System
              </h3>

              <p className={`${TEXT_TERTIARY} mb-4 leading-relaxed`}>
                Built a backend system to manage doctor availability, appointment
                booking, triage workflows, and consultation flows.
              </p>

              <p className={`${TEXT_TERTIARY} mb-6 leading-relaxed`}>
                Designed conflict-free scheduling logic across availability,
                appointments, and leaves.
              </p>

               <p className={`${TEXT_TERTIARY} mb-6 leading-relaxed`}>
                Handled real-world edge cases including overlapping schedules, timezone validation, and triage-based booking.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded text-white/70">Node.js</span>
                <span className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded text-white/70">PostgreSQL</span>
                <span className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded text-white/70">Prisma</span>
                <span className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded text-white/70">GCP</span>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-900 my-16" />

        {/* EXPERIENCE */}
        <section className="mb-20">
          <h2 className={`${TEXT_PRIMARY} text-2xl md:text-3xl font-semibold mb-8`}>
            Experience
          </h2>

          <div className="space-y-12">
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className={`${TEXT_PRIMARY} text-lg font-semibold`}>
                  Backend Developer Intern — Dezoko
                </h3>
                <span className="text-sm text-gray-500 font-medium">Jan 2025 — Apr 2025</span>
              </div>

              <ul className={`${TEXT_TERTIARY} list-disc pl-5 space-y-2 leading-relaxed`}>
                <li>Built a healthcare scheduling system used by doctors and receptionists.</li>
                <li>Designed REST APIs, conflict-free scheduling logic, and role-based workflows.</li>
                <li>Deployed backend on Google Cloud handling real-world booking and consultation flows.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className={`${TEXT_PRIMARY} text-lg font-semibold`}>
                  Backend Developer Intern — KPN Farm Fresh
                </h3>
                <span className="text-sm text-gray-500 font-medium">Jul 2025 — Sep 2025</span>
              </div>

              <ul className={`${TEXT_TERTIARY} list-disc pl-5 space-y-2 leading-relaxed`}>
                <li>Worked on migrating cart APIs and aligning backend workflows across catalog, inventory, and order systems.</li>
                <li>Modified API contracts and handled PostgreSQL schema changes to optimize data retrieval.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-900 my-16" />

        {/* SKILLS */}
        <section className="mb-20">
          <h2 className={`${TEXT_PRIMARY} text-2xl md:text-3xl font-semibold mb-8`}>
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className={`${TEXT_PRIMARY} font-semibold mb-3`}>Backend</h4>
              <p className={TEXT_TERTIARY}>Node.js, Express, Fastify, REST APIs, TypeScript</p>
            </div>
            <div>
              <h4 className={`${TEXT_PRIMARY} font-semibold mb-3`}>Database</h4>
              <p className={TEXT_TERTIARY}>PostgreSQL, Prisma, Supabase</p>
            </div>
            <div>
              <h4 className={`${TEXT_PRIMARY} font-semibold mb-3`}>Cloud & DevOps</h4>
              <p className={TEXT_TERTIARY}>Google Cloud, Docker, Git</p>
            </div>
            <div>
              <h4 className={`${TEXT_PRIMARY} font-semibold mb-3`}>Frontend</h4>
              <p className={TEXT_TERTIARY}>React (basic), Tailwind CSS, Flutter</p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-900 my-16" />

        {/* CONTACT */}
        <section className="pb-12">
          <h2 className={`${TEXT_PRIMARY} text-2xl md:text-3xl font-semibold mb-8`}>
            Contact
          </h2>

          <div className={`${TEXT_TERTIARY} space-y-4`}>
            <p className="flex items-center gap-3">
              <span className="text-gray-500 w-16">GitHub</span>
              <a
                href="https://github.com/DamodharGona"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 decoration-gray-700 hover:decoration-white transition-all"
              >
                DamodharGona
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-gray-500 w-16">Email</span>
              <a
                href="mailto:gonadamodharreddy999@gmail.com"
                className="text-white underline underline-offset-4 decoration-gray-700 hover:decoration-white transition-all"
              >
                gonadamodharreddy999@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-gray-500 w-16">LinkedIn</span>
              <a
                href="https://linkedin.com/in/damodharreddygona"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 decoration-gray-700 hover:decoration-white transition-all"
              >
                Profile
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;