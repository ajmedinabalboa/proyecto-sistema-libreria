const API_URL = "http://localhost:3001/api/materiales";

export const fetchAllMaterials = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener materiales");
  return response.json();
};

export const getMaterialById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Error al obtener el material");
  return response.json();
};

export const createMaterial = async (material) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  });
  if (!response.ok) throw new Error("Error al crear el material");
  return response.json();
};

export const updateMaterial = async (id, material) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  });
  if (!response.ok) throw new Error("Error al actualizar el material");
  return response.json();
};

export const deleteMaterial = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar el material");
};