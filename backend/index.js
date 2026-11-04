
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const port = process.env.PORT || 3000

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connexion à MongoDB réussie !')
    })
    .catch((error) => {
        console.log('Erreur de connexion MongoDB :', error)
    })

app.get('/', (req, res) => {
    res.send('Hello from back')
})

app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'API is running' })
})

app.get('/api/items', (req, res) => {
    res.status(200).json([])
})

app.post('/api/items', (req, res) => {
    const { name, description } = req.body

    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' })
    }

    res.status(201).json({
        name: name,
        description: description
    })
})

app.listen(port, () => {
    console.log('Le serveur tourne dans le port ' + port)
})
