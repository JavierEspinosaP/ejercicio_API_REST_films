const express = require('express')
const cowsay = require('cowsay2');
const owl = require('cowsay2/cows/owl')

//Ruta de pelis
const filmsApiRoutes = require('./routes/filmsApiRoutes')




const app = express()
const port = 3001


//Permite leer body recibido en una petición
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//API
app.use('/', filmsApiRoutes)


app.use(function(req, res, next) {
    res.status(404).send('Error! 404 not found ;) mákina!')})

app.listen(port, () => {
    console.log(cowsay.say(`Mi servidor funciona en http://localhost:${port}`, { cow: owl }))
  });