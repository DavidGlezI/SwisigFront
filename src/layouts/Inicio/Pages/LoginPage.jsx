import { useNavigate } from "react-router-dom"
import { url } from "../../../../variables"
import { useFormulario } from "../../../hooks/useFormulario"






export const Loginpage= ()=> {
   const navigate =  useNavigate();
   const {correo, contraseña, onChange} =useFormulario({correo:'', contraseña : '' }) 

   function submitForm(){
    fetch(`http://${url}/outer/user/login`, {
        method : "POST",
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify({email:correo, password : contraseña})
    }).then((response)=>{return response.json()}).then((body)=>{console.log(body.data.token)
    if(body.data.token) {
        localStorage.setItem('token', JSON.stringify(body.data.token));
        navigate('/courses')
    }
    
    })
    
   }

    return (
        <div className="login">
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

            <button onClick={submitForm}>Iniciar Sesion</button>
        </div>
    )
}