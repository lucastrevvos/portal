import { useState } from "react";
import styles from './styles.module.css'
import { SEO } from "../../SEO";


export function CalculadoraJurosCompostos() {
  const [valorInicial, setValorInicial] = useState('')
  const [aporteMensal, setAporteMensal] = useState('')
  const [taxa, setTaxa] = useState('')
  const [periodo, setPeriodo] = useState('')
  const [resultado, setResultado] = useState<null | {
    montante: number,
    totalInvestido: number,
    juros: number
  }>(null)

  function calcular() {
    const P = parseFloat(valorInicial.replace(',', '.')) || 0
    const PMT = parseFloat(aporteMensal.replace(',', '.')) || 0
    const i = (parseFloat(taxa.replace(',', '.')) || 0) / 100
    const n = parseInt(periodo)

    if (!i || !n) {
      setResultado(null)
      return
    }

    const montanteAportes = PMT * ((Math.pow(1 + i, n) - 1) / i * (1 + i))
    const montanteInicial = P * Math.pow(1 + i, n)
    const montanteFinal = montanteInicial + montanteAportes
    const totalInvestido = P + PMT * n
    const juros = montanteFinal - totalInvestido

    setResultado({
      montante: montanteFinal,
      totalInvestido,
      juros
    })
  }

  return (
    <>
      <SEO
        title="Calculadora de Juros Compostos - Trevvos"
        description="Simule seus rendimentos com juros compostos e veja o crescimento do seu dinheiro ao longo do tempo."
        url="https://trevvos.com.br/utilitarios/juros-compostos"
      />

      <section className={styles.container}>
        <p>Simule seus rendimentos com base em juros compostos mensais.</p>

        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); calcular() }}>
          <label htmlFor="valor-inicial">Valor inicial (R$)</label>
          <input
            id="valor-inicial"
            type="number"
            placeholder="Valor inicial (R$)"
            value={valorInicial}
            onChange={(e) => setValorInicial(e.target.value)}
            required
          />

          <label htmlFor="aporte-mensal">Aporte mensal (R$)</label>
          <input
            id="aporte-mensal"
            type="number"
            placeholder="Aporte mensal (R$)"
            value={aporteMensal}
            onChange={(e) => setAporteMensal(e.target.value)}
          />

          <label htmlFor="taxa">Taxa de juros mensal (%)</label>
          <input
            id="taxa"
            type="number"
            placeholder="Taxa de juros mensal (%)"
            value={taxa}
            onChange={(e) => setTaxa(e.target.value)}
            required
          />

          <label htmlFor="periodo">Período (meses)</label>
          <input
            id="periodo"
            type="number"
            placeholder="Período (meses)"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            required
          />

          <button type="submit">Calcular</button>
        </form>

        {resultado && (
          <div className={styles.resultado}>
            <p><strong>Montante final:</strong> {resultado.montante.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}</p>
            <p><strong>Total investido:</strong> {resultado.totalInvestido.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}</p>
            <p><strong>Juros ganhos:</strong> {resultado.juros.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}</p>
          </div>
        )}
      </section>
    </>
  )
}
