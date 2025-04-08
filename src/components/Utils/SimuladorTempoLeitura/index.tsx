import { useState } from 'react';
import styles from './styles.module.css';

export function SimuladorTempoLeitura() {
  const [texto, setTexto] = useState('');
  const [velocidade, setVelocidade] = useState('200'); // agora string
  const [resultado, setResultado] = useState<string | null>(null);

  function calcular() {
    const totalPalavras = texto.trim().split(/\s+/).length;
    const velocidadeNum = parseFloat(velocidade.replace(',', '.'));

    if (!totalPalavras || isNaN(velocidadeNum) || velocidadeNum <= 0) {
      setResultado(null);
      return;
    }

    const tempoMinutos = totalPalavras / velocidadeNum;
    const minutos = Math.floor(tempoMinutos);
    const segundos = Math.round((tempoMinutos - minutos) * 60);

    setResultado(`${minutos} min e ${segundos} seg`);
  }

  return (
    <section className={styles.container}>
      <p>Descubra quanto tempo levaria para ler um texto.</p>

      <textarea
        placeholder="Cole seu texto aqui..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={6}
      />

      <input
        type="number"
        placeholder="Velocidade de leitura (palavras por minuto)"
        value={velocidade}
        onChange={(e) => setVelocidade(e.target.value)}
      />
    

      <button onClick={calcular}>Calcular Tempo</button>

      {resultado && (
        <div className={styles.resultado}>
          <p><strong>Tempo estimado:</strong> {resultado}</p>
        </div>
      )}
    </section>
  );
}
