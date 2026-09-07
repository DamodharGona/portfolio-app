import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const lines = [
    { plain: "FULL STACK" },
    // { plain: "& BACKEND" },
    { accent: "Developer." },
];

const MaskedLine = ({ children, delay }) => (
    <div className="overflow-hidden py-[0.06em] -my-[0.06em]">
        <motion.div
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    </div>
);

export const Hero = ({ onNavigate }) => {
    const ref = useRef(null);
    const [time, setTime] = useState("");
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 40, damping: 18 });
    const sy = useSpring(my, { stiffness: 40, damping: 18 });

    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const yHeading = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    useEffect(() => {
        const tick = () =>
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                })
            );
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const onMouseMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        mx.set(e.clientX - r.left - 300);
        my.set(e.clientY - r.top - 300);
    };

    return (
        <section
            id="top"
            ref={ref}
            onMouseMove={onMouseMove}
            className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 sm:px-10 lg:px-16 pb-14 pt-36"
        >
            <motion.div
                style={{ x: sx, y: sy }}
                className="pointer-events-none absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-lime-300/[0.06] blur-[130px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

            <motion.div style={{ y: yHeading, opacity }} className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
                    className="flex flex-wrap items-center gap-4 mb-10"
                >
                    <span className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-lime-300 border border-lime-300/30 rounded-full px-4 py-1.5">
                        Damodhar Reddy — Portfolio 2026
                    </span>
                    <span className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-zinc-500" data-testid="hero-local-time">
                        BENGALORE / {time} IST
                    </span>
                </motion.div>

                <h1
                    data-testid="hero-heading"
                    className="font-display font-extrabold uppercase tracking-tighter leading-[0.92] text-[11vw] sm:text-[11vw] lg:text-[8.5rem] text-zinc-100"
                >
                    {lines.map((l, i) => (
                        <MaskedLine key={i} delay={0.15 + i * 0.14}>
                            {l.plain}
                            {l.accent && (
                                <span className="font-serif-accent normal-case text-lime-300 font-semibold tracking-normal">
                                    {l.accent}
                                </span>
                            )}
                        </MaskedLine>
                    ))}
                </h1>

                <div className="mt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
                        className="text-base sm:text-lg text-zinc-400 font-light max-w-xl leading-relaxed"
                    >
                        I'm Damodhar Reddy — a backend-first full stack engineer in Bangalore. I build APIs, auth
                        and cloud-deployed products end to end: conflict-free clinic scheduling, and an AI job
                        tracker that scores your resume honestly.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: EASE, delay: 1 }}
                        className="flex items-center gap-4"
                    >
                        <button
                            data-testid="hero-cta-projects"
                            onClick={() => onNavigate("projects")}
                            className="group flex items-center gap-3 rounded-full bg-lime-300 text-zinc-950 font-mono2 text-xs uppercase tracking-[0.2em] px-7 py-4 hover:bg-lime-200 hover:scale-[1.03] active:scale-95 transition-all duration-200"
                        >
                            View Projects
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                        </button>
                        <button
                            data-testid="hero-cta-contact"
                            onClick={() => onNavigate("contact")}
                            className="group flex items-center gap-3 rounded-full border border-white/15 text-zinc-200 font-mono2 text-xs uppercase tracking-[0.2em] px-7 py-4 hover:border-lime-300/50 hover:text-lime-300 hover:scale-[1.03] active:scale-95 transition-all duration-200"
                        >
                            Get in Touch
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono2 text-[10px] uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-2"
            >
                Scroll <ArrowDown className="w-3 h-3 animate-bounce" />
            </motion.div>
        </section>
    );
};
