import './App.css'

import img1 from './imgCards/1.png'
import img2 from './imgCards/2.png'
import img3 from './imgCards/3.png'
import img4 from './imgCards/4.png'
import img5 from './imgCards/5.png'
import img6 from './imgCards/6.png'
import img7 from './imgCards/7.png'
import img8 from './imgCards/8.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'


import CardGame from './components/card/CardGame'
import { UserHeader } from './components/UserHeader/UserHeader'
import Menu from './components/menu/menu'
import { useState } from 'react'

function App() {

  const [reiniciador, setReiniciador] = useState(0);

  const handleReiniciar = () => {
    setReiniciador(reiniciador + 1);
  };

  const arrayImagenes = () => {
    const imagePaths = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8
    ];

    let imgs = imagePaths.sort(()=>{
      return Math.random() - 0.5
    })
    return [...imgs]
  }

  return (
      <>
        <main className='main' >
          <Menu reiniciador={handleReiniciar}></Menu>
          <section className='barSetting'>
            <div className='barSetting__title'><h1>MEMOCARDS</h1></div>
            <UserHeader className='barSetting__compoHeader' />
            <div className='barSetting__buttons'>
                <FontAwesomeIcon icon={faRankingStar} className='barSetting__buttons--btn' />
            </div>  
          </section>
          <section className="container">
            <div className="card-container">
              <div className="card-content">
              <form className='imgsContainer' id='listCards'>
                {arrayImagenes().map((img, i)=>{
                    return <CardGame img={img} className='cardCompo' key={i - (reiniciador % 2)}/>
                  })}
                {arrayImagenes().map((img, i)=>{
                  return <CardGame img={img} className='cardCompo' key={i - (reiniciador % 2)}/>
                })}
              </form>
              </div>
            </div>
          </section>
        </main>
      </>
  )
}

export default App
