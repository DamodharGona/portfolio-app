import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1];

const jobs = [
    {
        role: "Full Stack Developer Intern",
        company: "Dezoko",
        period: "Jan 2026 — Apr 2026",
        points: [
            "Built a conflict-free clinic scheduling system with Prisma & PostgreSQL — resolving doctor availability, leave and existing appointments so double-booking became impossible",
            "Developed triage routing that auto-assigns emergency patients to available doctors, bypassing schedule constraints",
            "Shipped JWT + RBAC auth, Firebase OTP onboarding and a Google Cloud Run + Cloud SQL deployment with signed-URL record uploads",
        ],
        tags: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "GCP"],
    },
    {
        role: "Backend Developer Intern",
        company: "KPN Farm Fresh",
        period: "Jul 2025 — Sep 2025",
        points: [
            "Migrated cart REST APIs from KPN's core services into IBO's Fastify cart service, wiring downstream catalog, customer and order calls",
            "Rewired the NestJS BFF layer off legacy GraphQL (Magento) onto IBO's core cart REST APIs",
            "Aligned API contracts across service boundaries and managed PostgreSQL migrations with Docker-based local testing",
        ],
        tags: ["Fastify", "NestJS", "TypeScript", "PostgreSQL", "Docker"],
    },
    {
        role: "B.E. — Information Science & Engineering",
        company: "The National Institute of Engineering, Mysore",
        period: "Dec 2021 — May 2025",
        points: [
            "Graduated with 7.64 / 10 CGPA",
            "Built the systems, databases and networking foundation behind everything I ship today",
        ],
        tags: ["Education", "ISE", "Mysore"],
    },
];

export const Experience = () => (
    <section id="experience" className="px-6 sm:px-10 lg:px-16 py-28 max-w-7xl mx-auto">
        <SectionHeading index="04" eyebrow="Career" title="The" accent="timeline" />
        <div className="relative ml-2 sm:ml-6">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-lime-300/50 via-white/10 to-transparent" />
            {jobs.map((j, i) => (
                <motion.div
                    key={j.company}
                    data-testid={`timeline-item-${i}`}
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.06 * i }}
                    className="relative pl-10 sm:pl-14 pb-14 last:pb-0 group"
                >
                    <span className="absolute -left-[5px] top-2 w-[11px] h-[11px] rounded-full bg-[#08080a] border-2 border-lime-300 group-hover:bg-lime-300 group-hover:shadow-[0_0_16px_rgba(226,248,83,0.6)] transition-all duration-300" />
                    <div className="rounded-2xl border border-white/[0.08] bg-[#101014] p-7 hover:border-lime-300/25 hover:bg-[#181820] transition-colors duration-300">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight text-zinc-100">
                                {j.role}
                            </h3>
                            <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-lime-300 border border-lime-300/25 rounded-full px-3 py-1">
                                {j.period}
                            </span>
                        </div>
                        <p className="font-serif-accent text-lg text-zinc-400 mb-4">{j.company}</p>
                        <ul className="space-y-2 mb-5">
                            {j.points.map((p, k) => (
                                <li key={k} className="flex gap-3 text-sm text-zinc-400 font-light leading-relaxed">
                                    <span className="text-lime-300 mt-0.5">→</span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            {j.tags.map((t) => (
                                <span
                                    key={t}
                                    className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border border-white/[0.08] rounded-full px-3 py-1"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);
