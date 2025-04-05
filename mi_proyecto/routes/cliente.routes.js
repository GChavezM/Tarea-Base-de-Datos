const express = require('express');
const router = express.Router();
const { obtenerClientes, obtenerCliente, crearCliente, actualizarCliente, eliminarCliente } = require('../controllers/cliente.controller');

router.get('/clientes', obtenerClientes);
router.get('/clientes/:id', obtenerCliente);
router.post('/clientes', crearCliente);
router.put('/clientes/:id', actualizarCliente);
router.delete('clientes/:id', eliminarCliente);


module.exports = router;