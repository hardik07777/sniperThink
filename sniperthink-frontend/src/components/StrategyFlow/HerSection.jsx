import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Text moves up and disappears
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -300]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={ref} className="relative h-[105vh] w-full overflow-hidden">

      {/* Background Image */}
      <motion.img
        src="/image.png"
        alt="hero background"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <motion.div
        style={{ y, scale }}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-6xl mx-auto px-8 pt-40"
      >

        {/* Text Box */}
<div className="inline-block border border-white/40 backdrop-blur-md bg-white/10 rounded-xl p-8 shadow-2xl">

  <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight 
  drop-shadow-[0_4px_9px_rgba(0,0,0,0.8)] 
  [text-shadow:2px_2px_6px_rgba(0,0,0,0.9)]">

    Turning Business Chaos into <br/>

    <span className="text-blue-300 
    drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] 
    [text-shadow:2px_2px_6px_rgba(0,0,0,0.9)]">
      Clarity, Control & Confident Growth
    </span>

  </h1>

  <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed 
  drop-shadow-[0_3px_4px_rgba(0,0,0,0.8)]">

    AI-powered tools that turn scattered business data into clear insights,
    automate operations, and help companies make smarter decisions and
    scale faster.

  </p>

</div>

      </motion.div>

    </section>
  );
}