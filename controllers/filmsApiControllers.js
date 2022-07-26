const fetch = require("node-fetch")


const getHome = async (req, res) => {
    let msj = "Estas en la home de films"
    res.status(200).json({msj}); // Pinta datos en el pug
}

const getFilm = async (req, res) => {
    console.log(req.params.title);
    let response = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=affc981b`)
    let film = await response.json();
    console.log(film);
    res.status(200).json({film})}


    

const sendFilm = async (req, res) => {
    console.log(req.params.title);
    const newFilm = req.params.title;

    try{ let response = await fetch (`http://www.omdbapi.com/?t=${newFilm}&apikey=affc981b`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        body: response
    })
    let answer = await response.json(); // objeto de vuelta de la petición
    res.status(200).json({"Message": `Producto ${answer.film.title} guardado en el sistema con ID: ${answer.id}`});
    }
    catch(error){
        console.log(`ERROR:${error.stack}`)
        res.status(400).json({"message" :`Error guardando la pelicula ${answer.film.title}`})
    }
}

module.exports = {
    getHome,
    getFilm, 
    sendFilm
}