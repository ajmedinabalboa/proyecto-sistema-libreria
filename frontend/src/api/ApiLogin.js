const API_URL = "http://localhost:3002";

export const loginUsuario = async (email,contraseña) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, contraseña })
        });

        if (!response.ok) {
            throw new Error("Usuario o contraseña incorrectos");
        }
        const data = await response.json(); // Retorna el token y el usuario con su rol
        console.log("Datos recibidos:", data); // Para depuración
        return data; // Devuelve el token y el usuario
    } catch (error) {
        console.error("Error en loginUsuario:", error.message);
        throw error;
    }
};
