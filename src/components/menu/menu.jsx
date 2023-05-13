import style from './style.module.css'

import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faStar } from '@fortawesome/free-solid-svg-icons';

const Menu = ({reiniciador}) => {

    const [displayStyle, setDisplayStyle] = useState("none");
    const { puntaje, resetGame } = useContext(AppContext)

    const fnResetGame = () => {
        reiniciador()
        resetGame()
    }

    useEffect(() => {
        if (puntaje > 0) {
            setDisplayStyle("flex");
        } else {
            setDisplayStyle("none");
          }
    },[puntaje])

    return (
        <section className={style.popup} style={{display: displayStyle}}>
            <div className={style.cardBox}>
                <div className={style.card}>
                    <div className={style.h4}>Puntaje</div>
                    <span className={style.puntaje}><FontAwesomeIcon icon={faStar}/> {puntaje}</span>
                    <button className={style.button} type='button' onClick={fnResetGame}>Jugar de nuevo</button>
                    <FontAwesomeIcon icon={faRankingStar} className={style.ranking} />
                </div>
            </div>
        </section>
    )
}

export default Menu