import { Link } from 'react-router-dom'; // se estiver usando React Router
import styles from './styles.module.css'
import { ReactNode } from 'react';

type Props = {
    id: number
    categoria: string
    tipo: string
    titulo: string
    resumo: string
    conteudo?: ReactNode
    imagem: string
    link: string 
}


export function CardConteudo({data}: {data: Props}){
    return (
        <Link to={data.link} className={styles.container}>
            <div className={styles.imagem}>
                <img src={data.imagem} alt="" />
            </div>
            <h3>{data.titulo}</h3>
            <p>{data.resumo}</p>
        </Link>
    )
}