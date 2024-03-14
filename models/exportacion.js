const { Schema, model } = require('mongoose');

const exportacionesSchema = new Schema({
    producto: {
        type: String,
        required: [true, 'El producto es requerido']
    },
    kilos: {
        type: Number,
        required: [true, 'Los kilos son requeridos']
    },
    precioKilos: {
        type: Number,
        required: [true, 'El precio es requerido']
    },
    precioDolar: {
        type: Number
    }
});

// Middleware específico para la operación de eliminación
exportacionesSchema.pre('findOneAndDelete', async function(next) {
    // Aquí puedes agregar cualquier lógica específica necesaria antes de la eliminación
    // Por ejemplo, validar si se encontró el documento antes de eliminarlo
    next();
});

const Exportacion = model('Exportacion', exportacionesSchema);

module.exports = Exportacion;
