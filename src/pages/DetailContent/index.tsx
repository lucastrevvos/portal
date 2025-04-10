import { useParams } from 'react-router'
import styles from './styles.module.css'
import { dadosConteudo } from '../Category/dadosConteudo'
import { Breadcrumb } from '../../components/Breadcrumb'
import { SEO } from '../../components/SEO'

export function DetailContent() {
  const { id, categoria } = useParams()

  const item = dadosConteudo.find(
    item => item.id === Number(id) && item.categoria === categoria
  )

  if (!item) {
    return <p>Conteúdo não encontrado.</p>
  }

  const url = `https://trevvos.com.br/categoria/${categoria}/${item.id}/?filtro=${item.tipo}`

  return (
    <div className={styles.container}>
      <SEO
        title={`${item.titulo} - Trevvos`}
        description={item.resumo || 'Conteúdo completo disponível no portal Trevvos.'}
        image={`https://trevvos.com.br${item.imagem}`}
        url={url}
      />

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
