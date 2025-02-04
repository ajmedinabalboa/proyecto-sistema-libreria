import { useState, useEffect } from "react";
import useForm from "../Hooks/useForm.js";

const FormLogin =({ titleForm })=>{
    const[formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
    };
    const handleChange = (event) => {
        //debugger;
        //console.log(event);
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label style={{ marginLeft: "2px" }}>
                        Username:
                        <input style={{ width: "20%", marginLeft: "10px" }}
                         type="text" name="username" required value = {formData.username}
                         onChange={handleChange}/>
                    </label>
                </div>
                <br></br>
                <div>
                    <label style={{ marginLeft: "5px" }}>
                        Password:
                        <input style={{ width: "20%", marginLeft: "10px" }}
                        type="password" name="password" required value = {formData.password}
                         onChange={handleChange}
                         />
                    </label>
                </div>
                <br></br>
                <button className="btn_login" type="submit">Enviar</button>

            </form>
        </>
    );
};
export default FormLogin;