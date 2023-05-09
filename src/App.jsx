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
          <section className='imgsContainer'>
            {arrayImagenes().map((img, i)=>{
              return <CardGame key={i} img={img}/>
            })}
            {arrayImagenes().map((img, i)=>{
              return <CardGame key={i} img={img}/>
            })}
          </section>
        </main>
      </>
  )
}

export default App
