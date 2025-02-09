import { useState, useEffect } from 'react';
import { fetchCategorias, addCategoria, updateCategoria, deleteCategoria } from "../../api/ApiCategorias.js";

const CategoriasList = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoriaToEdit, setCategoriaToEdit] = useState(null); // La categoria que vamos a editar
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [descripcionCategoria, setDescripcionCategoria] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    try {
      const data = await fetchCategorias();
      setLoading(true);
      setCategorias(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Abrir y cerrar el modal cuando se haga clic en "Agregar Marca" o "Editar"
  const openModal = (categoria = null) => {
    setCategoriaToEdit(categoria);
    setNombreCategoria(categoria ? categoria.nombre_categoria : ""); // Si es edición, llenamos el campo
    setDescripcionCategoria(categoria ? categoria.descripcion_categoria : "");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCategoriaToEdit(null);
    setNombreCategoria("");
    setDescripcionCategoria("");
  };

  // Función para manejar la actualización de la marca //en espera de la api de actualizacion
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    if (!nombreCategoria.trim() || !descripcionCategoria.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    try {
      if (categoriaToEdit) {
        // Actualizar categoria existente
        const updatedCategoria = await updateCategoria(categoriaToEdit.id, nombreCategoria, descripcionCategoria);
        setCategorias(categorias.map((c) => (c.id === updatedCategoria.id ? updatedCategoria : c)));
      } else {
        // Agregar nueva categoria
        const addedCategoria = await addCategoria(nombreCategoria, descripcionCategoria);
        setCategorias([...categorias, addedCategoria]);
      }
      closeModal();
    } catch (error) {
      alert("Error al guardar la categoria");
    }
  };

  //funcion para eliminar la categoria  //en espera de la api de eliminacion
  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar esta categoria?")) {
      return;
    }
    try {
      await deleteCategoria(id);
      setCategorias(categorias.filter((categoria) => categoria.id !== id));
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo eliminar la Categoria");
    }

  };

  if (loading) { return <p>Cargando categorias...</p>; }

  if (error) { return <p>Error: {error}</p>; }

  // Implementar formato a la tabla
  return (
    <div className="card-table">
      {/* Encabezado con título y subtítulo */}
      <div className="table-header">
        <h3 className="table-title">Lista de Categorías</h3>
      </div>

      <button className="btn btn_add" onClick={() => openModal()}>
        Agregar Categoria
      </button>

      <table className="striped-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Descripcion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre_categoria}</td>
              <td>{categoria.descripcion_categoria}</td>
              <td>
                <div className="action-buttons">
                  <button className="btn btn_update" onClick={() => openModal(categoria)}>
                    Editar
                  </button>
                  <button className="btn btn_delete" onClick={() => handleDelete(categoria.id)}>
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* MODAL SOLO SE MUESTRA SI `isModalOpen` ES `true` */}
      {isModalOpen && (
        <div id="categoriaModal" className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{categoriaToEdit ? "Editar Categoria" : "Agregar Categoria"}</h3>
              <button className="close-btn" onClick={closeModal}>X</button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* ... resto del formulario ... */}
              <input
                type="text"
                value={nombreCategoria}
                onChange={(e) => setNombreCategoria(e.target.value)}
                placeholder="Nombre de la Categoria"
              />
              <textarea
                value={descripcionCategoria}
                onChange={(e) => setDescripcionCategoria(e.target.value)}
                placeholder="Descripción de la Categoría"
                rows="3" // Puedes ajustar la altura inicial
                cols="40" // Opcional: puedes definir el ancho
              />
              <button className="btn btn_save" type="submit">
                {categoriaToEdit ? "Actualizar" : "Guardar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
  // Fin de la implementación del formato de la tabla
};

export default CategoriasList;