import { useState } from "react";

const formulario = () => {
    // eslint-disable-next-line no-unused-vars
    const [nombre, setNombre] = useState
    const [apellido, setApellido] = useState
    const [contraseña, setcontraseña] = useState
    return ( 
        <div>
            <h1>FORMULARIO DE DATOS</h1>
            <form >
                <input type='text' id='nombre' value={nombre} onChange={ e => setNombre(e.target.value)} >NOMBRE</input>
                <input type='text' id='apellido' value={apellido} onChange={ e => setApellido(e.target.value)}>APELLIDO</input>
                <input type="password" id="password" value={contraseña} onChange={ e => setcontraseña(e.target.value)} >USUARIO</input>
                <button type="submit">+</button>
            </form>
            
        </div>
     );
}
 
export default formulario;