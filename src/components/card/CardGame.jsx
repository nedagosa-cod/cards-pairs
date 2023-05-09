import './CardGame.css'

const CardGame = (props) => {
    console.log(props)
    return (
        <label className="card">
            <input type="checkbox" className='check'/>
            <div className="content">
                <div className="back">
                    <div className="back-content">
                        <strong>Click</strong>
                    </div>
                </div>

                <div className="front">
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