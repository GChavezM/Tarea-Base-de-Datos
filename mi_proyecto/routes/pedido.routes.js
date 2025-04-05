const express = require('express');
const router = express.Router();
const { crearPedido, obtenerPedidos, obtenerPedido, actualizarPedido, eliminarPedido } = require('../controllers/pedido.controller');

router.post('/pedidos', crearPedido);
router.get('/pedidos', obtenerPedidos);
router.get('/pedidos/:id', obtenerPedido);
router.put('/pedidos/:id', actualizarPedido);
router.delete('/pedidos/:id', eliminarPedido);

module.exports = router;