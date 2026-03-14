import { motion } from "framer-motion"

export default function AIAnalysisVisual() {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -40 }}
      transition={{ duration: 0.6 }}
      className="w-[520px]"
    >

      {/* insights */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-[#1e293b] p-4 rounded-xl">
          <p className="text-xs text-gray-400">Pattern Accuracy</p>
          <h3 className="text-lg font-semibold text-purple-400">94%</h3>
        </div>

        <div className="bg-[#1e293b] p-4 rounded-xl">
          <p className="text-xs text-gray-400">Customer Signals</p>
          <h3 className="text-lg font-semibold">1.8K</h3>
        </div>

        <div className="bg-[#1e293b] p-4 rounded-xl">
          <p className="text-xs text-gray-400">Risk Alerts</p>
          <h3 className="text-lg font-semibold text-red-400">12</h3>
        </div>

      </div>

      {/* analysis chart */}
      <div className="bg-[#1e293b] rounded-xl p-4 mb-6">

        <p className="text-sm text-gray-400 mb-3">AI Pattern Detection</p>

        <motion.div
          className="h-[120px] bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-lg"
          animate={{ scaleY: [0.9, 1.05, 1, 0.95] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

      </div>

      {/* insights feed */}
      <div className="space-y-3">

        <motion.div
          className="bg-[#1e293b] p-3 rounded-lg text-sm"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          AI detected customer churn pattern
        </motion.div>

        <motion.div
          className="bg-[#1e293b] p-3 rounded-lg text-sm"
          animate={{ x: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Predictive revenue trend generated
        </motion.div>

      </div>

    </motion.div>
  )
}