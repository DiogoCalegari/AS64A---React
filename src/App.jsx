import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Olá, meus amigos!</h1>
            <button
            type="button"
            className="counter"
            onClick={() => {setCount((count) => count + 1)

              if (count === 9) {
                alert('Você clicou 10 vezes!')
                setCount(0)
                alert('Sua contagem foi reiniciada')
                alert("Seu processador está 109 graus celsius, você precisa desligar o computador imediatamente!")
              }
            }}
          >
            Clique aqui
          </button>
          <p>Você apertou no botão {count} vezes</p>
        </div>
      </section>
    </>
  )
}

export default App
