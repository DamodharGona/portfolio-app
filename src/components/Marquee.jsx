const items = [
    "Full Stack Engineering",
    "Backend Systems",
    "API Design",
    "Healthcare Tech",
    "AI Integration",
    "Cloud Native",
];

const Row = () => (
    <div className="flex shrink-0 items-center">
        {items.map((t, i) => (
            <span key={i} className="flex items-center">
                <span className="font-display font-extrabold uppercase tracking-tight text-5xl sm:text-7xl text-outline whitespace-nowrap px-6">
                    {t}
                </span>
                <span className="text-lime-300 text-3xl sm:text-5xl font-display">•</span>
            </span>
        ))}
    </div>
);

export const Marquee = () => (
    <div
        data-testid="editorial-marquee"
        className="relative w-full overflow-hidden border-y border-white/[0.07] py-8 select-none"
    >
        <div className="animate-marquee flex w-max">
            <Row />
            <Row />
        </div>
    </div>
);
