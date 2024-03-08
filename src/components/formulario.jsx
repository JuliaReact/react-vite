import { useState } from "react";

const formulario = () => {
    // eslint-disable-next-line no-unused-vars
    const [nombre, setNombre] = useState
    const [contraseña, setcontraseña] = useState
    return ( 
        <div>
            <h1>FORMULARIO DE DATOS</h1>
            <form >
                <input type='text' id='nombre' value={nombre} >NOMBRE</input>
                <input type="password" id="password" value={contraseña}>USUARIO</input>
                <button type="submit">+</button>
            </form>
            
        </div>
     );
}
 
export default formulario;