const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let departamentoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    numero_empleados: {
        type: Number,
        required: [true, 'Numero obligatorio']
    },
    extension_telefonica: {
        type: Number,
        required: [true, 'Telefono obligatorio']
    },
    activo: {
        type: Boolean,
        default: true
    },
    id_jefe_de_area: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});

module.exports = mongoose.model('Departamento', departamentoSchema);