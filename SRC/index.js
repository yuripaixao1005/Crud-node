const express = require('express')
const routes = require('./ROUTES/index')

const app = express()

app.use(express.json())

app.use(routes.createCar)
app.use(routes.listCars)
app.use(routes.getCar)
app.listen(3000,() => {
    console.log('servidor incializado')
})