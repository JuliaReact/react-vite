import { useState } from "react";

const formulario = () => {
    // eslint-disable-next-line no-unused-vars
    const [nombre, setNombre] = useState
    return ( 
        <div>
            <h1>FORMULARIO DE DATOS</h1>
            <form >
                <input type='text' id='nombre' value={nombre} ></input>
            </form>
        </div>
     );
}
 
export default formulario;