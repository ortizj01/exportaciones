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
    const { _id, producto, kilos, precioKilos } = req.body; // desestructura el array con los datos
    let mensaje = '';

    try {
        const exportacion = await Exportacion.findOneAndUpdate(
            {_id: _id}, // Búsqueda
            { producto, kilos, precioKilos }, // Campos a editar
            { new: true } // Para obtener el documento actualizado
        );
        
        if (!exportacion) {
            return res.status(404).json({ mensaje: 'No se encontró la exportación' });
        }
    
        mensaje = 'Actualización exitosa';
        return res.status(200).json({ mensaje });
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}


const deleteExportacion = async (req, res) => {
    const { _id } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const exportacion = await Exportacion.findOneAndDelete({_id:_id}) // Busqueda
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
