const express = require("express")
const ws = require("ws")
const config = require("config")
const path = require("path")

const app = express()

const PORT = config.get("PORT")
const staticPath = path.join(__dirname, "./client/build")

app.use(express.static(staticPath))

app.listen(PORT)