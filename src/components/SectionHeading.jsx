import { motion } from "framer-motion";

export const SectionHeading = ({ index, eyebrow, title, accent }) => (
    <div className="mb-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-5"
        >
            <span className="font-mono2 text-xs tracking-[0.25em] text-lime-300">{index}</span>
            <span className="h-px w-16 bg-lime-300/30" />
            <span className="font-mono2 text-xs uppercase tracking-[0.25em] text-zinc-500">{eyebrow}</span>
        </motion.div>
        <motion.div
            className="overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
        >
            <motion.h2
                variants={{ hidden: { y: "105%" }, show: { y: 0 } }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold uppercase tracking-tight leading-none text-3xl sm:text-5xl lg:text-6xl text-zinc-100"
            >
                {title}{" "}
                {accent && (
                    <span className="font-serif-accent normal-case text-lime-300 font-semibold">{accent}</span>
                )}
            </motion.h2>
        </motion.div>
    </div>
);
