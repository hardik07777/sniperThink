import { motion, useScroll } from "framer-motion"

export default function ProgressIndicator() {

  const { scrollYProgress } = useScroll()

  return (

    <div className="fixed left-8 top-0 h-full w-[3px] bg-gray-800/60 z-40">

      {/* progress bar */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="origin-top bg-gradient-to-b from-blue-400 to-blue-600 w-full h-full"
      />

      {/* glow */}
      <div className="absolute inset-0 blur-md bg-blue-500/30"></div>

    </div>

  )
}