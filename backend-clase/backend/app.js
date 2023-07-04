const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./bbdd');
const logger = require('./middleware/requestLogger');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

// Routers
const serverStatusRouter = require('./routers/server-status.router');

// Config y Server
dotenv.config({ path: './config/.env' });
const app = express();

app.use(cors());

// Requerido para interpretar el body de los request como objetos JSON
app.use(express.json());
// Para tomar el valor del form
// app.use(express.urlencoded({ extended: true }));

// Logs
if (process.env.LOG === 'true') {
    app.use(logger);
}

app
    .use('/server-status', serverStatusRouter);

app
    .use(errorHandler)
    .use(notFound);

async function start() {
    const PORT = process.env.PORT || 3001;

    try {
        // Probar la conexión
        await sequelize.authenticate();

        console.log('Base de Datos conectada y sincronizada...');
    }
    catch (error) {
        console.error('Error en la conexión a la base de datos: ', error);
    }

    app.listen(PORT, () => {
        console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
    });
}

start();

module.exports = app;
