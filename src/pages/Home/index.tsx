import { Apps } from '../../components/Apps'
import { Button } from '../../components/Button'
import { CategoryNews } from '../../components/CategoryNews'
import { LastNews } from '../../components/LastNews'
import { Utilitarios } from '../../components/Utilitarios'
import styles from './styles.module.css'

export function Home(){
    return (
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>A Trevvos <br />é mais que um portal</h1> 
                <p>
                    Somos criadores de conteúdo e de soluções digitais para sua vida. 
                    Descubra nosso ecossistema de apps, utilitários e conhecimento.
                </p>
                <div className={styles.buttons}>
                    <Button title='Ver nossos apps' onClick={() => alert('Aguarde só mais um pouquinho estamos em desenvolvimento :)')}></Button>
                    <a href="https://wa.me/5511945043408" target="_blank" rel="noopener noreferrer">
                        <Button title="Atendimento via Whats" typeBtn="secundary" />
                    </a>
                </div>
            </div>
        </div>
        <LastNews />

        <CategoryNews />

        <Utilitarios />

        <Apps />
        </>
    )
} 