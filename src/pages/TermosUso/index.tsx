import { SEO } from '../../components/SEO';
import styles from './styles.module.css';

export function TermosUso() {
  return (
    <>
    <SEO
                title="Termos de Uso - Trevvos"
                description="Leia os termos de uso da Trevvos para entender suas responsabilidades e direitos ao acessar o portal."
                url="https://trevvos.com.br/termos-de-uso"
            />
    <section className={styles.container}>
      <h1>Termos de Uso</h1>
      <p>Bem-vindo ao portal Trevvos. Ao acessar este site, você concorda com os termos abaixo:</p>

      <h2>1. Uso da Plataforma</h2>
      <p>
        Este site oferece conteúdo informativo e ferramentas online (como calculadoras). O uso deve ser pessoal
        e não comercial.
      </p>

      <h2>2. Conteúdo e Responsabilidade</h2>
      <p>
        Nos esforçamos para manter as informações atualizadas, mas não garantimos precisão total.
        O uso dos utilitários é por conta e risco do usuário.
      </p>

      <h2>3. Propriedade Intelectual</h2>
      <p>
        Todo o conteúdo (textos, imagens, ferramentas) pertence à Trevvos e não pode ser copiado ou distribuído
        sem autorização.
      </p>

      <h2>4. Privacidade</h2>
      <p>
        Coletamos dados básicos de navegação (cookies e analytics) para melhorar a experiência.
        Consulte nossa Política de Privacidade para mais detalhes.
      </p>

      <h2>5. Alterações</h2>
      <p>
        Podemos alterar os termos a qualquer momento. Recomendamos que os usuários revisitem esta página
        periodicamente.
      </p>
    </section>
    </>
  );
}
