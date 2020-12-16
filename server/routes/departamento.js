const express = require('express');
const _ = require('underscore');
const departamento = require('../models/departamento');
const app = express();
const Departamento = require('../models/departamento');

app.get('/departamento', (req, res) => {
    let desde = req.query.desde || 0;
    let hasta = req.query.hasta || 10;

    Departamento.find({})
    .skip(Number(desde))
    .limit(Number(hasta))
    .populate('Empleado', 'nombre_del_puesto numero_empleados extension_telefonica activo')
    .exec((err, departamentos) => {
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
            conteo: departamentos.length,
            departamentos
        });
    });
});

app.post('/departamento', (res, req) =>{
    let dep = new Departamento({
        nombre: req.body.nombre,
        numero_empleados: req.body.numero_empleados,
        extension_telefonica: req.body.extension_telefonica,
        activo: req.body.activo,
        id_jefe_de_area: req.body.id_jefe_de_area
    });
    dep.save((err, depDB) => {
        if(err){
            return res.status(400).json({
                ok: false,
                msg: 'error se debe insertar un departamento',
                err
            });
        }
        res.json({
            ok: true,
            msg: 'Departamentos listados con exito',
            depDB
        });
    });
});

app.put('/departamento/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body,['nombre', 'numero_empleados', 'extension_telefonica']);

    Departamento.findByIdAndUpdate(id, body, {new: true, runValidators: true, context: 'query'},
    (err, depDB)=> {
        if(err){
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error al momento de actualizar',
                err
            });
        }
        res.json({
            ok: true,
            msg: 'El departamento se actualizo',
            depDB
        });
    });
});

app.delete('/departamento/:id', function(req, res){
    let id = req.params.id;
    Departamento. findByIdAndUpdate(id, {activo: false}, {runValidators: true, context: 'query'},
    (err, depDB)=> {
        if(err){
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error al momento de eliminarlo',
                err
            });
        }
        res.json({
            ok: true,
            msg: 'El departamento se elimino',
            depDB
        });
    });
});

module.exports = app;