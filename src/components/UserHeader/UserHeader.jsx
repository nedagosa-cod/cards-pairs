import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"

import './userHeader.css'


export const UserHeader = () => {
    
    let [timer, setTimer] = useState(0)
    const { contador, pares } = useContext(AppContext)

    useEffect(() => {
        const fnTimer =  setInterval(() =>{
            setTimer(timer++)
        }, 1000);
        return () => clearInterval(fnTimer);
    },[])


    return (
        <div className='data'>
            <span>Tiempo: {timer}</span>
            <span>Intentos: {contador}</span>
            <span>Parejas: {pares}/8</span>
        </div>
    )
}
