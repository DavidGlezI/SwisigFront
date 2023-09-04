import { useEffect } from "react"
import { url } from "../../../../variables"




export const CursosPages = ()=>{

    useEffect(()=>{
        fetch(`http://${url}/user/course`, {
        method : "GET",
        headers : {'Content-Type': 'application/json', 'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`},
    }).then((response)=>{return response.json()}).then((body)=>{console.log(body.data)
   
    })

    })
    return (
        <div>HOLACURSO</div>
    )
}