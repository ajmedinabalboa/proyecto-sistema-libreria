import  { useState, useEffect } from 'react';
import { fetchMarcas, addMarca, updateMarca, deleteMarca } from '../../api/ApiMarcas.js'

const MarcasList = () => {
    const [marcas, setMarcas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [marcaToEdit, setMarcaToEdit] = useState(null); // La marca que vamos a editar
   
    const [nombreMarca, setNombreMarca] = useState("");

    useEffect(() => {
      cargarMarcas();
    }, []);
 
    const cargarMarcas = async () => {
      try {
        const data = await fetchMarcas();
        setMarcas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }; 
    // Abrir y cerrar el modal
  const openModal = (marca = null) => {
    setMarcaToEdit(marca);
    setNombreMarca(marca ? marca.nombre_marca : ""); // Si es edición, llenamos el campo
    document.getElementById("marcaModal").style.display = "block";
  };
  const closeModal = () => {
    document.getElementById("marcaModal").style.display = "none";
    setMarcaToEdit(null);
    setNombreMarca("");
  };
    // Función para manejar la actualización de la marca
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    if (!nombreMarca.trim()) {
      alert("El nombre de la marca no puede estar vacío.");
      return;
    }

    try {
      if (marcaToEdit) {
        // Actualizar marca existente
        const updatedMarca = await updateMarca(marcaToEdit.id, nombreMarca);
        setMarcas(marcas.map((m) => (m.id === updatedMarca.id ? updatedMarca : m)));
      } else {
        // Agregar nueva marca
        const addedMarca = await addMarca(nombreMarca);
        setMarcas([...marcas, addedMarca]);
      }
      closeModal();
    } catch (error) {
      alert("Error al guardar la marca");
    }
  };
  //funcion para eliminar la marca
    const handleDelete = async (id) => {
      if (!window.confirm("¿Estás seguro de que quieres eliminar esta marca?")) {
        return;
      }
      try {
        await deleteMarca(id);
        setMarcas(marcas.filter((marca) => marca.id !== id));
      } catch (error) {
        console.error("Error:", error);
        alert("No se pudo eliminar la marca");
      }
      
    };
    if (loading) {return <p>Cargando marcas...</p>; }
    if (error) {return <p>Error: {error}</p>;}


    // Implementar formato a la tabla
    return (
        <div className="card-table">
          {/* Encabezado con título y subtítulo */}
          <div className="table-header">
            <h3 className="table-title">Lista de Marcas</h3>
          </div>
      
          <button className="btn btn_add" onClick={() => openModal()}>
            Agregar Marca
          </button>
          
          <table className="striped-table">
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
                    <div className="action-buttons">
                      <button className="btn btn_update" onClick={() => openModal(marca)}>
                        Editar
                      </button>
                      <button className="btn btn_delete" onClick={() => handleDelete(marca.id)}>
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div id="marcaModal" className="modal-overlay"> 
            <div className="modal-content">
               <div className="modal-header">
                  <h3>{marcaToEdit ? "Editar Marca" : "Agregar Marca"}</h3>
                  <button className="close-btn" onClick={closeModal}>X</button>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={nombreMarca}
                onChange={(e) => setNombreMarca(e.target.value)}
                placeholder="Nombre de la marca"
                style={{width: '100%', margin: '10px 0', padding: '8px'}}
              />
              <button className="btn btn_save" type="submit">
                {marcaToEdit ? "Actualizar" : "Guardar"}
              </button>
            </form>
          </div>
        </div>
      </div>
      );
// Fin de la implementación del formato de la tabla
  };
  export default MarcasList;