const { Cliente } = require('../models');

exports.crearCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los clientes' });
    }
    
}

exports.obtenerCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        cliente ? res.json(cliente) : res.status(404).json({ message: 'Cliente no encontrado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el cliente' });
    }
    
}

exports.actualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        await cliente.update(req.body);
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.eliminarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        await cliente.destroy();
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
}
