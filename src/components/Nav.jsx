import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { id: "projects", label: "Projects", testId: "nav-item-projects" },
    { id: "about", label: "Manifesto", testId: "nav-item-about" },
    { id: "skills", label: "Tech Stack", testId: "nav-item-skills" },
    { id: "experience", label: "Timeline", testId: "nav-item-experience" },
    { id: "contact", label: "Contact", testId: "nav-item-contact" },
];

export const Nav = ({ onNavigate }) => {
    const [open, setOpen] = useState(false);
    const go = (id) => {
        setOpen(false);
        onNavigate(id);
    };

    return (
        <>
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
                <nav className="flex items-center justify-between px-5 sm:px-6 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
                    <button
                        data-testid="nav-logo"
                        onClick={() => go("top")}
                        className="font-display font-extrabold text-lg tracking-tight text-zinc-100 hover:text-lime-300 transition-colors duration-200 flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-lime-300 radar-dot" />
                        DR<span className="text-lime-300">.</span>
                    </button>
                    <div className="hidden md:flex items-center gap-7">
                        {links.map((l) => (
                            <button
                                key={l.id}
                                data-testid={l.testId}
                                onClick={() => go(l.id)}
                                className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-lime-300 transition-colors duration-200"
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            data-testid="nav-availability-pill"
                            onClick={() => go("contact")}
                            className="hidden sm:flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/5 px-4 py-1.5 font-mono2 text-[10px] uppercase tracking-[0.2em] text-lime-300 hover:bg-lime-300/15 transition-colors duration-200"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-300 radar-dot" />
                            Open to Work
                        </button>
                        <button
                            data-testid="mobile-menu-btn"
                            onClick={() => setOpen(!open)}
                            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-zinc-200 hover:border-lime-300/50 hover:text-lime-300 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>
                </nav>
            </motion.header>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        data-testid="mobile-nav-drawer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#08080a]/95 backdrop-blur-2xl md:hidden"
                    >
                        <div className="flex flex-col justify-center h-full px-8">
                            {links.map((l, i) => (
                                <motion.button
                                    key={l.id}
                                    data-testid={`mobile-nav-item-${l.id}`}
                                    initial={{ opacity: 0, x: -32 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -16 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 * i + 0.1 }}
                                    onClick={() => go(l.id)}
                                    className="text-left font-display font-extrabold uppercase tracking-tight text-3xl text-zinc-100 hover:text-lime-300 transition-colors duration-200 py-4 border-b border-white/[0.06] flex items-baseline gap-4"
                                >
                                    <span className="font-mono2 text-xs tracking-[0.25em] text-lime-300">0{i + 1}</span>
                                    {l.label}
                                </motion.button>
                            ))}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.55 }}
                                className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-600 mt-10"
                            >
                                Damodhar Reddy — Full Stack Developer
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
