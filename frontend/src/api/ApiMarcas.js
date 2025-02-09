// ApiMarcas.js
const API_URL = "http://localhost:3001/api/marcas";
//obtener todas las marcas
export const fetchMarcas = async () => {
 // eslint-disable-next-line no-useless-catch
 try {
    const response = await fetch(API_URL, { headers: { "Content-Type": "application/json" }, method: "GET" });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error("No se pudieron obtener las marcas");
  }
};
// Agregar una nueva marca
export const addMarca = async (nombre_marca) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre_marca }),
      });
      if (!response.ok) throw new Error("Error al agregar la marca");
      return await response.json();
    } catch (error) {
      throw new Error("No se pudo agregar la marca");
    }
  };
// Actualizar una marca
export const updateMarca = async (id, nombre_marca) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre_marca }),
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error("No se pudo actualizar la marca");
  }
};

export const deleteMarca = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Error al eliminar la marca");
    return true;
  } catch (error) {
    throw new Error("No se pudo eliminar la marca");
  }
};