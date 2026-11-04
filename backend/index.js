const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 4002

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello from back')
})

app.get('/api/health',(req,res)=>{
    res.status(200).json({message: 'API is running'})
})

app.get('/api/items',(req,res)=>{
    res.status(200).json([])
})

app.post('/api/items',(req,res)=>{
    const {name, description} = req.body

    if(!name || !description){
        return res.status(400).json({message: 'Name and description are required'})
    }

    res.status(201).json({
        name: name,
        description: description
    })
})

app.listen(port,()=>{
    console.log("le serveur tourne dans le port " + port)
})