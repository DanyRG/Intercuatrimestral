const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let empleadoSchema = new Schema({
    nombre_del_puesto: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    anios_servicios: {
        type: Number,
        require: [true, 'Años de servicio requeridos']
    },
    hora_entrada: {
        type: Number,
        require: [true, 'Hora de entrada obligatoria']
    },
    hora_salida: {
        type: Number,
        require: [true, 'Hora de salida obligatoria']
    }
});

module.exports = mongoose.model('Empleado', empleadoSchema);