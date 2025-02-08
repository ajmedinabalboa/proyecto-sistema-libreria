// ApiMarcas.js
const API_URL = "http://localhost:3002/api/proveedores";
//obtener todos las proveedores
export const fetchProveedores = async () => {
 // eslint-disable-next-line no-useless-catch
 try {
    const response = await fetch(API_URL, { headers: { "Content-Type": "application/json" }, method: "GET" });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error("No se pudieron obtener los proveedores");
  }
};
// Agregar un nuevo prveedor
export const addProveedor = async (nombre_proveedor) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre_proveedor}),
      });
      if (!response.ok) throw new Error("Error al agregar el proveedor");
      return await response.json();
    } catch (error) {
      throw new Error("No se pudo agregar el proveedor");
    }
  };
// Actualizar un proveedor
export const updateProveedor = async (id, nombre_proveedor) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre_proveedor }),
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error("No se pudo actualizar el proveedor");
  }
};

export const deleteProveedor = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Error al eliminar el proveedor");
    return true;
  } catch (error) {
    throw new Error("No se pudo eliminar el proveedor");
  }
};