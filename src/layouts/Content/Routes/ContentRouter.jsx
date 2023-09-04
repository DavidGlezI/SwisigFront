import { Routes, Route } from "react-router-dom"
import { CursosPages } from "../Pages/CursosPages"




export const ContentRouter = () => {
    return (
        <Routes>
           
                <Route path = "courses" element = { <CursosPages/>}/>  
              
            
        
        </Routes>
    )
}