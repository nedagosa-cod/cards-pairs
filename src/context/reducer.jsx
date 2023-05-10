import { useState } from "react"
import { AppContext } from "./context"

const ContextCompo = ({children}) => {

    const [card_a, setCard_a] = useState('')
    const [card_b, setCard_b] = useState('')

    console.log('a: ' + card_a)
    console.log('b: ' + card_b)

    if (card_a != '' && card_b != '') {
        let listChecks = document.getElementsByClassName('check')

        for (const check of listChecks) {
            check.setAttribute('disabled', 'disabled')
        }

        if (card_a == card_b) {
            for (const check of listChecks) {
                if (check.name == card_a) {
                    check.nextSibling.children[1].children[0].classList.add('on')
                    check.setAttribute('disabled', 'disabled')
                } 
            }
        } else {
            setTimeout(() => {
                for (const check of listChecks) {
                    check.name == card_a ? check.checked = false : ''
                    check.name == card_b ? check.checked = false : ''
                }
            },1500)

        }
        setTimeout(() => {
            setCard_a('')
            setCard_b('')
            for (const check of listChecks) {
                check.removeAttribute('disabled')
            }
        },1500)
    }



    return (
        <AppContext.Provider value={{setCard_a, setCard_b, card_a, card_b}}>
            { children }
        </AppContext.Provider>
    )
}

export default ContextCompo