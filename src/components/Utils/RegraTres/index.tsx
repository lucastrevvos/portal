import { useState } from 'react'
import styles from './styles.module.css'
import { SEO } from '../../SEO'


export function CalculadoraRegraDeTres() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
  const [resultado, setResultado] = useState<null | number>(null)

  function calcular() {
    const A = parseFloat(a.replace(',', '.'))
    const B = parseFloat(b.replace(',', '.'))
    const C = parseFloat(c.replace(',', '.'))

    if (!A || !B || !C || A === 0) {
      setResultado(null)
      return
    }

    const X = (B * C) / A
    setResultado(X)
  }

  return (
    <>
      <SEO
        title="Calculadora de Regra de Três - Trevvos"
        description="Resolva proporções com facilidade usando nossa calculadora de regra de três."
        url="https://trevvos.com.br/utilitarios/regra-de-tres"
      />

      <section className={styles.container}>
        <p>Preencha três valores e descubra o quarto proporcional.</p>
        <p>
          Resolver expressões do tipo: <br />
          Se A está para B, então C está para X. <br /><br />
          Exemplo: <br />
          Se 2 laranjas custam R$4, quanto custam 5? <br /><br />
          Você fornece 3 valores, e o sistema calcula o 4º.
        </p>

        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); calcular(); }}>
          <label htmlFor="a">A</label>
          <input
            id="a"
            type="number"
            placeholder='A'
            value={a}
            onChange={(e) => setA(e.target.value)}
            required
          />

          <label htmlFor="b">B</label>
          <input
            id="b"
            type="number"
            placeholder='B'
            value={b}
            onChange={(e) => setB(e.target.value)}
            required
          />

          <label htmlFor="c">C</label>
          <input
            id="c"
            type="number"
            placeholder='C'
            value={c}
            onChange={(e) => setC(e.target.value)}
            required
          />

          <button type="submit">Calcular</button>
        </form>

        {resultado !== null && (
          <div className={styles.resultado}>
            <p><strong>Resultado (X):</strong> {resultado.toLocaleString('pt-BR')}</p>
          </div>
        )}
      </section>
    </>
  )
}
