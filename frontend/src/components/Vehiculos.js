import React, { useForm } from 'react-hook-form';
import { useEffect, useState} from 'react';

import ListadoVehiculos from './ListadoVehiculos';
import { vehiculosService } from '../services/vehiculos.service';

/*const listaMock = [
  {
    "id": 208,
    "propietario": "Carver Denziloe",
    "vin": "JN1AZ4EH0FM395432",
    "marca": "Aston Martin",
    "modelo": "V12 Vantage",
    "year": "2012",
    "kilometros": 215988
  },
  {
    "id": 239,
    "propietario": "Carolee Yakovlev",
    "vin": "1C4RDJDG1DC163821",
    "marca": "BMW",
    "modelo": "530",
    "year": "2003",
    "kilometros": 174581
  },
  {
    "id": 33,
    "propietario": "Cart Croxall",
    "vin": "WAUFEAFM0BA902749",
    "marca": "Saab",
    "modelo": "9-3",
    "year": "2011",
    "kilometros": 148496
  },
  {
    "id": 128,
    "propietario": "Carey Galland",
    "vin": "WAUBH54B31N882762",
    "marca": "Toyota",
    "modelo": "MR2",
    "year": "2005",
    "kilometros": 198778
  },
  {
    "id": 139,
    "propietario": "Carolus Bulled",
    "vin": "JHMZF1D64ES410210",
    "marca": "Toyota",
    "modelo": "RAV4",
    "year": "2000",
    "kilometros": 172284
  }
];*/

const marcas = [
  'Acura'
  ,'Aston Martin'
  ,'Audi'
  ,'BMW'
  ,'Bentley'
  ,'Buick'
  ,'Cadillac'
  ,'Chevrolet'
  ,'Chrysler'
  ,'Dodge'
  ,'Ford'
  ,'GMC'
  ,'Holden'
  ,'Honda'
  ,'Hummer'
  ,'Hyundai'
  ,'Infiniti'
  ,'Isuzu'
  ,'Jaguar'
  ,'Jeep'
  ,'Kia'
  ,'Lamborghini'
  ,'Land Rover'
  ,'Lexus'
  ,'Lincoln'
  ,'Lotus'
  ,'Maybach'
  ,'Mazda'
  ,'Mercedes-Benz'
  ,'Mercury'
  ,'Mitsubishi'
  ,'Nissan'
  ,'Oldsmobile'
  ,'Plymouth'
  ,'Pontiac'
  ,'Porsche'
  ,'Ram'
  ,'Rolls-Royce'
  ,'Saab'
  ,'Saturn'
  ,'Subaru'
  ,'Suzuki'
  ,'Toyota'
  ,'Volkswagen'
  ,'Volvo'
];

const Vehiculo = () => {
  useEffect(() => {
    const listadoInicial = async () => {
      try {
        const response = await vehiculosService.Buscar('','','')
        setLista(response)
      }catch(err){
        console.log('Error', err)
      }
    };listadoInicial()
  }, [])

  const [lista, setLista] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try{
      const{marca,kmDesde, kmHasta} = data
      if((kmDesde && !kmHasta) || (!kmDesde && kmHasta)){
        alert('Por favor, complete tanto kmDesde y kmHasta o dejelo vacios a ambos');
        return;
      }
      if(kmDesde && kmHasta && (parseInt(kmDesde) > parseInt(kmHasta))){
        alert('Verificar que kmDesde sea menor que km hasta')
        return;
      }
      const response = await vehiculosService.Buscar(marca,kmDesde,kmHasta)
      setLista(response)
    }catch(err){
      console.log('Error', err)
    }
  };

  return (
    <div className="container">
      <h3>Formulario de Búsqueda</h3>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Marca:</label>
              <select className="form-select" {...register('marca')}>
                <option key='Todas' value="Todas">Todas</option>
                {marcas.map((marca) => ( <option key={marca} value={marca}>{marca}</option>)) }
              </select>
            </div>
            <div className="mb-3" style={ { display: 'flex' } }>
              <div style={ { flex: 1, 'margin-right': '20px' } }>
                <label className="form-label">Kilómetros desde:</label>
                <input type="text" placeholder='Kms desde...' className="form-control" {...register('kmDesde')} />
              </div>
              <div style={ { flex: 1 } }>
                <label className="form-label">Kilómetros hasta:</label>
                <input type="text" placeholder='Kms hasta...' className="form-control" {...register('kmHasta')} />
              </div>
            </div> 
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </form>
        </div>
      </div>
      <ListadoVehiculos lista={lista} />
    </div>
  );
};

export default Vehiculo;
