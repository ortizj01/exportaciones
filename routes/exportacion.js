const {Router} = require('express')

const route = Router()


//Listar todos los datos
const { getExportacion, postRegistroExportacion, putExportacion, deleteExportacion } = require('../controllers/exportacion')

route.get('/', getExportacion)
route.post('/', postRegistroExportacion)
route.put('/', putExportacion)
route.delete('/', deleteExportacion)

module.exports = route;