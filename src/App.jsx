import './App.css'

import img1 from './imgCards/1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faRankingStar } from '@fortawesome/free-solid-svg-icons'


import CardGame from './components/card/CardGame'
import { UserHeader } from './components/UserHeader/UserHeader'

function App() {

  const arrayImagenes = () => {
    const imagePaths = [
      img1,
      img1,
      img1,
      img1,
      img1,
      img1,
      img1,
      img1
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
          <section className="container">
            <div className="card-container">
              <div className="card-content">
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
