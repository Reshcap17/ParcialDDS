const BaseRepository = require('./baseRepository');
const Vehiculo = require('../models/vehiculos');

class VehiculoRepository extends BaseRepository {
    constructor() {
        super(Vehiculo);
    }
    // Agregar aquí métodos de consulta con filtros
}

module.exports = new VehiculoRepository();
