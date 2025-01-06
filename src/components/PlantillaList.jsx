import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlantillaList = () => {
  const [plantillas, setPlantillas] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlantillas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/plantillas');
        setPlantillas(response.data);
      } catch (err) {
        console.error(err);
        setError('Error fetching plantillas');
      }
    };

    fetchPlantillas();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Plantillas</h1>
      {plantillas.length === 0 ? (
        <p>No hay plantillas disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plantillas.map((plantilla) => (
            <div
              key={plantilla.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{plantilla.nombre}</h2>
              <p className="text-gray-600">{plantilla.descripcion}</p>
              <p className="text-green-500 font-bold">${plantilla.precio}</p>
              <p className="text-sm text-gray-500">{plantilla.categoria}</p>
              <a
                href={plantilla.urlVistaPrevia}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Vista Previa
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlantillaList;