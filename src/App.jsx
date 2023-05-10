import './App.css'

import CardGame from './components/card/CardGame'

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
          <section>
            <div><h1>MEMOCARDS</h1></div>
            <div>
              <span>Tiempo: 00:48</span>
              <span>Intentos: 7</span>
            </div>
          </section>
          <form className='imgsContainer' id='listCards'>
            {arrayImagenes().map((img, i)=>{
              return <CardGame img={img} className='cardCompo' key={i}/>
            })}
            {arrayImagenes().map((img, i)=>{
              return <CardGame img={img} className='cardCompo' key={i}/>
            })}
          </form>
        </main>
      </>
  )
}

export default App
