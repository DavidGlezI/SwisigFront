import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import { InicioRouter } from '../layouts/Inicio/Routes/InicioRouter'
import { CursosPages } from '../layouts/Content/Pages/CursosPages'

export const AppRouter = () =>{
    return(
        <Routes>

            <Route path='/session/*' element ={<InicioRouter/>} />

            <Route path='/*' element ={<CursosPages/>} />

        </Routes>
    )
}