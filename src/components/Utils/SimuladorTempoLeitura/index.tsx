import { useState } from 'react';
import styles from './styles.module.css';
import { SEO } from '../../SEO';


export function SimuladorTempoLeitura() {
  const [texto, setTexto] = useState('');
  const [velocidade, setVelocidade] = useState('200');
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
    <>
      <SEO
        title="Simulador de Tempo de Leitura - Trevvos"
        description="Cole seu texto e descubra em quanto tempo ele pode ser lido, baseado na sua velocidade de leitura."
        url="https://trevvos.com.br/utilitarios/simulador-tempo-leitura"
      />

      <section className={styles.container}>
        <p>Descubra quanto tempo levaria para ler um texto.</p>

        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); calcular(); }}>
          <label htmlFor="texto">Texto</label>
          <textarea
            id="texto"
            placeholder="Cole seu texto aqui..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            rows={6}
            required
          />

          <label htmlFor="velocidade">Velocidade de leitura (palavras por minuto)</label>
          <input
            id="velocidade"
            type="number"
            placeholder="Velocidade de leitura (ppm)"
            value={velocidade}
            onChange={(e) => setVelocidade(e.target.value)}
            required
          />

          <button type="submit">Calcular Tempo</button>
        </form>

        {resultado && (
          <div className={styles.resultado}>
            <p><strong>Tempo estimado:</strong> {resultado}</p>
          </div>
        )}
      </section>
    </>
  );
}
