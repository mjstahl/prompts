const express = require('express')
const initRoutes = require('./routes/')
const app = express()

const PORT = 3000

initRoutes(app)
app.listen(PORT, () => console.log(`Prompts started on ${PORT}.`))
