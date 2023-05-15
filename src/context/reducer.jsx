import { useState } from "react"
import { AppContext } from "./context"

const ContextCompo = ({children}) => {
    
    let listChecks = document.getElementsByClassName('check')

    const [card_a, setCard_a] = useState('')
    const [card_b, setCard_b] = useState('')
    let [pares, setPares] = useState(0)
    let [contador, setContador] = useState(0)
    let [puntaje, setPuntaje] = useState(0)

    console.log('a: ' + card_a)
    console.log('b: ' + card_b)

    if (card_a != '' && card_b != '') {
        
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
            setContador(contador+  1)
            if (card_a == card_b) {
                setPares(pares+ 1)
            }
            for (let i = 0; i < listChecks.length; i++) {
                listChecks[i].removeAttribute('disabled')
            }

        },500)
    }

    const resetGame = () => {
        setContador(0)
        setPares(0)
        setPuntaje(0)
        for (const check of listChecks) {
            check.checked = false
            check.checked = false
            check.nextSibling.children[1].children[0].classList.remove('on')
        }
    }

    return (
        <AppContext.Provider value={{resetGame, setCard_a, setCard_b, setPuntaje, setPares, setContador, card_a, card_b, contador, pares, puntaje}}>
            { children }
        </AppContext.Provider>
    )
}

export default ContextCompo