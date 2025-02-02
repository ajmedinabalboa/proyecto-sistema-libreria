import { Rol } from "../../models/Rol.js";

export async function seedRoles() {
    const roles = ["Administrador", "Profesor", "Almacén"];

    for (const nombre of roles) {
        await Rol.findOrCreate({ where: { nombre } });
    }

    console.log("Roles predefinidos insertados correctamente.");
}