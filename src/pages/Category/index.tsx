import { useParams } from "react-router"
import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { dadosConteudo } from './dadosConteudo'
import { CardConteudo } from "../../components/CardConteudo"

export function CategoryPage() {
    const {categoria} = useParams()
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState('noticias')
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
        setPaginaAtual(1)
      }, [busca, filtro])

    return (
        <>
            <div className={styles.container}>
                <h1>{categoria?.toLocaleUpperCase()}</h1>
                <div>
                    <select name="tipo" id="tipo" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                        <option value="noticias">Notícias</option>
                        <option value="artigos">Artigos</option>
                        <option value="apps">Aplicativos</option>
                    </select>
                </div>
                <span>Página {paginaAtual}</span>
                <input type="text" placeholder="Buscar por titulo..." value={busca} onChange={(e) => setBusca(e.target.value)} />

                <div>
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