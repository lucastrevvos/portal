import { useState } from "react"
import styles from './styles.module.css'
import { SEO } from "../../SEO"


export function IMC() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState<null | { imc: number, classificacao: string }>(null)

  function calcularIMC() {
    const alturaMetros = parseFloat(altura.replace(',', '.')) / 100
    const pesoKg = parseFloat(peso.replace(',', '.'))

    if (!pesoKg || !alturaMetros || alturaMetros <= 0) {
      setResultado(null)
      return
    }

    const imc = pesoKg / (alturaMetros * alturaMetros)
    const classificacao = getClassificacao(imc)

    setResultado({ imc, classificacao })
  }

  function getClassificacao(imc: number): string {
    if (imc < 18.5) return 'Abaixo do peso'
    if (imc < 24.9) return 'Peso normal'
    if (imc < 29.9) return 'Sobrepeso'
    if (imc < 34.9) return 'Obesidade grau 1'
    if (imc < 39.9) return 'Obesidade grau 2'
    return 'Obesidade grau 3'
  }

  return (
    <>
      <SEO
        title="Calculadora de IMC - Trevvos"
        description="Descubra seu Índice de Massa Corporal (IMC) de forma rápida e fácil com a calculadora da Trevvos."
        url="https://trevvos.com.br/utilitarios/imc"
      />

      <section className={styles.container}>
        <p>Descubra seu Índice de Massa Corporal com base em sua altura e peso.</p>

        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); calcularIMC() }}>
          <label htmlFor="peso">Peso (kg)</label>
          <input
            id="peso"
            type="number"
            placeholder="Peso (kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />

          <label htmlFor="altura">Altura (cm)</label>
          <input
            id="altura"
            type="number"
            placeholder="Altura (cm)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />

          <button type="submit">Calcular</button>
        </form>

        {resultado && (
          <div className={styles.resultado}>
            <p><strong>IMC:</strong> {resultado.imc.toFixed(2)}</p>
            <p><strong>Classificação:</strong> {resultado.classificacao}</p>
          </div>
        )}
      </section>
    </>
  )
}
