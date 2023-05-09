import { useState } from "react"
import { AppContext } from "./context"

const ContextCompo = ({children}) => {

    const [card_a, setCard_a] = useState('')
    const [card_b, setCard_b] = useState(null)

    console.log('a: ' + card_a)
    console.log('b: ' + card_b)

    if (card_a == card_b) {
        console.log('son iguales')
    } else {
        let listChecks = document.getElementsByClassName('check')
        for (const check of listChecks) {
            console.log(check.name)
        }
    }

    return (
        <AppContext.Provider value={{setCard_a, setCard_b, card_a, card_b}}>
            { children }
        </AppContext.Provider>
    )
}

export default ContextCompo