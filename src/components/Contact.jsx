import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const EASE = [0.16, 1, 0.3, 1];
const EMAIL = "gonadamodharreddy999@gmail.com";

const socials = [
    { name: "GitHub", handle: "@DamodharGona", url: "https://github.com/DamodharGona", testId: "social-link-github" },
    { name: "LinkedIn", handle: "in/damodharreddygona", url: "https://www.linkedin.com/in/damodharreddygona/", testId: "social-link-linkedin" },
    { name: "Live Demo", handle: "Job Tracker App", url: "https://job-tracker-ten-mu-33.vercel.app", testId: "social-link-demo" },
    { name: "Phone", handle: "+91 99898 69348", url: "tel:+919989869348", testId: "social-link-phone" },
];

export const Contact = ({ onNavigate }) => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
        } catch {
            const ta = document.createElement("textarea");
            ta.value = EMAIL;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
        }
        setCopied(true);
        toast.success("Email copied to clipboard", { description: EMAIL });
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer id="contact" className="relative px-6 sm:px-10 lg:px-16 pt-32 pb-10 overflow-hidden">
            <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-lime-300/[0.05] blur-[120px]" />
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="font-mono2 text-xs uppercase tracking-[0.25em] text-lime-300 mb-8"
                >
                    05 / Contact
                </motion.p>
                <motion.div
                    className="overflow-hidden mb-14"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    <motion.h2
                        data-testid="contact-heading"
                        variants={{ hidden: { y: "105%" }, show: { y: 0 } }}
                        transition={{ duration: 1, ease: EASE }}
                        className="font-display font-extrabold uppercase tracking-tighter leading-[0.95] text-4xl sm:text-6xl lg:text-7xl text-zinc-100 max-w-5xl"
                    >
                        Let's build something{" "}
                        <span className="font-serif-accent normal-case text-lime-300 font-semibold">
                            reliable.
                        </span>
                    </motion.h2>
                </motion.div>

                <motion.button
                    data-testid="contact-email-copy-btn"
                    onClick={copyEmail}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
                    className="group flex items-center gap-4 rounded-full bg-lime-300 text-zinc-950 font-mono2 text-sm sm:text-base tracking-[0.1em] px-8 py-5 mb-16 hover:bg-lime-200 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    {copied ? "Copied!" : EMAIL}
                </motion.button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {socials.map((s, i) => (
                        <motion.a
                            key={s.name}
                            data-testid={s.testId}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                            className="group rounded-2xl border border-white/[0.08] bg-[#101014] p-6 hover:border-lime-300/30 hover:bg-[#181820] transition-colors duration-300"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                                    {s.name}
                                </span>
                                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-lime-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>
                            <p className="font-display font-bold text-lg text-zinc-100 group-hover:text-lime-300 transition-colors duration-300">
                                {s.handle}
                            </p>
                        </motion.a>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/[0.08] pt-8">
                    <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                        © 2026 Damodhar Reddy — Backend-first, shipped end to end
                    </p>
                    <button
                        data-testid="back-to-top-btn"
                        onClick={() => onNavigate("top")}
                        className="group flex items-center gap-2 font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-400 hover:text-lime-300 transition-colors duration-200"
                    >
                        Back to top
                        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 group-hover:border-lime-300/50 group-hover:-translate-y-1 transition-all duration-200">
                            <ArrowUp className="w-3.5 h-3.5" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};
