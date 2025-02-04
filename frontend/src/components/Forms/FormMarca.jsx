import  { useState, useEffect } from 'react';


const MarcasList = () => {
    const [marcas, setMarcas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMarcas = async () => {
        try {
          const headers = { 'Content-Type': 'application/json' }
          const response = await fetch('http://localhost:3002/api/marcas',  { headers } );
          
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          setMarcas(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMarcas();
    }, []);
  
    if (loading) {
      return <p>Cargando marcas...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
    return (
      <div>
        <h2>Lista de Marcas</h2>
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripcion</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {marcas.map((marca) => (
                <tr key={marca.id}>
                  <td>{marca.id}</td>
                  <td>{marca.nombre_marca}</td>
                  <td>
                    <button>Eliminar</button>
                    <button>Actualizar</button>   
                    <button>Ver Detalles</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>    
      </div>
    );
  };
  
  export default MarcasList;
  
  