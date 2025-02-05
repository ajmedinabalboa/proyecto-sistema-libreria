import { Categoria } from "../../models/categorias.js";

export async function add_categorias() {
    const categoriaList = [
        {
            nombre_categoria: "Libros",
            descripcion_categoria: "Categoria libros"
        },
        {
            nombre_categoria: "Papeleria",
            descripcion_categoria: "Categoria paleria"
        }
    ]

    for (const categoria of categoriaList) {
        await Categoria.findOrCreate({ where: { nombre_categoria: categoria.nombre_categoria }, defaults: categoria });
    }
};
