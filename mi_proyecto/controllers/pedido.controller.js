const { Pedido } = require('../models');

exports.crearPedido = async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
}

exports.obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);    
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos' });
    }
    
}

exports.obtenerPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pedido' });
    }
}

exports.actualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        await pedido.update(req.body);
        res.json(pedido);    
    } catch (error) {
        
        res.status(500).json({ message: 'Error al actualizar el pedido' });
    }
    
}

exports.eliminarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        await pedido.destroy();
        res.json({ message: 'Pedido eliminado' });
    } catch (error) {
        
        res.status(500).json({ message: 'Error al eliminar el pedido' });
    }
    
}
