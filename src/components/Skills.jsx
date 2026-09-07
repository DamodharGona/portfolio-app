import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1];

const categories = [
    {
        key: "backend",
        label: "Backend",
        skills: [
            "Node.js / Express",
            "NestJS",
            "Fastify",
            "REST API Design",
        ],
    },
    {
        key: "frontend",
        label: "Frontend & Mobile",
        skills: [
            "React",
            "TailwindCSS",
            "TypeScript",
            "Flutter",
        ],
    },
    {
        key: "data",
        label: "Data & Cloud",
        skills: [
            "PostgreSQL",
            "Prisma",
            "Google Cloud",
            "Docker",
        ],
    },
    {
        key: "security",
        label: "Auth & Tools",
        skills: [
            "JWT & RBAC",
            "AES-256-GCM",
            "Firebase Auth",
            "Git / Postman",
        ],
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="px-6 sm:px-10 lg:px-16 py-28 max-w-7xl mx-auto">
            <SectionHeading index="03" eyebrow="Capabilities" title="Tech" accent="radar" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((c, i) => (
                    <motion.div
                        key={c.key}
                        data-testid={`skills-category-${c.key}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                        className="rounded-2xl border border-white/[0.08] bg-[#101014] p-6 sm:p-7 hover:border-lime-300/25 transition-colors duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                                <div className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-lime-300 radar-dot" />
                                    <h3 className="font-mono2 text-xs uppercase tracking-[0.22em] text-lime-300 font-semibold">
                                        {c.label}
                                    </h3>
                                </div>
                                <span className="font-mono2 text-[10px] tracking-[0.2em] text-zinc-600">
                                    0{i + 1}
                                </span>
                            </div>
                            <div className="space-y-2.5">
                                {c.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        data-testid={`skill-item-${skill.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                        className="group/item flex items-center justify-between px-3.5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-lime-300/30 hover:bg-[#181820] transition-all duration-200"
                                    >
                                        <span className="font-display font-medium text-sm text-zinc-200 group-hover/item:text-lime-300 transition-colors duration-200">
                                            {skill}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-lime-300 group-hover/item:shadow-[0_0_8px_rgba(226,248,83,0.8)] transition-all duration-200" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
