import { Material } from "../../models/materiales.js";
import { Categoria } from "../../models/categorias.js";
import { Marca } from "../../models/marcas.js";
import { UnidadMedida } from "../../models/unidadesmedidas.js";
import { Proveedor } from "../../models/proveedores.js";

export async function add_materiales() {
    const categoria = await Categoria.findOne(); // Obtiene la primera categoría
    const marca = await Marca.findOne();
    const unidadmedida = await UnidadMedida.findOne();
    const proveedor = await Proveedor.findOne();

    if (!categoria || !marca || !unidadmedida || !proveedor) {
        console.error("⚠️ No hay datos en una de las tablas dependientes.");
        return;
    }

    const materiales = [
        {
            nombre_material: "Esopo",
            descripcion_material: "Descripcion del material Esopo",
            precio_unitario: 25.00,
            stock_actual: 0,
            stock_minimo: 5,
            fecha_creacion: new Date(),
            id_categoria: categoria.id,
            id_marca: marca.id,
            id_unidadmedida: unidadmedida.id,
            id_proveedor: proveedor.id
        },
        {
            nombre_material: "Alborada",
            descripcion_material: "Descripcion del material Alborada",
            precio_unitario: 40.00,
            stock_actual: 0,
            stock_minimo: 5,
            fecha_creacion: new Date(),
            id_categoria: categoria.id,
            id_marca: marca.id,
            id_unidadmedida: unidadmedida.id,
            id_proveedor: proveedor.id
        }
    ];

    for (const material of materiales) {
        await Material.findOrCreate({ where: { nombre_material: material.nombre_material }, defaults: material });
    }
}