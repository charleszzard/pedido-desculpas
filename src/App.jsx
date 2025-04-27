import { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [mensagem, setMensagem] = useState('');
  const [mostrarBotoes, setMostrarBotoes] = useState(true);
  const audio = new Audio('https://cdn.pixabay.com/audio/2021/08/04/audio_348404404b.mp3');

  function handleSim() {
    setMensagem('Eu te amo! Muito, muito muito, e não faria mal algum a você, você sempre será meu nene ❤️');
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });
    audio.play();
    setMostrarBotoes(false);
  }

  function handleNao(e) {
    setMensagem('Resposta inválida!');
    const button = e.target;
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }

  return (
    <div className="container">
      <div className="texto">
        <h1>Ohhhhhh Jão, me perdoa?</h1>
        <p>Eu errei, mas prometo fazer de tudo para te fazer feliz ❤️</p>
      </div>
      <div className="coracao-container">
        <div className="coracao"></div>
        {mostrarBotoes && (
          <div className="botoes">
            <button className="sim" onClick={handleSim}>Sim</button>
            <button className="nao" onClick={handleNao}>Não</button>
          </div>
        )}
      </div>
      {mensagem && <div className="mensagem">{mensagem}</div>}

      {/* Stitch fofinho */}
      <img 
        src="./src/assets/stitch.gif" 
        alt="Stitch abraçando coração" 
        className="stitch"
      />
    </div>
  );
}

export default App;
