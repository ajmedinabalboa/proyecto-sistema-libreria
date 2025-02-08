import  { useState, useEffect } from 'react';
import { fetchProveedores, addProveedor, updateProveedor, deleteProveedor } from '../../api/ApiProveedores.js'

const ProveedoresList = () => {
    const [proveedores, setProveedores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [proveedorToEdit, setProveedorToEdit] = useState(null); // La marca que vamos a editar
   
    const [nombreProveedor, setNombreProveedor] = useState("");

    useEffect(() => {
      cargarProveedores();
    }, []);
 
    const cargarProveedores = async () => {
      try {
        const data = await fetchProveedores();
        setProveedores(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }; 
    // Abrir y cerrar el modal
  const openModal = (proveedor = null) => {
    setProveedorToEdit(proveedor);
    setNombreProveedor(proveedor ? proveedor.nombre_proveedor : ""); // Si es edición, llenamos el campo
    document.getElementById("marcaModal").style.display = "block";
  };
  const closeModal = () => {
    document.getElementById("marcaModal").style.display = "none";
    setProveedorToEdit(null);
    setNombreProveedor("");
  };
    // Función para manejar la actualización del Proveedor
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    if (!nombreProveedor.trim()) {
      alert("El nombre del Proveedor no puede estar vacío.");
      return;
    }

    try {
      if (proveedorToEdit) {
        // Actualizar marca existente
        const updatedProveedor = await updateProveedor(proveedorToEdit.id, nombreProveedor);
        setProveedores(proveedores.map((p) => (p.id === updatedProveedor.id ? updatedProveedor : p)));
      } else {
        // Agregar nuevo proveedor
        const addedProveedor = await addProveedor(nombreProveedor);
        setProveedores([...proveedores, addedProveedor]);
      }
      closeModal();
    } catch (error) {
      alert("Error al guardar Proveedor");
    }
  };
  //funcion para eliminar la unidad de medida
    const handleDelete = async (id) => {
      if (!window.confirm("¿Estás seguro de que quieres eliminar este Proveedor?")) {
        return;
      }
      try {
        await deleteProveedor(id);
        setProveedores(proveedores.filter((proveedor) => proveedor.id !== id));
      } catch (error) {
        console.error("Error:", error);
        alert("No se pudo eliminar el Proveedor");
      }
      
    };
    if (loading) {return <p>Cargando proveedores...</p>; }
    if (error) {return <p>Error: {error}</p>;}


    // Implementar formato a la tabla
    return (
        <div className="card-table">
          {/* Encabezado con título y subtítulo */}
          <div className="table-header">
            <h3 className="table-title">Lista de Proveedores</h3>
          </div>
      
          <button className="btn btn_add" onClick={() => openModal()}>
            Agregar Proveedor
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
             {proveedores.map((proveedor) => (
                <tr key={proveedor.id}>
                  <td>{proveedor.id}</td>
                  <td>{proveedor.nombre_proveedor}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn btn_update" onClick={() => openModal(proveedor)}>
                        Editar
                      </button>
                      <button className="btn btn_delete" onClick={() => handleDelete(proveedor.id)}>
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
                    <h3>{proveedorToEdit ? "Editar Proveedor" : "Agregar Proveedor"}</h3>
                    <button className="close-btn" onClick={closeModal}>X</button>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={nombreProveedor}
                onChange={(e) => setNombreProveedor(e.target.value)}
                placeholder="Nombre del Proveedor"
                style={{width: '100%', margin: '10px 0', padding: '8px'}}
              />
              <button className="btn btn_save" type="submit">
                {proveedorToEdit ? "Actualizar" : "Guardar"}
              </button>
            </form>
          </div>
        </div>
      </div>
      );
// Fin de la implementación del formato de la tabla
  };
  export default ProveedoresList;