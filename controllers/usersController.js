//Invocamos a la conexion de la DB
const conexion = require('../database/db');
const userModel = require('../models/usersModel');

//OBTENER TODOS LOS REGISTROS DE LA DDBB
exports.index = (req, res) => {
    userModel.obtener(conexion, (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index.ejs', { results: results });
        }
    })
}

//REDIRIJO A LA VISTA "CREATE"
exports.create = (req, res) => {
    res.render('create');
}

//AGREGA UN REGISTRO A LA DDBB
exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    userModel.guardar(conexion, { user, rol }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            //console.log(results);
            //setTimeout(() => res.redirect('/'), 200)
            res.redirect('/');
        }
    });
};
exports.edit = (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?', id, (error, results) => {
        if (error) {
            throw error;
        } else {
            //console.log('los resultados son:' + results)
            res.render('edit', { user: results[0] });
        }
    });
}

exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    //userModel.actualizar(conexion, [user, rol, id], (error, results) => {
    userModel.actualizar(conexion, [{ user: user, rol: rol }, id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    console.log("ID:" + id)
    userModel.eliminar(conexion, id, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    })
}

