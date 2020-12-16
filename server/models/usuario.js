const mongoose = require('mongoose');
const { unique } = require('underscore');
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Nombre requerido']
    },
    primer_apellido:{
        type: String,
        required: [true, 'Primer apellido requerido']
    },
    segundo_apellido:{
        type: String,
        required: [true, 'segundo apellido requerido']
    },
    edad:{
        type: Number,
        required: [true, 'Edad requerida']
    },
    curp:{
        type: String,
        required: [true, 'CURP requerida'],
        unique: true
    },
    telefono:{
        type: Number,
        required: [true, 'telefon requerido']
    },
    mail:{
        type: String,
        required: [true, 'El email es requerido'],
        unique: true
    },
    activo:{
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model('Empleado', usuarioSchema);
