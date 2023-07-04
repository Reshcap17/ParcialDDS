const appExpress = require('express');

const serverStatusRouter = appExpress.Router();

serverStatusRouter.get('/ping', (req, res) => {
    res.json({ response: 'Ok' });
});

serverStatusRouter.get('/echo/:cadena', (req, res) => {
    const { cadena } = req.params;
    res.json(`{ respuesta: '${cadena} ${cadena}' }`);
});

module.exports = serverStatusRouter;
