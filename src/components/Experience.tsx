import { useMemo, useRef } from "react";
import { motion, useScroll } from "framer-motion";

type ExperienceItem = {
  year: string;
  company: string;
  title: string;
  description: string;
};

const experienceData: ExperienceItem[] = [
  {
    year: "2024",
    company: "Aurora Labs",
    title: "Senior Frontend Engineer",
    description:
      "Led the delivery of a design system overhaul, migrating legacy components to a performant React + Tailwind stack with shared accessibility primitives.",
  },
  {
    year: "2022",
    company: "Northwind Digital",
    title: "Product Engineer",
    description:
      "Bootstrapped a greenfield SaaS dashboard, collaborating with design to prototype micro-interactions and implementing data visualization workflows.",
  },
  {
    year: "2020",
    company: "Vertex Innovations",
    title: "Frontend Developer",
    description:
      "Implemented responsive marketing experiences and optimized bundle delivery, improving Core Web Vitals and lift in conversion funnels.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.9", "end 0.2"],
  });

  const animatedTimeline = useMemo(
    () => ({
      scaleY: scrollYProgress,
    }),
    [scrollYProgress]
  );

  return (
    <section className="px-5 pt-8">
      <h2 className="mb-8 text-gray-900">Experience</h2>

      <div ref={timelineRef} className="relative pl-8 sm:pl-10">
        <span
          className="absolute left-3 top-0 h-full w-px bg-slate-200"
          aria-hidden
        />
        <motion.span
          className="pointer-events-none absolute left-3 top-0 h-full w-px origin-top bg-gradient-to-b from-slate-400 via-slate-500 to-slate-800"
          style={animatedTimeline}
          aria-hidden
        />

        <ul className="space-y-12">
          {experienceData.map((item) => (
            <motion.li
              key={item.year}
              className="relative pl-6 text-slate-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              variants={itemVariants}
            >
              <span className="absolute left-[-14px] top-1.5 flex h-3.5 w-3.5 items-center justify-center">
                <span
                  className="h-full w-full rounded-full border-[3px] border-white bg-slate-700 shadow-sm shadow-slate-400"
                  aria-hidden
                />
              </span>

              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                {item.year}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-slate-600">
                {item.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
