import { useForm, ValidationError } from '@formspree/react';
import styles from './styles.module.css';
import { SEO } from '../../components/SEO';

export function Contato() {
  const [state, handleSubmit] = useForm("xyzebnjv");

  if (state.succeeded) {
    return <p className={styles.successMessage}>Obrigado por entrar em contato! Responderemos em breve. ✅</p>;
  }

  return (
    <>
    <SEO
      title="Fale conosco - Trevvos"
      description="Envie dúvidas, sugestões ou propostas pelo nosso formulário de contato."
      url="https://trevvos.com.br/contato"
    />
      <section className={styles.container}>
        <h1>Entre em Contato</h1>
        <p>Tem dúvidas, sugestões ou propostas? Envie sua mensagem abaixo:</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows={6} required />
          <ValidationError prefix="Mensagem" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}
