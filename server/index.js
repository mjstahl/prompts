const express = require('express')
const initRoutes = require('./routes/')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('client'))

initRoutes(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Prompts started on ${PORT}.`)
})
