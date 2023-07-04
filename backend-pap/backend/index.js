const express = require('express');
const cors = require('cors');
const { Vehiculo } = require('./sequelize-init');
const app = express();

// leer archivo de configuracion
require('dotenv').config();

// para poder leer json en el body
app.use(express.json()); 

// Configuración de CORS
app.use(cors());

// Agregar aquí nueva ruta para /api/vehiculos

const vehiculosRouter = require('./routes/vehiculos')
app.use(vehiculosRouter)

// Inicio del servidor
const port = 3001;
app.listen(port, () => {
  console.log("NODE_ENV", process.env.NODE_ENV);
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;

