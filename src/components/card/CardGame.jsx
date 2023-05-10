import './CardGame.css'
import { useContext } from 'react'
import { AppContext } from '../../context/context'


const CardGame = (props) => {
    let IDimages = props.img.split('/').pop().split('.')[0]
    const { setCard_a, setCard_b, card_a } = useContext(AppContext)

    const validarClick = (e) => {
        let cardIdentify = e.target.name
        card_a == '' ? setCard_a(cardIdentify) : setCard_b(cardIdentify)
    }

    return (
        <label className="card">
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
                            <img src={props.img} alt="stiker"/>
                        </figure>
                    </div>
                </div>

            </div>
        </label>
    )
}

export default CardGame