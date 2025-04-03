import styles from './styles.module.css'
import { Smartphone  } from 'lucide-react';

export function Apps() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                <span>
                    <Smartphone color='#288C3D' size={80} />
                    <h1>Em breve: nossos <br />aplicativos</h1>
                </span>
                    <p>
                        Estamos desenvolvendo soluções digitais que vão facilitar sua rotina nas áreas de <strong>Tecnologia, Finanças e Saúde.</strong>
                    </p>
                    <ul>
                        <li>Aplicativos simples, rápidos e focados em resolver problemas reais</li>
                        <li>Totalmente gratuitos, com ou sem versão Pro</li>
                        <li>Integrados à nossa plataforma de conteúdo</li>
                    </ul>
                    <footer>
                        <strong>👀 Fique de olho — novidades estão chegando!</strong>
                    </footer>
                </div>
            </div>
        </>
    )
}