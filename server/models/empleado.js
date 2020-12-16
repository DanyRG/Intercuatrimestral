const mongoose = require('mongoose');
const { schema } = require('./departamento');
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
    },
    id_usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    id_departamento: {
        type: Schema.Types.ObjectId,
        ref: 'Departamento'
    }
});

module.exports = mongoose.model('Empleado', empleadoSchema);