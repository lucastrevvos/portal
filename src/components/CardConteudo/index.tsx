type Props = {
    id: number
    categoria: string
    tipo: string
    titulo: string
    resumo: string
    imagem: string
}

import styles from './styles.module.css'

export function CardConteudo({data}: {data: Props}){
    return (
        <div className={styles.container}>
            <div className={styles.imagem}>
                <img src={data.imagem} alt="" />
            </div>
            <h3>{data.titulo}</h3>
            <p>{data.resumo}</p>
        </div>
    )
}