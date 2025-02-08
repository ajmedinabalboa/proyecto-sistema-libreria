import { useState, useEffect } from "react";
import { fetchAllMaterials, deleteMaterial} from "../../api/ApiMaterial.js";
import ModalMaterial from "../Modals/ModalMaterial.jsx"; // Asegúrate de que la ruta sea correcta

const MaterialList = () => {
  const [materialsList, setMaterialsList] = useState([]); // Lista de materiales
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura del modal
  const [selectedMaterialId, setSelectedMaterialId] = useState(null); // ID del material seleccionado para editar

  
  // Cargar lista de materiales
  useEffect(() => {
    fetchMaterialsList();
  }, []);

  const fetchMaterialsList = async () => {
    try {
      const materialsData = await fetchAllMaterials(); // Función para obtener todos los materiales
      setMaterialsList(materialsData);
    } catch {
      console.error("Error al cargar lista de materiales");
    }
  };

  const handleEdit = (materialId) => {
    setSelectedMaterialId(materialId);
    setIsModalOpen(true); // Abrir el modal para editar
  };

  const handleAddNewMaterial = () => {
    setSelectedMaterialId(null); // No hay material seleccionado, es para agregar uno nuevo
    setIsModalOpen(true); // Abrir el modal para agregar
  };
  
  const handleDelete = async (materialId) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este material?"
    );
    if (confirmDelete) {
      try {
        await deleteMaterial(materialId); // Llama a la API para eliminar el material
        fetchMaterialsList(); // Actualiza la lista de materiales
        
      } catch (error) {
        console.error("Error al eliminar el material:", error);
        alert("Hubo un error al intentar eliminar el material");
      }
    }
  };
  return (
    <div className="form-material">
      <h3>Lista de Materiales</h3>
      
      {/* Botón para agregar un nuevo material */}
      <button  className="btn btn_add" onClick={handleAddNewMaterial}>
        Agregar Nuevo Material
      </button>
      <table className="striped-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio Unitario</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {materialsList.map((mat) => (
            <tr key={mat.id}>
              <td>{mat.id}</td>
              <td>{mat.nombre_material}</td>
              <td>{mat.descripcion_material}</td>
              <td>{mat.precio_unitario}</td>
              <td>
                <button className="btn btn_update" onClick={() => handleEdit(mat.id)}>
                  Editar
                </button>
                <button className="btn btn_delete" onClick={() => handleDelete(mat.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para crear o editar material */}
      <ModalMaterial
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Cerrar el modal
        materialId={selectedMaterialId} // Pasar el ID del material (si es editar)
        onSuccess={() => {
          fetchMaterialsList(); // Actualizar la lista de materiales después de agregar o editar
          setIsModalOpen(false); // Cerrar el modal
        }}
      />
    </div>
  );
};

export default MaterialList;