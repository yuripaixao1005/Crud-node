const express = require('express')
const database = require('../database')

const route = express()

route.post('/car/:id', (req, res)=> {

    const idcarro = req.params.id

const carroEncontrado = database.find((carro) => {
    return carro.id === Number(idcarro)
})

if(!carroEncontrado){
    return res.status(404).json("Carro não existe")
}
return res.status(404).json(carroEncontrado)
})
module.exports = route