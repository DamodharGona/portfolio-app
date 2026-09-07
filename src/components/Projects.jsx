import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1];

const filters = [
    { key: "all", label: "All", testId: "project-filter-all" },
    { key: "fullstack", label: "Full-Stack", testId: "project-filter-fullstack" },
    { key: "ai", label: "AI Platforms", testId: "project-filter-ai" },
];

const projects = [
    {
        title: "Job Application Tracker",
        category: "ai",
        categoryLabel: "AI Platform",
        year: "2026",
        description:
            "A full stack job-hunt command center — CRUD, dashboard analytics and an AI resume matcher that scores you against any JD without hallucinating.",
        tags: ["React", "Node.js", "PostgreSQL", "Gemini API"],
        image: "/job-tracker.png",
        span: "md:col-span-7",
        links: {
            live: "https://job-tracker-ten-mu-33.vercel.app",
            github: "https://github.com/DamodharGona/job-tracker",
        },
        overview:
            "Job hunting means juggling dozens of applications, deadlines and tailored resumes. I built a tracker to manage the whole pipeline — then went further: paste a job description and it scores your real resume against it, surfacing keyword gaps and suggesting tailored bullets.",
        deepDive: [
            "Built an AI resume-matching feature on the Gemini API returning a match score, keyword gaps and tailored resume bullets — grounded only in the user's actual resume content.",
            "Found and fixed classic LLM reliability issues like fabricated metrics and unreliable self-reported scoring by moving score calculation into backend logic instead of trusting the model's arithmetic.",
            "Encrypted user API keys with AES-256-GCM — decrypted only server-side, never exposed to the client.",
            "Designed JWT-authenticated CRUD APIs with a React analytics dashboard, deployed across Vercel and Render.",
        ],
        outcome:
            "A production-grade personal SaaS: secure by default, honest AI scoring, and a dashboard that turns a chaotic job search into a measurable pipeline.",
    },
    {
        title: "Healthcare Scheduling System",
        category: "fullstack",
        categoryLabel: "Full-Stack",
        year: "2026",
        description:
            "End-to-end healthcare scheduling platform — conflict-free doctor booking, emergency triage routing and role-based access, deployed on Google Cloud.",
        tags: ["Node.js", "TypeScript", "Prisma", "GCP"],
        image: "/health-care.png",
        span: "md:col-span-5",
        links: null,
        overview:
            "At Dezoko I built a healthcare scheduling MVP from zero: the APIs, the auth, the cloud deployment and the data model behind a multi-role clinic platform serving doctors, receptionists and patients.",
        deepDive: [
            "Designed REST APIs in Node.js, TypeScript and PostgreSQL covering appointment booking, doctor scheduling and consultation workflows.",
            "Built a conflict-free scheduling system with Prisma and PostgreSQL that resolves doctor availability, leave periods and existing appointments simultaneously — making double-booking structurally impossible.",
            "Developed a triage assignment system where receptionists enter patient severity and specialization, auto-routing to an available doctor and bypassing schedule constraints for emergencies.",
            "Secured the platform with JWT + RBAC across roles, added Firebase OTP phone onboarding, and deployed on Cloud Run with Cloud SQL and signed-URL uploads for patient records.",
        ],
        outcome:
            "A working clinical MVP where scheduling conflicts are impossible, emergencies route instantly, and patient records stay secure in the cloud.",
    },
    {
        title: "Cart Service Migration",
        category: "fullstack",
        categoryLabel: "Full-Stack",
        year: "2025",
        description:
            "Extracted cart APIs from a monolith into a dedicated microservice and rewired the BFF layer off legacy GraphQL — on a live grocery platform.",
        tags: ["Fastify", "NestJS", "PostgreSQL", "Docker"],
        image: "/cart-migration.png",
        span: "md:col-span-12",
        links: null,
        overview:
            "KPN Farm Fresh was moving cart functionality out of its core services into IBO's architecture. I owned the backend slice: extracting the cart APIs and re-wiring the layer that serves the storefront.",
        deepDive: [
            "Migrated cart REST APIs from KPN's core services into IBO's cart service using Fastify, wiring downstream calls across catalog, customer and order services.",
            "Updated the NestJS BFF layer to call IBO's core cart REST APIs, replacing existing GraphQL calls to Magento.",
            "Aligned API contracts and response structures with IBO service interfaces, keeping data flow consistent across service boundaries.",
            "Managed PostgreSQL schema changes via migrations and used Docker for reproducible local development and testing.",
        ],
        outcome:
            "A clean service extraction on a live commerce platform — consistent contracts across boundaries and a BFF freed of legacy GraphQL dependencies.",
    },
];

