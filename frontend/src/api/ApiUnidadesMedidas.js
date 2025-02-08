// ApiMarcas.js
const API_URL = "http://localhost:3001/api/unidadesmedidas";
//obtener todas las marcas
export const fetchUnidades = async () => {
 // eslint-disable-next-line no-useless-catch
 try {
    const response = await fetch(API_URL, { headers: { "Content-Type": "application/json" }, method: "GET" });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error("No se pudieron obtener las Unidades de Medida");
  }
};
// Agregar una nueva marca
export const addUnidad = async (nombre_unidadmedida) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre_unidadmedida}),
      });
      if (!response.ok) throw new Error("Error al agregar la Unidade de Medida");
      return await response.json();
    } catch (error) {
      throw new Error("No se pudo agregar la Unidad de Medida");
    }
  };
// Actualizar una marca
export const updateUnidad = async (id, nombre_unidadmedida) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre_unidadmedida }),
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error("No se pudo actualizar la Unidad de Medida");
  }
};

export const deleteUnidad = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Error al eliminar la Unidad de Medida");
    return true;
  } catch (error) {
    throw new Error("No se pudo eliminar la Unidad de Medida");
  }
};