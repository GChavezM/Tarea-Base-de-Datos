const Pedido = require('../models/pedido');

exports.crearPedido = async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        const pedidoGuardado = await nuevoPedido.save();
        res.status(201).json(pedidoGuardado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find().populate('cliente_id');
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.obtenerPedidoPorId = async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id).populate('cliente_id');
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.actualizarPedido = async (req, res) => {
    try {
        
        const pedidoActualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pedidoActualizado) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.status(200).json(pedidoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });        
    }
}

exports.eliminarPedido = async (req, res) => {
    try {
        const pedidoEliminado = await Pedido.findByIdAndDelete(req.params.id);
        if (!pedidoEliminado) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json({ message: 'Pedido eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
