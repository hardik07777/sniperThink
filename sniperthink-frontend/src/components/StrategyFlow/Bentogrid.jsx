import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "AI Strategy Engine",
    description: "Precision insights powered by advanced intelligence.",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Sniper Execution",
    description: "Every move calculated. Every decision optimized.",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Team Intelligence",
    description: "Align teams with real-time insights and strategic clarity.",
    className: "col-span-1 row-span-2",
  },
  {
    title: "Market Signals",
    description: "725K+ signals analyzed daily",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Business Command",
    description: "Control operations with data-driven intelligence.",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Mobile Intelligence",
    description: "Monitor and execute strategy from anywhere.",
    className: "col-span-1 row-span-2",
  },
  {
    title: "Performance Index",
    description: "+54% strategic growth",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Strategic Advantage",
    description: "Turn insights into competitive domination.",
    className: "col-span-2 row-span-1",
  },
];

export default function BentoGrid() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section
      ref={ref}
      className="bg-[#050505] py-32 px-6"
    >
      <motion.div
        style={{ y, scale }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto grid grid-cols-4 auto-rows-[160px] gap-5"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.03,
                duration: 0.35,
                ease: "easeOut"
              }}           
            whileHover={{
            scale: 1.05,
            zIndex: 10,
            boxShadow: "0px 30px 80px rgba(99,102,241,0.25)",
            }}
            className={`${card.className}
            
            bg-gradient-to-br
            from-[#0f0f0f]
            to-[#1a1a1a]
            
            border border-white/10
            rounded-xl
            p-6
            flex flex-col
            justify-between
            cursor-pointer
            backdrop-blur-xl
            `}
          >
            <h3 className="text-xs tracking-widest uppercase text-gray-400">
              {card.title}
            </h3>

            <p className="text-lg font-semibold text-white leading-snug">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}