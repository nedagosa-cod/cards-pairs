import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"

import './userHeader.css'


export const UserHeader = () => {
    
    let [timer, setTimer] = useState(0)
    const { contador, pares, setPuntaje, puntaje } = useContext(AppContext)

    useEffect(() => {
        const fnTimer =  setInterval(() =>{
            if (puntaje) {
                setTimer(0)
            } else {
                setTimer(timer++)
            }
        }, 1000);
        return () => clearInterval(fnTimer); 
    },[puntaje])

    useEffect(() => {
        if (pares == 8) {
            let result = 100000 - ((180 * timer) + (30 * contador))
            setPuntaje(result)
        }
    },[pares])

    return (
        <div className='data'>
            <span>Tiempo: {timer}</span>
            <span>Intentos: {contador}</span>
            <span>Parejas: {pares}/8</span>
        </div>
    )
}
