import { useState } from 'react'
import styles from './styles.module.css'

export function ConversorMoedas(){
    const [valor, setValor] = useState('')
    const [origem, setOrigem] = useState('BRL')
    const [destino, setDestino] = useState('USD')
    const [resultado, setResultado] = useState<null | number>(null)
    const [carregando, setCarregando] = useState(false)

    async function converter(){
        const valorNumerico = parseFloat(valor.replace(',', '.'))
        if(!valorNumerico || origem === destino){
            setResultado(null)
            return
        }

        setCarregando(true)

        try {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${valorNumerico}&from=${origem}&to=${destino}`);
            const data = await res.json();
            const taxaConvertida = data.rates[destino];
            setResultado(taxaConvertida);

        } catch(error) {
            console.error('Erro na conversão:', error)
            setResultado(null)
        }

        setCarregando(false)
    }

    return(
        <section className={styles.container}>
            <p>Converta valores com câmbio em tempo real </p>

            <div className={styles.form}>
                <input 
                    type="number" 
                    placeholder='Valor'
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}    
                />

                <div className={styles.selects}>
                    <select name={origem} onChange={(e) => setOrigem(e.target.value)}>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>

                    <span>→</span>

                    <select value={destino} onChange={(e) => setDestino(e.target.value)}>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>

                <button onClick={converter} disabled={carregando}>
                    {carregando ? 'Convertendo...' : 'Converter'}
                </button>

                {resultado !== null && (
                    <div className={styles.resultado}>
                        <p>
                            <strong>  Resultado:</strong>
                            {resultado.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: destino
                            })}
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}