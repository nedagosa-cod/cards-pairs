import { useContext } from "react"
import { AppContext } from "../../context/context"

import './userHeader.css'


export const UserHeader = () => {
    
    const { contador } = useContext(AppContext)

    return (
        <div className='data'>
            <span>Tiempo: 00:48</span>
            <span>Intentos: {contador}</span>
        </div>
    )
}
