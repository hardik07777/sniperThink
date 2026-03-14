const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/interest", (req, res) => {

 const { name, email, step } = req.body

 console.log("Interest received:", name, email, step)

 res.json({
  success: true,
  message: "Interest received"
 })

})

module.exports = app