import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import Hero from "./HerSection"
import BentoGrid from "./Bentogrid"
import StrategySection from "./StrategySection"

export default function StrategyFlow() {

  const containerRef = useRef(null)

const { scrollYProgress } = useScroll()

  const background = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [
     "#05070b",
    "#1a1f3a",
    "#05070b"
  ]
)

 const glowColor = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [
    "rgba(99,102,241,0.25)",   // indigo
    "rgba(168,85,247,0.25)",   // purple
    "rgba(99,102,241,0.25)"
  ]
)

  const glowX = useTransform(
  scrollYProgress,
  [0, 1],
  ["-5%", "5%"]
)

const glowY = useTransform(
  scrollYProgress,
  [0, 1],
  ["-5%", "10%"]
)

  return (
    <motion.section
      ref={containerRef}
      style={{ background }}
      className="relative text-white overflow-hidden transition-colors duration-700"
    >

      <Hero />
      <BentoGrid />
      <StrategySection />
      

      {/* animated glow */}
      <motion.div
  style={{ x: glowX, y: glowY, background: glowColor }}
  className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[180px] rounded-full opacity-60"
/>

<div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-indigo-500/10 blur-[200px] rounded-full" />
      {/* grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

    </motion.section>
  )
}