import { useState, useEffect } from "react";
import { createMaterial, updateMaterial, getMaterialById } from "../../api/ApiMaterial.js";
import { fetchCategorias } from "../../api/ApiCategorias.js";
import { fetchMarcas } from "../../api/ApiMarcas.js";
import { fetchUnidades } from "../../api/ApiUnidadesMedidas.js";
import { fetchProveedores } from "../../api/ApiProveedores.js";

const ModalMaterialForm = ({ isOpen, onClose, materialId, onSuccess }) => {
  const initialState = {
    nombre_material: "",
    descripcion_material: "",
    precio_unitario: "",
    stock_actual: "",
    stock_minimo: "",
    id_categoria: "",
    id_marca: "",
    id_unidadmedida: "",
    id_proveedor: "",
  };

  const [material, setMaterial] = useState(initialState);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [units, setUnits] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    if (materialId) {
      getMaterialById(materialId)
        .then((data) => setMaterial(data))
        .catch(() => showMessage("Error al cargar el material", "error"));
    } else {
      setMaterial(initialState);
    }

    fetchData(); // Cargar categorías, marcas, unidades y proveedores
  }, [materialId]);

  const fetchData = async () => {
    try {
      const [categoriesData, brandsData, unitsData, providersData] = await Promise.all([
        fetchCategorias(),
        fetchMarcas(),
        fetchUnidades(),
        fetchProveedores(),
      ]);
      setCategories(categoriesData);
      setBrands(brandsData);
      setUnits(unitsData);
      setProviders(providersData);
    } catch {
      showMessage("Error al cargar datos de referencia", "error");
    }
  };

  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
  };

  const handleChange = (e) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (materialId) {
        await updateMaterial(materialId, material);
        //showMessage("Material actualizado con éxito");
      } else {
        await createMaterial(material);
        //showMessage("Material creado con éxito");
      }
      onSuccess(); // Actualizar la lista
      onClose(); // Cerrar el modal
    } catch {
      showMessage("Error al guardar el material", "error");
    }
  };

  return isOpen ? (
    <div className="modal-material-overlay">
      <div className="modal-material-content">
      <div className="modal-material-header">
        <h2>{materialId ? "Editar Material" : "Nuevo Material"}</h2>
        <button className="close-btn" onClick={onClose}>X</button>
       </div>
       {message.text && <p className={message.type}>{message.text}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre_material" value={material.nombre_material} onChange={handleChange} placeholder="Nombre" required />
          <textarea name="descripcion_material" value={material.descripcion_material} onChange={handleChange} placeholder="Descripción"></textarea>
          <div className="price-stock-container">
          <input  type="number" name="precio_unitario" value={material.precio_unitario} onChange={handleChange} placeholder="Precio" required />
          <input  type="number" name="stock_actual" value={material.stock_actual} onChange={handleChange} placeholder="Stock Actual" required />
          <input  type="number" name="stock_minimo" value={material.stock_minimo} onChange={handleChange} placeholder="Stock Mínimo" required />
          </div>
          <select name="id_categoria" value={material.id_categoria} onChange={handleChange} required>
            <option value="">Seleccionar Categoría</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.nombre_categoria}</option>
            ))}
          </select>

          <select name="id_marca" value={material.id_marca} onChange={handleChange} required>
            <option value="">Seleccionar Marca</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>{brand.nombre_marca}</option>
            ))}
          </select>

          <select name="id_unidadmedida" value={material.id_unidadmedida} onChange={handleChange} required>
            <option value="">Seleccionar Unidad de Medida</option>
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>{unit.nombre_unidadmedida}</option>
            ))}
          </select>

          <select name="id_proveedor" value={material.id_proveedor} onChange={handleChange} required>
            <option value="">Seleccionar Proveedor</option>
            {providers.map((prov) => (
              <option key={prov.id} value={prov.id}>{prov.nombre_proveedor}</option>
            ))}
          </select>
          <button className="btn btn_save" type="submit">{materialId ? "Actualizar" : "Crear"}</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default ModalMaterialForm;