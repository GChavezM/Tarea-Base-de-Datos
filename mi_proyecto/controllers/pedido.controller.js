const { Pedido } = require('../models');

exports.crearPedido = async (req, res) => {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
}

exports.obtenerPedidos = async (req, res) => {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
}

exports.obtenerPedido = async (req, res) => {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
        return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.json(pedido);
}

exports.actualizarPedido = async (req, res) => {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
        return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    await pedido.update(req.body);
    res.json(pedido);
}

exports.eliminarPedido = async (req, res) => {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
        return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    await pedido.destroy();
    res.status(204).send();
}
