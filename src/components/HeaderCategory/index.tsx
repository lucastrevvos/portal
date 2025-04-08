import { formatarTitulo } from '../../utils'
import styles from './styles.module.css'
import { useParams } from "react-router"


type Props = {
    titulo: string
    filtro: string
    setFiltro: (f: string) => void
    busca: string
    setBusca: (b: string) => void
    paginaAtual?: number
    exibirPaginacao?: boolean
}

export function HeaderCategory({ titulo, filtro, setFiltro, busca, setBusca, paginaAtual, exibirPaginacao = true}: Props){

    const { categoria } = useParams();
    return (
        <div className={styles.container}>
            <h1>{formatarTitulo(titulo)}</h1>

            {
               <div className={styles.filtros}>
               {categoria === 'utilitarios' ? (
                 <select name="tipo" id="tipo" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                   <option value="calculadoras">Calculadoras</option>
                   <option value="simuladores">Simuladores</option>
                   <option value="conversores">Conversores</option>
                 </select>
               ) : (
                 <select name="tipo" id="tipo" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                   <option value="noticias">Notícias</option>
                   <option value="artigos">Artigos</option>
                   <option value="aplicativos">Aplicativos</option>
                 </select>
               )}
             
               <input
                 type="text"
                 placeholder={categoria === 'utilitarios' ? 'Buscar por utilitário...' : 'Buscar por título...'}
                 value={busca}
                 onChange={(e) => setBusca(e.target.value)}
               />
             
               {exibirPaginacao && paginaAtual !== undefined && (
                 <span className={styles.paginacao}>Página {paginaAtual}</span>
               )}
             </div>
            }
        </div>
    )
}