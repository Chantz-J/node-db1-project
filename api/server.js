const express = require("express")

const server = express()
server.use(express.json())

server.get("/", (req, res) => {
    res.status(200).json(`Node db1 module project server is up and running!`)
})

module.exports = server
