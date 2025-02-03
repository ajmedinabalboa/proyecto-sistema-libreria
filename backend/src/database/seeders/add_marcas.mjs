import { Marca } from "../../models/marcas.js";

export async function add_marcas() {
    const marcasList = ["Faber-Castell", "PrimsaColor"]

    for (const nombre_marca of marcasList) {
        await Marca.findOrCreate({ where: { nombre_marca } });
    }
};
