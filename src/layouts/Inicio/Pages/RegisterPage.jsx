import { url } from "../../../../variables"
import { useFormulario } from "../../../hooks/useFormulario"




export const RegisterPage = ()=>{
    const {correo, contraseña, onChange} =useFormulario({correo:'', contraseña : '' }) 

   function submitForm(){

    fetch(`http://${url}/outer/user/register`, {
        method : "POST",
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify({email:correo, password : contraseña})
    })
   }

    return (
        <div className="registro">
            <div className="correo">
                <h2>Correo:</h2>

                <input 
                    type="text"
                    placeholder="correo"
                    name = "correo"
                    value = {correo}
                    onChange={onChange}
                
                />

            </div>
            <div className="contraseña">
                <h2>Contraseña:</h2>
                <input 
                    type="text"
                    placeholder="contraseña"
                    name = "contraseña"
                    value = {contraseña}
                    onChange={onChange}
                
                />
            </div>

            <button onClick={submitForm}>Registrarse</button>
        </div>
    )
}