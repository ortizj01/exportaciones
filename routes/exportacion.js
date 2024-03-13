const {Router} = require('express')

const route = Router()


//Listar todos los datos
const { getExportacion, postRegistroExportacion } = require('../controllers/exportacion')

route.get('/', getExportacion)
route.post('/', postRegistroExportacion)

module.exports = route;