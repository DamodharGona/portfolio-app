import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1];

const chapters = [
    {
        id: "01",
        title: "Backend First",
        body: "I start most projects at the API and data model, then build the interface around what the backend actually supports.",
    },
    {
        id: "02",
        title: "Ship End to End",
        body: "At Dezoko, I built REST APIs, auth, and scheduling logic for a clinic platform, and deployed the backend on Google Cloud Run. I like being involved from the schema to the deployed app, not just one layer.",
    },
    {
        id: "03",
        title: "Testing AI Output, Not Just Trusting It",
        body: "While building an AI resume-matching feature, I found the model's self-reported match score didn't add up correctly. I fixed it by moving the calculation into backend code instead of trusting the model to do arithmetic on its own output.",
    },
    {
        id: "04",
        title: "Security Basics Done Right",
        body: "JWT with role-based access, AES-256-GCM encryption for stored API keys, and signed URLs for file uploads — I try to get the fundamentals right rather than skip them.",
    },
];

export const About = () => (
    <section id="about" className="px-6 sm:px-10 lg:px-16 py-28 max-w-7xl mx-auto">
        <SectionHeading index="02" eyebrow="About" title="The" accent="manifesto" />
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"> */}
            {/* <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="relative clip-corner overflow-hidden border border-white/[0.08]"
                    >
                        <img
                            src="https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Alex Vance portrait"
                            loading="lazy"
                            className="w-full h-[420px] sm:h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                            <div>
                                <p className="font-display font-bold text-xl text-zinc-100">Damodhar Reddy</p>
                                <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-lime-300 mt-1">
                                    Full Stack Developer
                                </p>
                            </div>
                            <p className="font-mono2 text-[10px] tracking-[0.2em] text-zinc-400">BENGALURU / IN</p>
                        </div>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif-accent text-xl text-zinc-400 mt-8 leading-relaxed"
                    >
                        “Trust is earned by systems that verify themselves — not ones that hope.”
                    </motion.p>
                </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {chapters.map((c, i) => (
                    <motion.div
                        key={c.id}
                        data-testid={`manifesto-chapter-${i + 1}`}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.08 * i }}
                        className="group border-t border-white/[0.08] py-10 last:border-b hover:bg-white/[0.015] transition-colors duration-300 px-2 sm:px-4"
                    >
                        <div className="flex items-baseline gap-6 mb-4">
                            <span className="font-mono2 text-sm tracking-[0.2em] text-lime-300">
                                {c.id}
                                <span className="text-zinc-600"> / 04</span>
                            </span>
                            <h3 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-3xl text-zinc-100 group-hover:text-lime-300 transition-colors duration-300">
                                {c.title}
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-xl pl-0 sm:pl-[4.5rem]">
                            {c.body}
                        </p>
                    </motion.div>
                ))}
            </div>
        {/* </div> */}
    </section>
);
