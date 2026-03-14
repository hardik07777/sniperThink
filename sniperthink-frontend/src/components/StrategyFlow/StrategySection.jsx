import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { steps } from "../../data/steps"
import StrategyStep from "./StrategyStep"
import ProgressIndicator from "./ProgressIndicator"
import InterestModal from "./InterestModal"
import StrategyVisual from "./StrategyVisual"

export default function StrategySection() {

  const [selectedStep, setSelectedStep] = useState(null)
  const [activeStep, setActiveStep] = useState(steps[0])

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const visualY = useTransform(scrollYProgress,[0,1],["-30px","30px"])

  const textY = useTransform(scrollYProgress,[0,1],[0,-120])
  const textOpacity = useTransform(scrollYProgress,[0,0.2,0.8,1],[1,0.9,0.9,1])
  const textScale = useTransform(scrollYProgress,[0,1],[1,1.05])



  return (
    <section ref={containerRef} className="relative">

      <ProgressIndicator />

<div className="max-w-5xl mx-auto px-6 relative flex justify-center">
        {/* LEFT TEXT */}
       <motion.div
  style={{ y: textY, opacity: textOpacity, scale: textScale }}
  className="flex flex-col items-center text-center max-w-xl mx-auto"
>
  {steps.map((step, index) => (

    <motion.div
      key={step.id}
      className="min-h-screen flex items-center justify-center w-full"
      viewport={{ amount: 0.7 }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <StrategyStep
        step={step}
        index={index}
        onSelect={setSelectedStep}
      />
    </motion.div>

  ))}
</motion.div>

        {/* RIGHT VISUAL */}

</div>

      {selectedStep && (
        <InterestModal
          step={selectedStep}
          close={() => setSelectedStep(null)}
        />
      )}

    </section>
  )
}