import { Proveedor } from "../../models/proveedores.js";

export async function add_proveedores() {
    const proveedores = ["La Papelera S.R.L", "Import. Export. La Selva"]
    for (const nombre_proveedor of proveedores) {
        await Proveedor.findOrCreate({ where: { nombre_proveedor } })
    }
};

