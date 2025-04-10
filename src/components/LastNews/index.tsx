import styles from './styles.module.css'
import { dadosConteudo } from '../../pages/Category/dadosConteudo'

export function LastNews(){

    const categoria = ['tecnologia', 'financas', 'saude']

    const ultimasNoticias = categoria.map(categoria => {
        return dadosConteudo
            .filter(item => item.categoria === categoria && item.tipo === 'noticias')
            .sort((a, b) => b.id - a.id)[0]
    }).filter(Boolean) // remove undefined se não houver

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Últimas Notícias</h1>
                <div className={styles.lastNews}>
                   {
                    ultimasNoticias.map((noticia) => (
                        <a href={noticia.link} key={noticia.id} className={styles.card}>
                            <div className={styles.imagem}>
                                <img src={noticia.imagem} alt={noticia.titulo} />
                            </div>
                            
                            <p>
                                <strong>{noticia.titulo}</strong>
                                <br />
                                {noticia.resumo.length > 70 ? `${noticia.resumo.slice(0,70)}...` : noticia.resumo}
                            </p>
                        </a>
                    ))
                   }
                </div>
            </div>
        </div>
    )
}