const express = require('express');
const conexion = require('./database/db');
const crud = require('./controllers/usersController');
const router = express.Router();

router.post('/save', crud.save);
router.post('/update', crud.update);
router.get('/', crud.index)
router.get('/create', crud.create)
router.get('/delete/:id', crud.delete)
router.get('/edit/:id', crud.edit)


module.exports = router;