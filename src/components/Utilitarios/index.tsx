import styles from './styles.module.css'

import calc from '../../assets/calc.png'
import simuladores from '../../assets/simuladores.png'
import conversores from '../../assets/conversores.png'

export function Utilitarios(){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Utilitários</h1>
                <p>Ferramentas para facilitar sua vida. De cálculos a simuladores, tudo em só lugar.</p>
                <div className={styles.utils}>
                    <span>
                    <div>
                        <img src={calc} alt="" />
                        </div>
                   
                        <h2>Calculadoras</h2>
                        <p>Cálculos práticos, IMC, juros compostos e mais</p>
                    
                    </span>

                    <span>
                        <div>
                        <img src={simuladores} alt="" />
                        </div>
             
                            <h2>Simuladores</h2>
                            <p>Planeje aposentadoria, leitura e investimentos</p>
                        
                    </span>

                    <span>
                        <div>
                            <img src={conversores} alt="" />
                        </div>
                     
                        <h2>Conversores</h2>
                        <p>Converta moedas unidades de tempo com facilidade</p>
                        
                    </span>
                </div>
            </div>
        </div>
    )
}