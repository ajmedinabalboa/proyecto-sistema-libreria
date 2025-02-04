import { Rol } from "../../models/roles.js";

export async function seedRoles() {
    const roles = ["Administrador", "Ventas", "Almacen"];

    for (const nombre of roles) {
        await Rol.findOrCreate({ where: { nombre } });
    }

    console.log("Roles predefinidos insertados correctamente.");
}