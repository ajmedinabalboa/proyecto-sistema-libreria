import  { useState, useEffect } from 'react';
import { fetchUnidades, addUnidad, updateUnidad, deleteUnidad } from '../../api/ApiUnidadesMedidas.js'

const UnidadesList = () => {
    const [unidades, setUnidades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [unidadToEdit, setUnidadToEdit] = useState(null); // La marca que vamos a editar
   
    const [nombreUnidad, setNombreUnidad] = useState("");

    useEffect(() => {
      cargarUnidades();
    }, []);
 
    const cargarUnidades = async () => {
      try {
        const data = await fetchUnidades();
        setUnidades(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }; 
    // Abrir y cerrar el modal
  const openModal = (unidad = null) => {
    setUnidadToEdit(unidad);
    setNombreUnidad(unidad ? unidad.nombre_unidadmedida : ""); // Si es edición, llenamos el campo
    document.getElementById("marcaModal").style.display = "block";
  };
  const closeModal = () => {
    document.getElementById("marcaModal").style.display = "none";
    setUnidadToEdit(null);
    setNombreUnidad("");
  };
    // Función para manejar la actualización de la marca
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    if (!nombreUnidad.trim()) {
      alert("El nombre de la Unidad de Medida no puede estar vacío.");
      return;
    }

    try {
      if (unidadToEdit) {
        // Actualizar marca existente
        const updatedUnidad = await updateUnidad(unidadToEdit.id, nombreUnidad);
        setUnidades(unidades.map((u) => (u.id === updatedUnidad.id ? updatedUnidad : u)));
      } else {
        // Agregar nueva marca
        const addedUnidad = await addUnidad(nombreUnidad);
        setUnidades([...unidades, addedUnidad]);
      }
      closeModal();
    } catch (error) {
      alert("Error al guardar la Unidad de Medida");
    }
  };
  //funcion para eliminar la unidad de medida
    const handleDelete = async (id) => {
      if (!window.confirm("¿Estás seguro de que quieres eliminar esta Unidad de Medida?")) {
        return;
      }
      try {
        await deleteUnidad(id);
        setUnidades(unidades.filter((unidad) => unidad.id !== id));
      } catch (error) {
        console.error("Error:", error);
        alert("No se pudo eliminar la Unidad de Medida");
      }
      
    };
    if (loading) {return <p>Cargando unidades de medida...</p>; }
    if (error) {return <p>Error: {error}</p>;}


    // Implementar formato a la tabla
    return (
        <div className="card-table">
          {/* Encabezado con título y subtítulo */}
          <div className="table-header">
            <h3 className="table-title">Lista de Unidades de Medida</h3>
          </div>
      
          <button className="btn btn_add" onClick={() => openModal()}>
            Agregar UnidadMedida
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
             {unidades.map((unidad) => (
                <tr key={unidad.id}>
                  <td>{unidad.id}</td>
                  <td>{unidad.nombre_unidadmedida}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn btn_update" onClick={() => openModal(unidad)}>
                        Editar
                      </button>
                      <button className="btn btn_delete" onClick={() => handleDelete(unidad.id)}>
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
      <h3>{unidadToEdit ? "Editar Unidad de Medida" : "Agregar Unidad de Medida"}</h3>
      <button className="close-btn" onClick={closeModal}>X</button>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={nombreUnidad}
                onChange={(e) => setNombreUnidad(e.target.value)}
                placeholder="Nombre de la Unidad de Medida"
                style={{width: '100%', margin: '10px 0', padding: '8px'}}
              />
              <button className="btn btn_save" type="submit">
                {unidadToEdit ? "Actualizar" : "Guardar"}
              </button>
            </form>
          </div>
        </div>
      </div>
      );
// Fin de la implementación del formato de la tabla
  };
  export default UnidadesList;