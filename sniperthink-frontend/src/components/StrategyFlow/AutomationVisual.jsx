import { motion } from "framer-motion"

export default function AutomationVisual() {

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.6 }}
      className="w-[520px]"
    >

      {/* pipeline */}
      <div className="bg-[#1e293b] rounded-xl p-6 mb-6">

        <p className="text-sm text-gray-400 mb-4">Automation Pipeline</p>

        <div className="space-y-4">

          <motion.div
            className="bg-[#0f172a] p-3 rounded-lg text-sm"
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Lead captured from website
          </motion.div>

          <motion.div
            className="bg-[#0f172a] p-3 rounded-lg text-sm"
            animate={{ x: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            AI qualifies potential buyer
          </motion.div>

          <motion.div
            className="bg-[#0f172a] p-3 rounded-lg text-sm"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Automated email sequence sent
          </motion.div>

          <motion.div
            className="bg-[#0f172a] p-3 rounded-lg text-sm"
            animate={{ x: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            CRM pipeline updated
          </motion.div>

        </div>

      </div>

      {/* automation stat */}
      <div className="bg-[#1e293b] p-4 rounded-xl">
        <p className="text-sm text-gray-400">Workflow Efficiency</p>
        <h3 className="text-2xl font-semibold text-green-400">+67%</h3>
      </div>

    </motion.div>
  )
}