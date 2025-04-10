import styles from './styles.module.css'

import calc from '../../assets/calc.png'
import simuladores from '../../assets/simuladores.png'
import conversores from '../../assets/conversores.png'
import { SEO } from '../SEO'

export function Utilitarios() {
  return (
    <>
      <SEO
        title="Utilitários - Calculadoras, Simuladores e Conversores | Trevvos"
        description="Use ferramentas práticas como calculadoras, simuladores e conversores direto no portal Trevvos. Tudo gratuito e sem complicação."
        url="https://trevvos.com.br/utilitarios"
      />

      <section className={styles.container}>
        <div className={styles.content}>
          <h1>Utilitários</h1>
          <p>Ferramentas para facilitar sua vida. De cálculos a simuladores, tudo em só lugar.</p>

          <div className={styles.utils}>
            <a href="/categoria/utilitarios?filtro=calculadoras" className={styles.card}>
              <article>
                <figure>
                  <img src={calc} alt="Ícone de calculadora" />
                </figure>
                <h2>Calculadoras</h2>
                <p>Cálculos práticos, IMC, juros compostos e mais</p>
              </article>
            </a>

            <a href="/categoria/utilitarios?filtro=simuladores" className={styles.card}>
              <article>
                <figure>
                  <img src={simuladores} alt="Ícone de simulador" />
                </figure>
                <h2>Simuladores</h2>
                <p>Planeje aposentadoria, leitura e investimentos</p>
              </article>
            </a>

            <a href="/categoria/utilitarios?filtro=conversores" className={styles.card}>
              <article>
                <figure>
                  <img src={conversores} alt="Ícone de conversor" />
                </figure>
                <h2>Conversores</h2>
                <p>Converta moedas e unidades de tempo com facilidade</p>
              </article>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
