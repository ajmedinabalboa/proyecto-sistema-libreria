import  { useState, useEffect } from 'react';
import { fetchCategorias, addCategoria, updateCategoria, deleteCategoria } from "../../Api/ApiCategorias.js";

const CategoriasList = () => {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoriaToEdit, setCategoriaToEdit] = useState(null); // La categoria que vamos a editar
    const [nombreCategoria, setNombreCategoria] = useState("");
    const [descripcionCategoria, setDescripcionCategoria] = useState("");

    useEffect(() => {
      cargarCategorias();
    }, []);
  
    const cargarCategorias = async () => {
      try {
        const data = await fetchCategorias();
        setCategorias(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    // Abrir y cerrar el modal
  const openModal = (categoria = null) => {
    setCategoriaToEdit(categoria);
    setNombreCategoria(categoria ? categoria.nombre_categoria : ""); // Si es edición, llenamos el campo
    setDescripcionCategoria(categoria ? categoria.descripcion_categoria : "");
    document.getElementById("categoriaModal").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("categoriaModal").style.display = "none";
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
        const addedCategoria = await addCategoria(nombreCategoria,descripcionCategoria);
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
  
    

    if (loading) {return <p>Cargando categorias...</p>; }
  
    if (error) {return <p>Error: {error}</p>;}

    return (
      <div>
        <h2>Lista de Categorias</h2>
        <button className="btn_add" onClick={() => openModal()}>Agregar Categoria</button>
        <br></br>
         <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoria</th>
                <th>Descripcion</th>
                <th >Accion</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((categoria) => (
                <tr key={categoria.id}>
                  <td>{categoria.id}</td>
                  <td>{categoria.nombre_categoria}</td>
                  <td>{categoria.descripcion_categoria}</td>
                  <td>
                    <button className ="btn_update" type="button" onClick={() => openModal(categoria)}>Editar</button>
                    <button className ="btn_delete" type="button" onClick={() => handleDelete(categoria.id)}>Eliminar</button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table> 
          {/* Modal para agregar/editar marcas */}
      <div id="categoriaModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{categoriaToEdit ? "Editar Categoria" : "Agregar Categoria"}</h3>
            <button className="close-btn" onClick={closeModal}>X</button>
          </div>
          <form onSubmit={handleSubmit}>
            <br />
            
            
            <input
              type="text"
              value={nombreCategoria}
              onChange={(e) => setNombreCategoria(e.target.value)}
              placeholder="Nombre de la Categoria"
            />
            <br />
            <br />
            <textarea
            value={descripcionCategoria}
            onChange={(e) => setDescripcionCategoria(e.target.value)}
            placeholder="Descripción de la Categoría"
            rows="4" // Puedes ajustar la altura inicial
            cols="40" // Opcional: puedes definir el ancho
            />
            <br />
           
            <button className="btn_save" type="submit">{categoriaToEdit ? "Actualizar" : "Guardar"}</button>
          </form>
        </div>
      </div>
     
      </div>
    );
  };
  
  export default CategoriasList;
  
  