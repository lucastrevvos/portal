import styles from './styles.module.css';

export function Contato() {
  return (
    <section className={styles.container}>
      <h1>Entre em Contato</h1>

      <p>
        Tem alguma dúvida, sugestão ou proposta? Envie sua mensagem por e-mail ou preencha o formulário abaixo:
      </p>

      <ul>
        <li>📧 contato@trevvos.com.br</li>
      </ul>

      <form className={styles.form}>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem..." required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
