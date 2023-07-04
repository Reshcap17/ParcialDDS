import axios from 'axios'

const urlResource = "http://localhost:3001/api/vehiculos"

async function Buscar(marca, kmDesde, kmHasta){
    const response = await axios.get(`${urlResource}/?marca=${marca}&from=${kmDesde}&to=${kmHasta}`)
    return response.data
}
export const vehiculosService = {
    Buscar
}