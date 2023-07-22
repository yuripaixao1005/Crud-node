const express = require('express')
const database = require('../database')

const route = express()

route.post('/car', (req, res)=>{
    // obtem os dados da requisição
    const car = req.body
    // adiciona o carro no array do database
    database.push(car)

// retorna a resposta com carro o status 201 e o carro 
    return res.status(201).json(car)
})

module.exports = route