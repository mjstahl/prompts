const express = require('express')
const initRoutes = require('./routes/')
const app = express()

const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)
app.listen(PORT, () => console.log(`Prompts started on ${PORT}.`))
