import styles from './styles.module.css';

export function Sobre() {
  return (
    <section className={styles.container}>
      <h1>Sobre a Trevvos</h1>

      <p>
        A Trevvos é uma iniciativa brasileira que combina conteúdo informativo com o desenvolvimento de
        soluções digitais. Nosso foco está nas áreas de <strong>Tecnologia</strong>, <strong>Finanças</strong> e <strong>Saúde</strong>.
      </p>

      <p>
        Acreditamos que o conhecimento deve ser acessível e útil, por isso unimos artigos relevantes,
        ferramentas práticas e, em breve, uma série de aplicativos gratuitos para facilitar a vida das pessoas.
      </p>

      <p>
        Estamos em constante construção, sempre guiados pelo propósito de tornar o digital mais
        humano, intuitivo e útil no cotidiano.
      </p>
    </section>
  );
}
