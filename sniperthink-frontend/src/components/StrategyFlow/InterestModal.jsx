import { useState } from "react"
import { motion } from "framer-motion"
import api from "../../services/api"

export default function InterestModal({ step, close }) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async () => {

    if (!name || !email) {
      setMessage("Please fill all fields")
      return
    }

    setLoading(true)
    setMessage("")

    try {

      await api.post("/interest", {
        name,
        email,
        step: step.title
      })

      setMessage("Interest submitted successfully ")

      setName("")
      setEmail("")

    } catch {
      setMessage("Submission failed. Please try again.")
    }

    setLoading(false)
  }

  return (

    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={close}
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
      >

        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Interested in {step.title}?
        </h2>

        {/* NAME */}
        <input
          type="text"
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Your email"
          className="w-full border border-gray-300 rounded-lg p-3 mb-6 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 w-full rounded-lg transition font-medium"
        >
          {loading ? "Sending..." : "I'm Interested"}
        </button>

        {/* MESSAGE */}
        {message && (
          <p className="text-sm text-center mt-4 text-gray-600">
            {message}
          </p>
        )}

        {/* CLOSE */}
        <button
          onClick={close}
          className="mt-6 w-full text-sm text-gray-500 hover:text-gray-800 transition"
        >
          Cancel
        </button>

      </motion.div>

    </div>
  )
}