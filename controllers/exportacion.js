const {response} = require('express')
// const { model } = require('mongoose')

const Exportacion = require('../models/exportacion')

const getExportacion = async(req, res ) => {
    
    const exportacion = await Exportacion.find(); //Obtener todos los documentos de una coleccion
    res.json({
        msg: exportacion
    })
}



const postRegistroExportacion = async(req, res) => {
    const datos = req.body //Capturar daros de la url-postman

    let mensaje = 'Inserccion exportacion exitosa'
    try {
        const exportacion = new Exportacion(datos) // instancia objeto
        await exportacion.save() //guardar en la bd
    } catch (error) {
        mensaje = error.message;
    }

    res.json({ 
        msg: mensaje 
    })

}

const putExportacion = async (req, res) => {
    const { producto, kilos, precioKilos } = req.body // desectructurar el array con los datos
    let mensaje = ''

    try {
        const exportacion = await Exportacion.findOneAndUpdate({_id: _id}, // Busqueda
        { producto, kilos, precioKilos }) // Campos a editar
        mensaje = 'actualizacion exitosa'

    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje

    })
}

const deleteExportacion = async (req, res) => {
    const { _id } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const exportacion = await AgendaServicios.findOneAndDelete({_id:_id}) // Busqueda
        mensaje = 'eliminacion exitosa'

    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje

    })
}


module.exports = {
    postRegistroExportacion,
    getExportacion,
    putExportacion,
    deleteExportacion
}
