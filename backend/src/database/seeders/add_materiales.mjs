import { Material } from "../../models/materiales.js";

export async function add_materiales() {
    const materiales = [
        {
            nombre_material: "Esopo",
            descripcion_material: "Descripcion del material Esopo",
            precio_unitario: 25.00,
            stock_actual: 0,
            stock_minimo: 5,
            fecha_creacion: new Date(),
            id_categoria: 1,
            id_marca: 1,
            id_unidadmedida: 1,
            id_proveedor: 1
        },
        {
            nombre_material: "Alborada",
            descripcion_material: "Descripcion del material Alborada",
            precio_unitario: 40.00,
            stock_actual: 0,
            stock_minimo: 5,
            fecha_creacion: new Date(),
            id_categoria: 1,
            id_marca: 1,
            id_unidadmedida: 1,
            id_proveedor: 1
        }
    ];

    for (const material of materiales) {
        await Material.findOrCreate({ where: { nombre_material: material.nombre_material }, nombre_material: material.nombre_material });
    }
}