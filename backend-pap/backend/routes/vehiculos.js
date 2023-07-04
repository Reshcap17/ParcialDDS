const express = require('express')
const router = express.Router()
const db = require('../sequelize-init')
const {Op} = require('sequelize')

router.get("/api/vehiculos", async function(req, res, next) {
    const{marca, from, to} = req.query
    let where = {}

    if(marca != undefined && marca !="" && marca != "Todas"){
        where.marca = {
            [Op.like]: marca
        }
    }
    if(from != undefined && from != "" && to != undefined && to != ""){
        where.kilometros = {
            [Op.between]: [from, to]
        }
    }
    const Pagina = req.query.Pagina ?? 1
    const TamañoPagina = 50
    
    let vehiculos = await db.Vehiculo.findAndCountAll({
        attributes:['id','propietario','vin','marca','modelo','year','kilometros'],
        order: [['marca','ASC'],['year','DESC']],
        offset:(Pagina-1) * TamañoPagina,
        limit: TamañoPagina,
        where:where
    })
    res.json(vehiculos.rows)
})
module.exports = router