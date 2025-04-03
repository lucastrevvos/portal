import styles from './styles.module.css'
import { HeartPulse, Cpu, DollarSign   } from 'lucide-react';

export function CategoryNews() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.card}>
                    <span className={styles.icon}>
                        <Cpu color='#FFFFFF' size={30} />
                    </span>
                    <span>
                        <h1>Tecnologia</h1>
                        <p>Artigos sobre inovações tecnologicas</p>
                    </span>
                </div>

                <div className={styles.card}>
                    <span className={styles.icon}>
                        <DollarSign color='#FFFFFF' size={30} />
                    </span>
                    <span>
                        <h1>Finanças</h1>
                        <p>Informações sobre o mundo financeiro</p>
                    </span>
                </div>

                <div className={styles.card}>
                    <span className={styles.icon}>
                        <HeartPulse color='#FFFFFF' size={30} />
                    </span>
                    <span>
                        <h1>Saúde</h1>
                        <p>Dicas e novidades na área de saúde</p>
                    </span>
                </div>
            </div>
        </div>
    )
}