import { useParams } from 'react-router'
import styles from './styles.module.css'
import { dadosConteudo } from '../Category/dadosConteudo'
import { Breadcrumb } from '../../components/Breadcrumb'

export function DetailContent(){
    const {id, categoria} = useParams()

    const item = dadosConteudo.find(item => item.id === Number(id) && item.categoria === categoria)

    if(!item){
        return <p>Conteúdo não encontrado.</p>
    }


    return (
        <div className={styles.container}>
            
            <Breadcrumb categoria={categoria || ''} tituloAtual={item.titulo} />

            <div className={styles.imagem}>
                <img src={item.imagem} alt={item.titulo} />
            </div>

            <div className={styles.info}>
                <span className={styles.tipo}>{item.tipo.toUpperCase()}</span>
                <h1>{item.titulo}</h1>
                <p>{item.conteudo}</p>
            </div>
        </div>
    )
}
