const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const path = require("path")

const makePath = (dir, filename) => {
    return path.resolve(__dirname, "..", "public", dir, filename)
}

const todos = ["Get milk", "Get bread", "Learn javascript"]

app.use(bodyParser.json())
app.set("view engine", "ejs")
app.use(express.static(path.resolve(__dirname)))

app.get("/", (req, res) => {
    res.render(path.resolve(__dirname, "index.ejs"))
})

app.get("/todo", (req, res) => {
    //TODO: save a todo
})

module.exports = app