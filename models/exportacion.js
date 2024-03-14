const {Schema, model } = require ('mongoose')  //Crear modelos en mongo

const exportacionesSchema = ({
  
    producto:{
        type: String,
        required:[true, 'El producto es requirido']
        },


    kilos:{
        type: Number,
        required:[true, 'Los kilos son requeridos']
        },
 
    precioKilos:{
        type: Number,
        required:[true, 'El precio es requerido']
        },

    precioDolar:{
        type: Number
        },   
});

exportacionesSchema.pre('findOneAndDelete', async function(next) {
    // No aplicamos validación para la operación de eliminación
    next();
});

module.exports = model('Exportacion', exportacionesSchema)



