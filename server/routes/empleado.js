const express = require('express');
const _ = require('underscore');
const departamento = require('../models/departamento');
const app = express();
const Empleado = require('../models/empleado');

app.get('/empleado', (req, res) => {
    let desde = req.query.desde || 0;
    let hasta = req.query.hasta || 10;

    Empleado.find({})
    .skip(Number(desde))
    .limit(Number(hasta))
    .populate('Usuario', 'nombre primer_apellido segundo apellido')
    .populate('Departamento', 'nombre_del_puesto numero_empleados extension_telefonica activo')
    .exec((err, empleados) => {
        if(err){
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un grave error en la lista de departamentos',
                err
            });
        }
        res.json({
            ok: true,
            msg: 'Departamentos listados con exito',
            conteo: empleados.length,
            empleados
        });
    });
});
