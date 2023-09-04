import { Routes, Route } from "react-router-dom"
import { Loginpage } from "../Pages/LoginPage"
import { RegisterPage } from "../Pages/RegisterPage"
import { InicioLayout } from "../Layout/InicioLayout"




export const InicioRouter = () => {
    return (
        <Routes>
           
                <Route path = "login" element = {

                <InicioLayout>
                    <Loginpage/>
                </InicioLayout>

                }/>  
                <Route path = "register" element = {

                <InicioLayout>
                    <RegisterPage/>
                </InicioLayout>
                }/>  
            
        
        </Routes>
    )
}