import { Link } from "react-router"
import { formatarTitulo } from "../../utils"
import styles from './styles.module.css'

type Props = {
    categoria: string
    tituloAtual: string
}

export function Breadcrumb({categoria, tituloAtual}: Props){
    return (
        <nav className={styles.container}>
        <Link to="/">Início</Link> &gt;{" "}
        <Link to={`/categoria/${categoria}`}>{formatarTitulo(categoria || '')}</Link> &gt;{" "}
        <span>{tituloAtual}</span>
    </nav>
    )
}