const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use(express.json());

app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/pedidos', require('./routes/pedidos'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
