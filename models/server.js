const express = require('express')
const cors = require('cors'); // permite o restringe las solicitudes
const bodyParser = require('body-parser') //Paquete convertir el objeto enviando desde el form
const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.exportacionesPath = '/exportaciones'
        this.authPath = '/login' //Ruta de la API
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){ // escucha las solicitudes
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }

    routes(){
        this.app.use(this.exportacionesPath, require('../routes/exportacion'))
    }

    middlewares(){
        this.app.use( cors() ) //Indicar el uso de cors
        this.app.use( bodyParser.json()) //Parsear objetos a insertar desde BD

    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase