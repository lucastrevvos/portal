import { useState } from "react"
import styles from './styles.module.css'

export function IMC(){
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [resultado, setResultado] = useState<null | { imc: number, classificacao: string}>(null)

    function calcularIMC() {
        const alturaMetros = parseFloat(altura.replace(',', '.'))
        const pesoKg = parseFloat(peso.replace(',', '.'))

        if(!pesoKg || !alturaMetros || alturaMetros <= 0) {
            setResultado(null)
            return
        }

        const imc = pesoKg / (alturaMetros * alturaMetros)
        const classificacao = getClassificacao(imc)

        setResultado( { imc, classificacao })   
    }

    function getClassificacao(imc: number): string{
        if(imc < 18.5) return 'Abaixo do peso'
        if(imc < 24.9) return 'Peso normal'
        if(imc < 29.9) return 'Sobrepeso'
        if(imc < 34.9) return 'Obesidade grau 1'
        if(imc < 39.9) return 'Obesidade grau 2'
        return 'Obesidade grau 3'
    }

    return (
        <section className={styles.container}>

            <p>Descubra seu Indice de Massa Corporal com base em sua altura e peso.</p>

             <div className={styles.form}>
                <input 
                    type="number" placeholder="Peso (kg)"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}    
                />
                <input 
                    type="number" 
                    placeholder="Altura (cm)"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
                <button onClick={calcularIMC}>Calcular</button>    
            </div>

            {resultado && (
                <div className={styles.resultado}>
                    <p><strong>IMC:</strong> {resultado.imc}</p>
                    <p><strong>Classificação:</strong> {resultado.classificacao}</p>
                </div>
            )}   
        </section>
    )
}