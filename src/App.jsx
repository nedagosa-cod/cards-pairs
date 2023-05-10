import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faRankingStar } from '@fortawesome/free-solid-svg-icons'


import CardGame from './components/card/CardGame'
import { UserHeader } from './components/UserHeader/UserHeader'

function App() {

  const arrayImagenes = () => {
    const imagePaths = [
      './src/imgCards/1.png',
      './src/imgCards/2.png',
      './src/imgCards/3.png',
      './src/imgCards/4.png',
      './src/imgCards/5.png',
      './src/imgCards/6.png',
      './src/imgCards/7.png',
      './src/imgCards/8.png'
    ];

    let imgs = imagePaths.sort(()=>{
      return Math.random() - 0.5
    })
    return [...imgs]
  }

  return (
      <>
        <main className='main'>
          <section className='barSetting'>
            <div className='barSetting__title'><h1>MEMOCARDS</h1></div>
            <UserHeader className='barSetting__compoHeader' />
            <div className='barSetting__buttons'>
                <FontAwesomeIcon icon={faHome} className='barSetting__buttons--btn' />
                <FontAwesomeIcon icon={faRankingStar} className='barSetting__buttons--btn' />
            </div>  
          </section>
          <section class="container">
            <div class="card-container">
              <div class="card-content">
              <form className='imgsContainer' id='listCards'>
                {arrayImagenes().map((img, i)=>{
                  return <CardGame img={img} className='cardCompo' key={i}/>
                })}
                {arrayImagenes().map((img, i)=>{
                  return <CardGame img={img} className='cardCompo' key={i}/>
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
