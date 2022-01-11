// BUILD YOUR SERVER HERE
const express = require('express')
const Users = require('./users/model.js')

const server = express()

server.use(express.json())

server.post('/api/users', async (req, res) => {
    try {
        const { name, bio } = req.body
        const newUser = await Users.insert({ name, bio })
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = server // EXPORT YOUR SERVER instead of {}
