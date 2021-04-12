const express = require("express")
const AccountRouter = require('./accounts/accounts-router')

const server = express()
server.use(express.json())

server.use("/api/accounts", AccountRouter)
server.get('/api', (req, res) => {
    res.status(200).json(`Welcome to the API! Get started be accessing this endpoint: /api/accounts/ `)
})

server.get("/", (req, res) => {
    res.status(200).json(`Node db1 module project server is up and running! ^_^`)
})

module.exports = server
