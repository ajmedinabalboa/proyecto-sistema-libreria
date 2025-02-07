import { useState, useEffect } from "react";
import { loginUsuario } from "../../api/ApiUsuario.js";

const FormLogin = ({ titleForm }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [usuario, setUsuario] = useState(null);

    // Cargar usuario desde localStorage si ya está autenticado
    useEffect(() => {
        const storedUser = localStorage.getItem("usuario");
        if (storedUser) {
            setUsuario(JSON.parse(storedUser));
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = await loginUsuario(formData);
            console.log("Login exitoso", data);

            // Guardar usuario en estado y en localStorage
            setUsuario(data.usuario);
            localStorage.setItem("usuario", JSON.stringify(data.usuario));

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label>
                        Username:
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: "20%", marginLeft: "10px" }}
                        />
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            style={{ width: "20%", marginLeft: "10px" }}
                        />
                    </label>
                </div>
                <br />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button className="btn_login" type="submit" disabled={loading}>
                    {loading ? "Cargando..." : "Enviar"}
                </button>
            </form>

            {/* Si el usuario está autenticado, mostramos su rol */}
            {usuario && (
                <div style={{ marginTop: "20px" }}>
                    <h4>Bienvenido, {usuario.email} 👋</h4>
                    <p><strong>Rol:</strong> {usuario.rol}</p>
                </div>
            )}
        </div>
    );
};

export default FormLogin;