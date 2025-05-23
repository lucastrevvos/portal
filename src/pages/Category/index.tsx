import { useParams } from "react-router"
import { useSearchParams, useNavigate } from "react-router-dom"

import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { dadosConteudo } from './dadosConteudo'
import { CardConteudo } from "../../components/CardConteudo"
import { HeaderCategory } from "../../components/HeaderCategory"

export function CategoryPage() {
    const {categoria} = useParams()
    const [ searchParams ] = useSearchParams()

    const navigate = useNavigate()
    

    const [busca, setBusca] = useState('')
    const filtroInicial = searchParams.get('filtro') || 'noticias'
    const [filtro, setFiltro] = useState(filtroInicial)
    const [paginaAtual, setPaginaAtual] = useState(1)
    const itensPorPagina = 3

    const inicio = (paginaAtual - 1) * itensPorPagina
    const fim = inicio + itensPorPagina

    const conteudoFiltrado = dadosConteudo
    .filter(item => item.categoria === categoria)
    .filter(item => !filtro || item.tipo === filtro)
    .filter(item => {
        if(!busca.trim()) return true
        return item.titulo.toLowerCase().includes(busca.toLowerCase())
    })
    .sort((a, b) => b.id - a.id)

    const pagina = conteudoFiltrado.slice(inicio, fim)

    useEffect(() => {
        const params = new URLSearchParams()
        if(filtro !== 'noticias') params.set('filtro', filtro)
            navigate(`/categoria/${categoria}?${params.toString()}`, { replace: true })
    }, [filtro])
   

    useEffect(() => {
        setPaginaAtual(1)
      }, [busca, filtro])

    return (
        <>
            <div className={styles.container}>
               
               <HeaderCategory
                titulo={categoria || ''}
                filtro={filtro}
                setFiltro={setFiltro}
                busca={busca}
                setBusca={setBusca}
                paginaAtual={paginaAtual}
               />

                <div className={styles.paginacao}>
                    <button onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 1}>Anterior</button>
                    <button onClick={() => setPaginaAtual(paginaAtual + 1)} disabled={fim >= conteudoFiltrado.length}>Próxima</button>
                </div>

                <div className={styles.content}>
                    {
                        pagina.filter(item => item.categoria === categoria).map(item => <CardConteudo key={item.id} data={item} />)
                    }
                </div>
            </div>
        </>
    )
}