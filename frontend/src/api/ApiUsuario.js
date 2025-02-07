const API_URL = "https://localhost:3002/api/usuarios";

export const loginUsuario = async (formData) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error("Usuario o contraseña incorrectos");
        }

        return await response.json(); // Retorna el token y el usuario con su rol
    } catch (error) {
        throw error;
    }
};