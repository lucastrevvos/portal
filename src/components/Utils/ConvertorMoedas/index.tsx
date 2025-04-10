import { useState } from 'react'
import styles from './styles.module.css'
import { SEO } from '../../SEO'


export function ConversorMoedas() {
  const [valor, setValor] = useState('')
  const [origem, setOrigem] = useState('BRL')
  const [destino, setDestino] = useState('USD')
  const [resultado, setResultado] = useState<null | number>(null)
  const [carregando, setCarregando] = useState(false)

  async function converter() {
    const valorNumerico = parseFloat(valor.replace(',', '.'))
    if (!valorNumerico || origem === destino) {
      setResultado(null)
      return
    }

    setCarregando(true)

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${valorNumerico}&from=${origem}&to=${destino}`
      )
      const data = await res.json()
      const taxaConvertida = data.rates[destino]
      setResultado(taxaConvertida)
    } catch (error) {
      console.error('Erro na conversão:', error)
      setResultado(null)
    }

    setCarregando(false)
  }

  return (
    <>
      <SEO
        title="Conversor de Moedas - Trevvos"
        description="Converta valores entre reais, dólares e euros com taxa de câmbio em tempo real."
        url="https://trevvos.com.br/utilitarios/conversor-moedas"
      />

      <section className={styles.container}>
        <p>Converta valores com câmbio em tempo real</p>

        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); converter(); }}>
          <label htmlFor="valor">Valor</label>
          <input
            id="valor"
            type="number"
            placeholder="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />

          <div className={styles.selects}>
            <div>
              <label htmlFor="origem">De:</label>
              <select id="origem" value={origem} onChange={(e) => setOrigem(e.target.value)}>
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <span>→</span>

            <div>
              <label htmlFor="destino">Para:</label>
              <select id="destino" value={destino} onChange={(e) => setDestino(e.target.value)}>
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>

          <button type="submit" disabled={carregando}>
            {carregando ? 'Convertendo...' : 'Converter'}
          </button>

          {resultado !== null && (
            <div className={styles.resultado}>
              <p>
                <strong>Resultado:</strong>{' '}
                {resultado.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: destino
                })}
              </p>
            </div>
          )}
        </form>
      </section>
    </>
  )
}
