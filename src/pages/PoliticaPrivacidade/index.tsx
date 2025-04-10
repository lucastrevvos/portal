import { SEO } from '../../components/SEO';
import styles from './styles.module.css';

export function PoliticaPrivacidade() {
  return (
    <>
    <SEO
      title="Política de Privacidade - Trevvos"
      description="Saiba como a Trevvos coleta, usa e protege suas informações ao usar nosso portal."
      url="https://trevvos.com.br/politica-de-privacidade"
    />

    <section className={styles.container}>
      <h1>Política de Privacidade</h1>

      <p>Esta política descreve como a Trevvos coleta, usa e protege suas informações ao usar nosso site.</p>

      <h2>1. Coleta de Informações</h2>
      <p>
        Podemos coletar dados anônimos de navegação, como IP, localização aproximada e comportamento no site,
        através de ferramentas como o Google Analytics e cookies.
      </p>

      <h2>2. Cookies</h2>
      <p>
        Utilizamos cookies para melhorar sua experiência, lembrar preferências e exibir anúncios personalizados.
        Você pode desativar os cookies nas configurações do seu navegador.
      </p>

      <h2>3. Google AdSense</h2>
      <p>
        Este site exibe anúncios de parceiros do Google AdSense. O Google pode usar cookies para exibir
        anúncios baseados em visitas anteriores a este e a outros sites.
      </p>

      <h2>4. Formulários e Contato</h2>
      <p>
        Dados enviados por formulários (como nome e e-mail) são usados apenas para responder ao usuário e
        não são compartilhados com terceiros.
      </p>

      <h2>5. Alterações</h2>
      <p>
        Podemos atualizar esta política a qualquer momento. Recomendamos que você a revise periodicamente.
      </p>
    </section>
    </>
  );
}
