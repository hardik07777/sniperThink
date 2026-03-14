import { motion } from "framer-motion"

export default function StrategyStep({ step, index, onSelect }) {

 return (
  <section className="min-h-[90vh] flex items-center justify-center px-6 py-28">

    <div className="max-w-3xl text-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-8"
      >

        

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
          {step.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          {step.description}
        </p>

        {/* CTA */}
        <button
          onClick={() => onSelect(step)}
          className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold
          bg-gradient-to-r from-blue-600 to-indigo-600
          hover:from-blue-500 hover:to-indigo-500
          text-white transition-all duration-300
          shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
        >
          I'm Interested
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

      </motion.div>

    </div>

  </section>
)
}