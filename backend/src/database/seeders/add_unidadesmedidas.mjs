import { UnidadMedida } from "../../models/unidadesmedidas.js";

export async function add_unidadesmedidas() {
    const unidadesmedidasList = ["Caja", "Paquete", "Hoja", "Resma", "Unidad"]

    for (const nombre_unidadmedida of unidadesmedidasList) {
        await UnidadMedida.findOrCreate({ where: { nombre_unidadmedida } });
    }
};
