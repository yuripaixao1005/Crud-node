const express = require('express')
const database = require('../database')

const route = express()

route.get('/car', (req, res)=>{
 return res.status(200).json(database)
})

module.exports = route