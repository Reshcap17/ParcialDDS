const { Model, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');

class Vehiculo extends Model {
}

Vehiculo.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    propietario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    vin: {
        field: 'numero_vin',
        type: DataTypes.TEXT,
        allowNull: false
    },
    marca: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    modelo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    kilometros: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'vehiculos',
    timestamps: false
});

module.exports = Vehiculo;
