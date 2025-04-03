import styles from './styles.module.css'
import noticia1 from '../../assets/news/noticia1.png'

export function LastNews(){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Últimas Notícias</h1>
                <div className={styles.lastNews}>
                    <div className={styles.card}>
                        <div className={styles.imagem}>
                            <img src={noticia1} alt="" />
                        </div>
                            <p>Instagram deu início aos testes da função "Minhas listas" no Threads, que 
                                tem umas dadas novidades prometidas pelo diretor Adam Mosseri
                            </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imagem}>
                                <img src={noticia1} alt="" />
                        </div>
                            <p>
                                Instagram deu início aos testes da função "Minhas listas" no Threads, que 
                                tem umas dadas novidades prometidas pelo diretor Adam Mosseri
                            </p>
                        </div>
                    <div className={styles.card}>
                        <div className={styles.imagem}>
                            <img src={noticia1} alt="" />
                        </div>
                            <p>
                                Instagram deu início aos testes da função "Minhas listas" no Threads, que 
                                tem umas dadas novidades prometidas pelo diretor Adam Mosseri
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}