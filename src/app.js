const express = require("express")
const app = express()

app.get("/", (req, res) => {
    //TODO: show todo list user
})

app.get("/todo", (req, res) => {
    //TODO: save a todo
})

module.exports = app