import Hero from './assets/hero.png'

function App() {

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* Imagem em public */}
        <div>
          <img src="/favicon.svg" alt="Hero" />
        </div>

        {/* Imagem em src/assets */}
        <div>
          <img src={Hero} alt="Hero" />
        </div>
      </div>      
    </>
  )
}

export default App
