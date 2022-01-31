
import { useState } from 'react';
import './app.css';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem('Você está abaixo do peso! seu IMC: ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem('Peso ideial! seu IMC: ' + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem('Um pouco acima do peso! seu IMC: ' + imc.toFixed(2))
    } else if (imc < 34.9) {
      setMensagem('Obesidade! seu IMC: ' + imc.toFixed(2))
    }
  }

  return(
    <div className='app'>
      <h1>Calculadora IMC</h1>
      <span>
        Vamos Calcular o seu IMC
      </span>
      <div className='area-input'>
        <input type='text' 
          placeholder="Peso em (KG)" 
          value={peso} onChange={ (e) => setPeso(e.target.value) }>
        </input>     
        <input type='text' 
        placeholder="Altura em (KG)" 
        value={altura} onChange={ (e) => setAltura(e.target.value) }>
        </input>     

        <button onClick={calcularIMC}>
          Calcular
        </button>

      </div>

      <h2>{mensagem}</h2>

    </div>
  )
}