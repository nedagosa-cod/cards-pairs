import './CardGame.css'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../context/context'


const CardGame = (props) => {
    const { setCard_a, setCard_b, card_a } = useContext(AppContext)
    const numRandom = useRef(0)
    const pathImg = props.img

    let IDimages = props.img.split('/').pop().split('.')[0]
    let numAle = Math.floor(Math.random() * 16) + 1;

    const validarClick = (e) => {
        let cardIdentify = e.target.name
        card_a == '' ? setCard_a(cardIdentify) : setCard_b(cardIdentify)
    }

    useEffect(() =>{
        numRandom.current.style.order = numAle
    },[])

    return (
        <label className="card" ref={numRandom}>
            <input type="checkbox" name={IDimages} className='check' onClick={validarClick}/>
            <div className="content">
                <div className="back">
                    <div className="back-content">
                        <strong>Click</strong>
                    </div>
                </div>

                <div className="front">
                    <div className="front__done"></div>
                    <div className="back-content">
                        <figure>
                            <img src={pathImg} alt="stiker"/>
                        </figure>
                    </div>
                </div>
            </div>
        </label>
    )
}

export default CardGame