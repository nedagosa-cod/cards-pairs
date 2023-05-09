import './App.css'

import CardGame from './components/card/CardGame.jsx'

function App() {

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

  return (
    <>
      <main className='main'>
        <section className='imgsContainer'>
          {imagePaths.map((img, i)=>{
            return <CardGame key={i} img={img}></CardGame>
          })}
          {imagePaths.map((img, i)=>{
            return <CardGame key={i} img={img}></CardGame>
          })}          
        </section>
      </main>
    </>
  )
}

export default App
