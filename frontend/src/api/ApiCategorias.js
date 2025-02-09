// ApiCategorias.js
const API_URL = "http://localhost:3001/api/categorias";
//obtener todas las marcas
export const fetchCategorias = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(API_URL, { headers: { "Content-Type": "application/json" }, method: "GET" });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error("No se pudieron obtener las categorias");
  }
};
// Agregar una nueva marca
export const addCategoria = async (nombre_categoria, descripcion_categoria) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre_categoria, descripcion_categoria }),
    });
    if (!response.ok) throw new Error("Error al agregar la Categoria");
    return await response.json();
  } catch (error) {
    throw new Error("No se pudo agregar la Categoria");
  }
};
// Actualizar una marca
export const updateCategoria = async (id, nombre_categoria, descripcion_categoria) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre_categoria, descripcion_categoria }),
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error("No se pudo actualizar la categoria");
  }
};

export const deleteCategoria = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Error al eliminar la Categoria");
    return true;
  } catch (error) {
    throw new Error("No se pudo eliminar la Categoria");
  }
};