const CaseStudyModal = ({ project, onClose }) => (
    <motion.div
        data-testid="case-study-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-[70] flex items-start justify-center bg-black/80 backdrop-blur-md px-4 py-8 sm:py-14 overflow-y-auto"
    >
        <motion.div
            data-lenis-prevent
            initial={{ y: 60, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#101014] overflow-hidden shadow-2xl"
        >
            <button
                data-testid="case-study-close-btn"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-zinc-200 hover:border-lime-300/50 hover:text-lime-300 transition-colors duration-200"
                aria-label="Close case study"
            >
                <X className="w-4 h-4" />
            </button>
            <div className="relative h-52 sm:h-72">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-[#101014]/30 to-transparent" />
                <div className="absolute bottom-4 left-6 sm:left-10 flex items-center gap-3">
                    <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-lime-300 border border-lime-300/30 bg-black/50 backdrop-blur-md rounded-full px-3 py-1">
                        {project.categoryLabel}
                    </span>
                    <span className="font-mono2 text-[10px] tracking-[0.25em] text-zinc-300 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
                        {project.year}
                    </span>
                </div>
            </div>
            <div className="p-6 sm:p-10">
                <h3 className="font-display font-extrabold tracking-tight text-2xl sm:text-4xl text-zinc-100 mb-5">
                    {project.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-8">
                    {project.overview}
                </p>
                <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-lime-300 mb-4">
                    Engineering Deep-Dive
                </p>
                <ul className="space-y-3 mb-8">
                    {project.deepDive.map((d, i) => (
                        <li key={i} className="flex gap-3 text-sm text-zinc-300 font-light leading-relaxed">
                            <span className="text-lime-300 mt-0.5 shrink-0">→</span>
                            {d}
                        </li>
                    ))}
                </ul>
                <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-lime-300 mb-3">Outcome</p>
                <p className="font-serif-accent text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8">
                    {project.outcome}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((t) => (
                        <span
                            key={t}
                            className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-400 border border-white/[0.1] rounded-full px-3 py-1"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                {project.links && (
                    <div className="flex flex-wrap gap-4">
                        <a
                            data-testid="case-study-live-link"
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-lime-300 text-zinc-950 font-mono2 text-[11px] uppercase tracking-[0.2em] px-6 py-3 hover:bg-lime-200 hover:scale-[1.03] active:scale-95 transition-all duration-200"
                        >
                            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </a>
                        <a
                            data-testid="case-study-github-link"
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full border border-white/15 text-zinc-200 font-mono2 text-[11px] uppercase tracking-[0.2em] px-6 py-3 hover:border-lime-300/50 hover:text-lime-300 hover:scale-[1.03] active:scale-95 transition-all duration-200"
                        >
                            <Github className="w-3.5 h-3.5" /> Source Code
                        </a>
                    </div>
                )}
            </div>
        </motion.div>
    </motion.div>
);

const ProjectCard = ({ project, index, onOpen }) => {
    const ref = useRef(null);
    const onMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
        ref.current.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
    };

    return (
        <motion.article
            layout
            data-testid={`project-card-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: (index % 2) * 0.12 }}
            onClick={() => onOpen(project)}
            className={`spotlight-card group col-span-1 ${project.span} rounded-2xl border border-white/[0.08] bg-[#101014] overflow-hidden hover:border-lime-300/25 transition-colors duration-300 cursor-pointer`}
        >
            <div ref={ref} onMouseMove={onMove} className="absolute inset-0 z-[2]" />
            <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 font-mono2 text-[10px] tracking-[0.25em] text-zinc-300 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
                    {project.year}
                </span>
                <span className="absolute top-4 left-4 font-mono2 text-[10px] uppercase tracking-[0.25em] text-lime-300 bg-black/50 backdrop-blur-md border border-lime-300/25 rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Open Case Study
                </span>
            </div>
            <div className="relative z-[3] p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-zinc-100 group-hover:text-lime-300 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 shrink-0 text-zinc-600 group-hover:text-lime-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-5 max-w-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-lime-300 border border-lime-300/25 rounded-full px-3 py-1">
                        {project.categoryLabel}
                    </span>
                    {project.tags.map((t) => (
                        <span
                            key={t}
                            className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border border-white/[0.08] rounded-full px-3 py-1"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

export const Projects = () => {
    const [active, setActive] = useState("all");
    const [selected, setSelected] = useState(null);
    const visible = projects.filter((p) => active === "all" || p.category === active);

    return (
        <section id="projects" className="px-6 sm:px-10 lg:px-16 py-28 max-w-7xl mx-auto">
            <SectionHeading index="01" eyebrow="Selected Work" title="Spotlight" accent="projects" />
            <div className="flex flex-wrap gap-3 mb-12">
                {filters.map((f) => (
                    <button
                        key={f.key}
                        data-testid={f.testId}
                        onClick={() => setActive(f.key)}
                        className={`relative rounded-full px-5 py-2 font-mono2 text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                            active === f.key ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-100 border border-white/10"
                        }`}
                    >
                        {active === f.key && (
                            <motion.span
                                layoutId="filter-pill"
                                className="absolute inset-0 rounded-full bg-lime-300"
                                transition={{ duration: 0.4, ease: EASE }}
                            />
                        )}
                        <span className="relative z-10">{f.label}</span>
                    </button>
                ))}
            </div>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <AnimatePresence mode="popLayout">
                    {visible.map((p, i) => (
                        <ProjectCard key={p.title} project={p} index={i} onOpen={setSelected} />
                    ))}
                </AnimatePresence>
            </motion.div>
            <AnimatePresence>
                {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </section>
    );
};
