import style from './style.module.css'

import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faStar } from '@fortawesome/free-solid-svg-icons';

const Ranking = ({reiniciador}) => {

    const [displayScore, setDisplayScore] = useState("none");
    const { puntaje, resetGame } = useContext(AppContext)

    const fnResetGame = () => {
        reiniciador()
        resetGame()
    }

    useEffect(() => {    
        if (puntaje > 0) {
            setDisplayScore('flex');
        } else {
            setDisplayScore('none');
        }
    },[puntaje])

    return (
        <section className={style.popup} style={{display: displayScore}}>
            <div className={style.cardBox}>
                <div className={style.card}>
                    <div className={style.h4} >Puntaje</div>
                    <span className={style.puntaje} ><FontAwesomeIcon icon={faStar}/> {puntaje}</span>
                    <button className={style.button} type='button' onClick={fnResetGame}>Reiniciar</button>
                    <FontAwesomeIcon icon={faRankingStar} className={style.ranking} />
                </div>
            </div>
        </section>
    )
}

export default Ranking