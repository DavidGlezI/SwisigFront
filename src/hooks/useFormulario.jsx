import { useState } from "react"




export const useFormulario = (initialForm = {})=> {

    const [form, setForm] = useState(initialForm)

    const onChange = ({target})=> {
        const {name, value} = target;
        setForm({
            ...form,
            [name]:value
        })
    }
    return ({...form, onChange, form})
    
}