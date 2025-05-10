import { ConversorMoedas } from "../../components/Utils/ConvertorMoedas";
import { IMC } from "../../components/Utils/IMC";
import { CalculadoraJurosCompostos } from "../../components/Utils/JurosCompostos";
import { CalculadoraRegraDeTres } from "../../components/Utils/RegraTres";
import { SimuladorTempoLeitura } from "../../components/Utils/SimuladorTempoLeitura";

import styles from "./styles.module.css";

export const dadosConteudo = [
  {
    id: 1,
    categoria: "tecnologia",
    tipo: "artigos",
    titulo: "O que é Nuvem?",
    resumo:
      "Descubra o que é a computação em nuvem de forma simples e como ela já faz parte do seu dia a dia — mesmo que você não perceba. Entenda seus benefícios e onde ela está presente na sua rotina.",
    link: "/categoria/tecnologia/1/?filtro=artigos",
    imagem: "/nuvem.png",
    conteudo: (
      <>
        <article className={styles.container}>
          <br />

          <p>
            A computação em nuvem deixou de ser um termo técnico para se tornar
            parte do nosso dia a dia — mesmo sem perceber. Quando você envia uma
            foto para o Google Drive, assiste a um filme na Netflix ou ouve
            música no Spotify, está usando a nuvem.
          </p>

          <h2> O que é a nuvem?</h2>
          <p>
            A "nuvem" é um conjunto de servidores acessíveis pela internet, onde
            você pode armazenar, acessar e processar dados. Ao invés de depender
            de um único dispositivo físico, como seu computador ou celular, você
            passa a depender de uma rede remota que pode ser acessada de
            qualquer lugar.
          </p>

          <h2>Tipos de nuvem:</h2>
          <ul>
            <li>
              <strong>Pública:</strong> usada por todos (ex: Google Drive)
            </li>
            <li>
              <strong>Privada:</strong> usada por empresas internamente
            </li>
            <li>
              <strong>Híbrida:</strong> mistura das duas
            </li>
          </ul>

          <h2> Aplicações no dia a dia:</h2>
          <ul>
            <li>Backup de fotos e documentos</li>
            <li>E-mails (Gmail, Outlook)</li>
            <li>Serviços de streaming</li>
            <li>Aplicativos em nuvem (Google Docs, Canva, Notion)</li>
          </ul>

          <h2> Por que é importante?</h2>
          <ul>
            <li>Acesso em qualquer lugar</li>
            <li>Menos riscos de perder arquivos</li>
            <li>Economia para empresas</li>
            <li>Facilita o trabalho remoto e a colaboração</li>
          </ul>
        </article>

        <p>
          <br />
          <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },
  {
    id: 2,
    categoria: "tecnologia",
    tipo: "artigos",
    titulo: "Diferença entre Hardware e Software ",
    resumo:
      "Entenda de forma clara e sem complicações o que são hardware e software, suas funções e como essa diferença impacta seu dia a dia com celulares, computadores e outros dispositivos.",
    link: "/categoria/tecnologia/2/?filtro=artigos",
    imagem: "/hardsoft.png",
    conteudo: (
      <>
        <article className={styles.container}>
          <br />
          <p>
            Mesmo quem não é "da área" de tecnologia já ouviu esses termos. Mas
            você sabe exatamente o que eles significam?
          </p>

          <h2> O que é hardware?</h2>
          <p>
            É a parte física de um dispositivo eletrônico — tudo aquilo que você
            pode tocar.
          </p>
          <ul>
            <li>Teclado</li>
            <li>Monitor</li>
            <li>Placa-mãe</li>
            <li>Processador</li>
            <li>Celular</li>
          </ul>

          <h2>O que é software?</h2>
          <p>
            É a parte lógica, os programas e sistemas que fazem o hardware
            funcionar.
          </p>
          <ul>
            <li>Windows</li>
            <li>Aplicativos de celular</li>
            <li>Jogos</li>
            <li>Navegadores como Chrome ou Firefox</li>
          </ul>

          <h2>Uma analogia simples:</h2>
          <p>Pense em um carro:</p>
          <ul>
            <li>
              <strong>Hardware:</strong> é o próprio carro — volante, rodas,
              motor
            </li>
            <li>
              <strong>Software:</strong> é o motorista e as instruções que fazem
              o carro funcionar
            </li>
          </ul>

          <h2>Por que saber disso ajuda?</h2>
          <ul>
            <li>Identificar problemas técnicos</li>
            <li>Entender se o defeito é físico ou do sistema</li>
            <li>Fazer compras mais conscientes</li>
          </ul>
        </article>

        <p>
          <br />
          <strong>Autor: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },
  {
    id: 3,
    categoria: "tecnologia",
    tipo: "artigos",
    titulo:
      "O que é um sistema operacional? Veja como Windows, Android e iOS funcionam",
    resumo:
      "Entenda o papel do sistema operacional no funcionamento de celulares, computadores e tablets. Descubra o que ele faz e por que é fundamental conhecer o seu para aproveitar melhor seus dispositivos.",
    link: "/categoria/tecnologia/3/?filtro=artigos",
    imagem: "/sistemasoperacionais.png",
    conteudo: (
      <>
        <article className={styles.container}>
          <br />

          <p>
            Você já parou pra pensar o que faz seu celular, tablet ou computador
            funcionar? O responsável por isso é o sistema operacional.
          </p>

          <h2>O que é um sistema operacional (SO)?</h2>
          <p>
            É o "cérebro do aparelho" — o sistema que gerencia todo o
            funcionamento do dispositivo, conectando o hardware ao software. Sem
            ele, o dispositivo simplesmente não funciona.
          </p>

          <h2>Exemplos de SOs famosos:</h2>
          <ul>
            <li>
              <strong>Windows</strong> (computadores)
            </li>
            <li>
              <strong>Android</strong> (celulares e tablets)
            </li>
            <li>
              <strong>iOS</strong> (iPhones e iPads)
            </li>
            <li>
              <strong>macOS</strong> (computadores Apple)
            </li>
            <li>
              <strong>Linux</strong> (sistemas alternativos e servidores)
            </li>
          </ul>

          <h2>O que o sistema operacional faz?</h2>
          <ul>
            <li>Gerencia memória e arquivos</li>
            <li>Controla o funcionamento dos aplicativos</li>
            <li>
              Permite que você interaja com o aparelho via tela, mouse ou
              teclado
            </li>
          </ul>

          <h2> Por que isso importa?</h2>
          <ul>
            <li>Ajuda você a entender limitações e recursos do seu aparelho</li>
            <li>Permite tomar melhores decisões ao escolher um dispositivo</li>
            <li>
              Explica por que certos apps só funcionam em determinados aparelhos
            </li>
          </ul>
        </article>

        <p>
          <br />
          <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },
  {
    id: 4,
    categoria: "financas",
    tipo: "artigos",
    titulo: "O que é a taxa Selic e como ela afeta sua vida financeira",
    resumo:
      "A taxa Selic é a taxa básica de juros da economia brasileira. Ela afeta diretamente os juros que você paga em empréstimos e o rendimento dos seus investimentos. Entender como ela funciona ajuda você a tomar melhores decisões com seu dinheiro.",
    link: "/categoria/financas/4/?filtro=artigos",
    imagem: "/selic.png",
    conteudo: (
      <>
        <article className={styles.container}>
          <br />

          <p>
            A taxa Selic é a <strong>taxa básica de juros</strong> da economia
            brasileira. Definida pelo Banco Central, ela influencia todos os
            juros do país: de financiamentos a investimentos.
          </p>

          <h2>Como a Selic funciona</h2>
          <p>
            Selic é a sigla para{" "}
            <em>Sistema Especial de Liquidação e Custódia</em>. Na prática, é a
            taxa usada nas negociações de títulos públicos entre os bancos. O
            Banco Central define a meta da Selic para controlar a{" "}
            <strong>inflação</strong> e incentivar ou desacelerar a economia.
          </p>

          <h2>Como ela afeta sua vida</h2>
          <ul>
            <li>
              <strong>Empréstimos e financiamentos:</strong> Juros mais altos
              quando a Selic sobe, e mais baixos quando ela cai.
            </li>
            <li>
              <strong>Investimentos:</strong> Rende mais em aplicações como{" "}
              <em>Tesouro Selic</em> e <em>CDBs pós-fixados</em> quando a Selic
              está alta.
            </li>
            <li>
              <strong>Inflação:</strong> Selic alta ajuda a conter o aumento dos
              preços.{" "}
              <a href="https://www.trevvos.com.br/categoria/financas/18/?filtro=artigos">
                Entenda mais sobre a Inflação
              </a>
            </li>
            <li>
              <strong>Cartão de crédito:</strong> Os juros do rotativo costumam
              subir com a Selic — mais um motivo pra evitar o parcelamento da
              fatura.
            </li>
          </ul>

          <h2>Exemplo prático</h2>
          <p>
            Se a Selic sobe de 10% para 13,75%, o financiamento do seu carro
            pode ficar mais caro, e o seu investimento no Tesouro Direto pode
            render mais.
          </p>

          <h2>Conclusão</h2>
          <p>
            Ficar de olho na Selic é importante. Mesmo sem ser economista, saber
            se ela está subindo ou caindo ajuda você a decidir se é hora de{" "}
            <strong>gastar, guardar ou investir</strong>.
          </p>
        </article>

        <p>
          <br />
          <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },
  {
    id: 5,
    categoria: "financas",
    tipo: "artigos",
    titulo:
      "Reserva de emergência: o que é, por que você precisa e onde guardar",
    resumo:
      "A reserva de emergência é um valor guardado para imprevistos, como perder o emprego ou enfrentar uma despesa médica inesperada. Ela é o primeiro passo para uma vida financeira saudável e deve estar aplicada em um lugar seguro e de fácil acesso.",
    link: "/categoria/financas/5/?filtro=financas",
    imagem: "/reserva.png",
    conteudo: (
      <>
        <article className={styles.container}>
          <br />

          <p>
            A <strong>reserva de emergência</strong> é um valor guardado para
            lidar com situações imprevistas, como demissão, problemas de saúde
            ou reparos urgentes. Ter esse dinheiro separado evita dívidas e traz
            segurança financeira.
          </p>

          <h2>Por que você precisa de uma reserva</h2>
          <p>
            Sem uma reserva, qualquer imprevisto pode virar uma bola de neve de
            dívidas. Ela garante tranquilidade e evita o uso do cartão de
            crédito ou empréstimos em situações de aperto.
          </p>

          <h2>Quanto acumular</h2>
          <p>
            O ideal é guardar de{" "}
            <strong>3 a 6 meses dos seus custos fixos</strong>. Por exemplo: se
            você gasta R$ 2.000 por mês com moradia, alimentação e transporte,
            sua reserva deve ter entre R$ 6.000 e R$ 12.000.
          </p>

          <h2>Onde aplicar sua reserva</h2>
          <ul>
            <li>
              <strong>Tesouro Selic:</strong> seguro, com liquidez e rendimento
              acima da poupança.
            </li>
            <li>
              <strong>Poupança:</strong> menos rentável, mas acessível para quem
              está começando.
            </li>
            <li>
              <strong>CDBs com liquidez diária:</strong> boa opção se tiver
              garantia do FGC.
            </li>
          </ul>

          <h2>Primeiro passo antes de investir</h2>
          <p>
            Antes de pensar em ações, criptomoedas ou fundos, monte sua reserva.
            Investimentos mais arriscados podem ter perdas ou não estar
            disponíveis no momento que você mais precisa.
          </p>

          <h2>Conclusão</h2>
          <p>
            Comece hoje a montar sua reserva. Pouco a pouco, você constrói uma
            base sólida para lidar com o inesperado e, depois disso, pode
            investir com mais segurança.
          </p>
        </article>

        <p>
          <br />
          <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },
  {
    id: 6,
    categoria: "financas",
    tipo: "artigos",
    titulo: "Diferença entre cartão de crédito e débito",
    resumo:
      "Entender a diferença entre cartão de crédito e débito ajuda a evitar dívidas e usar melhor o seu dinheiro. Cada um tem uma função e, usados com consciência, podem ser grandes aliados do seu controle financeiro.",
    link: "/categoria/financas/6/?filtro=financas",
    imagem: "/creditodebito.png",
    conteudo: (
      <>
        <article className={styles.container}>
          <br />

          <p>
            Cartão de <strong>crédito</strong> e <strong>débito</strong> parecem
            semelhantes, mas funcionam de formas bem diferentes. Entender como
            cada um funciona é essencial pra fazer boas escolhas no seu dia a
            dia.
          </p>

          <h2>Como funciona o cartão de débito</h2>
          <p>
            Ao pagar com débito, o valor é <strong>descontado na hora</strong>{" "}
            da sua conta bancária. Ele só pode ser usado se você tiver saldo
            disponível.
          </p>

          <h2>Como funciona o cartão de crédito</h2>
          <p>
            No crédito, você paga agora e só{" "}
            <strong>quita a fatura no mês seguinte</strong>. É como um
            empréstimo de curto prazo. Pode ser útil, mas exige planejamento
            para não cair nos juros altos.
          </p>

          <h2>Vantagens e armadilhas</h2>
          <ul>
            <li>
              <strong>Crédito:</strong> permite parcelar compras, acumular
              pontos e organizar gastos. Mas pode virar dívida se você gastar
              mais do que pode pagar.
            </li>
            <li>
              <strong>Débito:</strong> ajuda a controlar melhor os gastos, pois
              só gasta o que tem. Mas não tem benefícios como milhas ou
              cashback.
            </li>
          </ul>

          <h2>Dicas para usar bem os dois</h2>
          <ul>
            <li>
              Use o crédito apenas se tiver certeza que pode pagar a fatura
              inteira.
            </li>
            <li>
              Evite o parcelamento da fatura (rotativo do cartão), os juros são
              altíssimos.
            </li>
            <li>
              Use o débito para despesas do dia a dia e mantenha o controle do
              saldo.
            </li>
            <li>Tenha um limite de crédito abaixo da sua renda total.</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            Ambos os cartões têm seu papel no seu dia a dia. O segredo é saber
            quando e como usar cada um.{" "}
            <strong>Educação financeira começa nas pequenas escolhas</strong>,
            como essa.
          </p>
        </article>

        <p>
          <br />
          <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },
  {
    id: 7,
    categoria: "utilitarios",
    tipo: "calculadoras",
    titulo: "Calculadora IMC",
    resumo: "Calcule seu indice de massa corporal de uma forma simples.",
    imagem: "/utilitarios/calc-thumb.png",
    link: "/categoria/utilitarios/7/?filtro=calculadoras",
    conteudo: (
      <>
        <IMC></IMC>
      </>
    ),
  },
  {
    id: 8,
    categoria: "utilitarios",
    tipo: "calculadoras",
    titulo: "Calculadora de Juros Compostos",
    resumo: "Simule seus rendimentos com base em juros compostos mensais.",
    imagem: "/utilitarios/juros-thumb.png",
    link: "/categoria/utilitarios/8/?filtro=calculadoras",
    conteudo: (
      <>
        <CalculadoraJurosCompostos />
      </>
    ),
  },
  {
    id: 9,
    categoria: "utilitarios",
    tipo: "calculadoras",
    titulo: "Calculadora de Regra de Três",
    resumo: "Preencha três valores e descubra o quarto proporcional.",
    imagem: "/utilitarios/regra-thumb.png",
    link: "/categoria/utilitarios/9/?filtro=calculadoras",
    conteudo: (
      <>
        <CalculadoraRegraDeTres></CalculadoraRegraDeTres>
      </>
    ),
  },
  {
    id: 10,
    categoria: "utilitarios",
    tipo: "simuladores",
    titulo: "Simulador de Tempo de Leitura",
    resumo: "Descubra quanto tempo levaria para ler um texto",
    imagem: "/utilitarios/simuladorleitura-thumb.png",
    link: "/categoria/utilitarios/10/?filtro=simuladores",
    conteudo: (
      <>
        <SimuladorTempoLeitura></SimuladorTempoLeitura>
      </>
    ),
  },
  {
    id: 11,
    categoria: "utilitarios",
    tipo: "conversores",
    titulo: "Conversor de Moedas",
    resumo: "Converta valores com câmbio em tempo real",
    imagem: "/utilitarios/moedas-thumb.png",
    link: "/categoria/utilitarios/11/?filtro=conversores",
    conteudo: (
      <>
        <ConversorMoedas />
      </>
    ),
  },

  {
    id: 12,
    categoria: "saude",
    tipo: "artigos",
    titulo: "Importância do sono: por que dormir bem muda tudo na sua saúde",
    resumo:
      "Dormir bem é essencial para a saúde física, mental e emocional. O sono regula hormônios, fortalece o sistema imunológico, melhora o humor e a memória. Pequenas mudanças na rotina já podem transformar a qualidade do seu descanso.",
    imagem: "/sono.png",
    link: "/categoria/saude/12/?filtro=artigos",
    conteudo: (
      <>
        <article className={styles.container}>
          <br />

          <p>
            O sono é uma das funções mais importantes do nosso corpo. Dormir bem
            vai muito além de descansar: é durante o sono que o corpo{" "}
            <strong>
              se recupera, regula hormônios e fortalece o sistema imunológico
            </strong>
            .
          </p>

          <h2>Como funciona o sono</h2>
          <p>
            O sono é dividido em ciclos que duram cerca de 90 minutos e incluem
            fases leves, profundas e o sono REM (movimento rápido dos olhos),
            essencial para a <strong>memória e o equilíbrio emocional</strong>.
          </p>

          <h2>Benefícios de uma boa noite de sono</h2>
          <ul>
            <li>
              <strong>Mais disposição física e mental</strong>
            </li>
            <li>
              <strong>Melhora no humor e na concentração</strong>
            </li>
            <li>
              <strong>Redução do estresse</strong>
            </li>
            <li>
              <strong>Fortalecimento da imunidade</strong>
            </li>
            <li>
              <strong>Controle do apetite e peso</strong>
            </li>
          </ul>

          <h2>Dicas práticas para dormir melhor</h2>
          <ul>
            <li>Evite telas pelo menos 1 hora antes de dormir</li>
            <li>
              Crie um ritual de relaxamento (leitura, banho morno, meditação)
            </li>
            <li>Durma e acorde sempre nos mesmos horários</li>
            <li>Evite cafeína no fim do dia</li>
            <li>Mantenha o quarto escuro, silencioso e fresco</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            Não subestime o poder do sono.{" "}
            <strong>
              Investir em noites bem dormidas é investir em saúde, produtividade
              e bem-estar
            </strong>
            . Comece com pequenas mudanças e sinta a diferença no seu corpo e
            mente.
          </p>
        </article>

        <p>
          <br />
          <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },

  {
    id: 13,
    categoria: "saude",
    tipo: "artigos",
    titulo:
      "Alimentação balanceada: como montar um prato saudável no dia a dia",
    resumo:
      "Uma alimentação balanceada é a base de uma vida mais saudável. Aprender a montar um prato equilibrado com alimentos acessíveis ajuda na disposição, no controle do peso e na prevenção de doenças.",
    imagem: "/alimentacao.png",
    link: "/categoria/saude/13/?filtro=artigos",
    conteudo: (
      <>
        <article className={styles.container}>
          <br />
          <p>
            Comer bem não precisa ser caro ou complicado. Uma alimentação
            balanceada garante{" "}
            <strong>energia, saúde e qualidade de vida</strong>, e começa com
            escolhas simples no prato.
          </p>

          <h2>O que é uma alimentação equilibrada?</h2>
          <p>
            É aquela que inclui variedade, equilíbrio e moderação. Você precisa
            de todos os grupos alimentares:{" "}
            <strong>
              carboidratos, proteínas, gorduras boas, vitaminas e minerais
            </strong>
            .
          </p>

          <h2>Como montar um prato saudável</h2>
          <ul>
            <li>
              <strong>Metade do prato:</strong> verduras, legumes e frutas
            </li>
            <li>
              <strong>1/4 do prato:</strong> proteínas magras (frango, ovo,
              peixe, leguminosas)
            </li>
            <li>
              <strong>1/4 do prato:</strong> carboidratos (arroz integral,
              batata, mandioca)
            </li>
            <li>
              <strong>Gorduras boas:</strong> azeite de oliva, castanhas,
              abacate (em pequenas porções)
            </li>
          </ul>

          <h2>Dicas para o dia a dia</h2>
          <ul>
            <li>Prefira alimentos naturais e evite os ultraprocessados</li>
            <li>Inclua frutas nas refeições ou nos lanches</li>
            <li>Beba bastante água ao longo do dia</li>
            <li>Não pule refeições — isso pode causar compulsões depois</li>
            <li>Coma devagar e com atenção ao que está comendo</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            <strong>Comer bem é um hábito que se constrói aos poucos.</strong>{" "}
            Não se trata de dietas restritivas, mas de escolhas inteligentes e
            constantes. Seu corpo e sua mente agradecem!
          </p>

          <p>
            <br />
            <strong>Autor: Lucas Amaral - CEO Trevvos</strong>
          </p>
        </article>
      </>
    ),
  },

  {
    id: 14,
    categoria: "saude",
    tipo: "artigos",
    titulo: "Importância da hidratação: quanto de água beber por dia?",
    resumo:
      "A água é essencial para o funcionamento do nosso corpo. Ainda assim, muitas pessoas negligenciam esse hábito tão simples e vital. Saber a quantidade ideal de consumo e entender os benefícios da hidratação pode transformar sua saúde.",
    imagem: "/hidratacao.png",
    link: "/categoria/saude/14/?filtro=artigos",
    conteudo: (
      <>
        <article className={styles.container}>
          <p>
            A água é essencial para o funcionamento do nosso corpo. Ainda assim,
            muitas pessoas negligenciam esse hábito tão simples e vital. Saber a
            quantidade ideal de consumo e entender os benefícios da hidratação
            pode transformar sua saúde.
          </p>

          <h2> Por que a hidratação é tão importante?</h2>
          <p>
            Nosso corpo é composto por cerca de 60% de água. Ela participa de
            praticamente todas as funções vitais:
          </p>
          <ul>
            <li>Regula a temperatura corporal</li>
            <li>Transporta nutrientes</li>
            <li>Elimina toxinas</li>
            <li>Lubrifica articulações</li>
            <li>Melhora o funcionamento do intestino</li>
            <li>Mantém pele e cabelo saudáveis</li>
          </ul>

          <h2> Quanto de água devemos beber?</h2>
          <p>
            A recomendação mais comum é cerca de{" "}
            <strong>35 ml por quilo de peso corporal</strong>. Ou seja, uma
            pessoa com 70 kg deve consumir aproximadamente 2,4 litros por dia.
            Mas isso pode variar com:
          </p>
          <ul>
            <li>Atividade física</li>
            <li>Clima</li>
            <li>Alimentação</li>
            <li>Condições de saúde</li>
          </ul>
          <p>
            <em>Dica simples:</em> observar a cor da urina é um ótimo indicativo
            — quanto mais clara, melhor!
          </p>

          <h2> Como criar o hábito de se hidratar?</h2>
          <ul>
            <li>Tenha sempre uma garrafinha por perto</li>
            <li>Use apps ou alarmes pra lembrar</li>
            <li>Adicione rodelas de limão, hortelã ou pepino para dar sabor</li>
            <li>Beba um copo ao acordar e antes de dormir</li>
          </ul>

          <h2>Mitos sobre beber água</h2>
          <ul>
            <li>
              <strong>"Beber muita água faz mal"</strong>: só em casos extremos
              e muito acima da recomendação
            </li>
            <li>
              <strong>"Sede é o único sinal de desidratação"</strong>: quando
              sentimos sede, o corpo já está desidratado
            </li>
          </ul>

          <h2>Benefícios diretos da hidratação</h2>
          <ul>
            <li>Mais disposição</li>
            <li>Menos dores de cabeça</li>
            <li>Melhor concentração</li>
            <li>Pele mais bonita</li>
            <li>Controle do apetite</li>
          </ul>

          <p>
            Manter-se hidratado é uma das atitudes mais simples — e poderosas —
            que você pode adotar para cuidar do seu corpo e mente. Comece hoje e
            sinta a diferença!
          </p>
        </article>

        <br />
        <p>
          <strong>Autor: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },

  {
    id: 15,
    categoria: "tecnologia",
    tipo: "noticias",
    titulo:
      "WhatsApp agora permite múltiplos celulares com a mesma conta: veja como ativar",
    resumo:
      "O WhatsApp liberou oficialmente o recurso que permite usar uma mesma conta em mais de um celular ao mesmo tempo. A funcionalidade, aguardada por muitos usuários, já está disponível para Android e iOS.",
    imagem: "/whatsapp.png",
    link: "/categoria/tecnologia/15/?filtro=noticias",
    conteudo: (
      <>
        <article className={styles.container}>
          <p>
            O WhatsApp liberou oficialmente o recurso que permite usar uma mesma
            conta em mais de um celular ao mesmo tempo. A funcionalidade,
            aguardada por muitos usuários, já está disponível para Android e
            iOS.
          </p>

          <h2> O que mudou?</h2>
          <p>
            Antes, o WhatsApp só permitia o uso simultâneo em um celular e
            dispositivos complementares (como o WhatsApp Web ou Desktop). Agora,
            é possível usar a mesma conta principal em até{" "}
            <strong>quatro smartphones</strong> de forma sincronizada.
          </p>

          <h2> Quais as vantagens?</h2>
          <ul>
            <li>Ideal para quem usa mais de um celular no dia a dia</li>
            <li>Sincronização automática de conversas</li>
            <li>Maior flexibilidade para usuários e empresas</li>
          </ul>

          <h2> E a segurança?</h2>
          <p>
            Segundo a Meta, o recurso mantém a criptografia de ponta a ponta
            mesmo com vários aparelhos conectados. Cada celular adicional
            precisa ser autorizado manualmente.
          </p>

          <h2> Como ativar a função:</h2>
          <ol>
            <li>Atualize o WhatsApp para a versão mais recente</li>
            <li>
              No celular principal, vá em{" "}
              <strong>Configurações &gt; Aparelhos conectados</strong>
            </li>
            <li>Toque em "Conectar um aparelho"</li>
            <li>
              No celular secundário, baixe o WhatsApp e toque em "Conectar um
              aparelho"
            </li>
            <li>
              Use o celular principal para escanear o QR Code exibido no segundo
              celular
            </li>
          </ol>

          <h2> Requisitos:</h2>
          <ul>
            <li>A função está sendo liberada gradualmente</li>
            <li>
              É necessário manter o aparelho principal ativo periodicamente
            </li>
          </ul>

          <p>
            Essa atualização facilita bastante a vida de quem precisa estar
            conectado em mais de um celular — sem precisar recorrer a
            gambiarras. Fique de olho nas próximas novidades do app!
          </p>

          <hr />

          <strong>Resumo:</strong>
          <p>
            Agora é possível usar a mesma conta do WhatsApp em até 4 celulares
            diferentes. O recurso está disponível para Android e iOS e mantém a
            criptografia de ponta a ponta entre os aparelhos.
          </p>
        </article>

        <br />

        <p>
          <strong>Autor: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },

  {
    id: 16,
    categoria: "financas",
    tipo: "noticias",
    titulo: "Pix automático começa a ser testado: o que é e como vai funcionar",
    resumo:
      'O Banco Central anunciou o início dos testes do novo recurso "Pix Automático", que promete revolucionar a forma como realizamos pagamentos recorrentes no Brasil. A novidade está prevista para chegar ao público em 2024.',
    imagem: "/pix.png",
    link: "/categoria/financas/16/?filtro=noticias",
    conteudo: (
      <>
        <article className={styles.container}>
          <p>
            O Banco Central anunciou o início dos testes do novo recurso{" "}
            <strong>Pix Automático</strong>, que promete revolucionar a forma
            como realizamos pagamentos recorrentes no Brasil. A novidade está
            prevista para chegar ao público em 2024.
          </p>

          <h2> O que é o Pix Automático?</h2>
          <p>
            É uma funcionalidade que permitirá agendar pagamentos recorrentes
            via Pix. Será possível, por exemplo, pagar mensalidades de serviços
            de streaming, academia, plano de saúde e até contas fixas com débito
            automático — tudo usando Pix.
          </p>

          <h2> Como vai funcionar?</h2>
          <p>
            O usuário autoriza previamente o débito recorrente em sua conta, com
            um valor e periodicidade definidos. A autorização pode ser cancelada
            a qualquer momento, e cada débito é registrado com total
            transparência.
          </p>

          <h2>Segurança e controle</h2>
          <ul>
            <li>O cliente poderá definir limite de valor</li>
            <li>Receberá notificações de cada movimentação</li>
            <li>A autorização é digital e pode ser revogada facilmente</li>
          </ul>

          <h2>Quando será lançado?</h2>
          <p>
            O Pix Automático está em fase de testes com instituições financeiras
            e deve ser liberado para o público geral no segundo semestre de
            2024, segundo o Banco Central.
          </p>

          <h2>Impacto esperado</h2>
          <p>
            A medida deve facilitar a vida dos consumidores e empresas,
            substituindo gradualmente o tradicional débito automático, com mais
            controle e menos burocracia.
          </p>

          <hr />

          <strong>Resumo:</strong>
          <br />
          <p>
            O Banco Central iniciou os testes do Pix Automático, que permitirá
            pagamentos recorrentes com agendamento via Pix. A funcionalidade
            será lançada para o público geral ainda em 2024.
          </p>
        </article>

        <p>
          <br />
          <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },

  {
    id: 17,
    categoria: "saude",
    tipo: "noticias",
    titulo: "Nova campanha de vacinação nacional: quem deve tomar e quando",
    resumo:
      "O Ministério da Saúde deu início à nova campanha de vacinação 2024, voltada para imunizar grupos prioritários contra a gripe (influenza) e atualizar a carteira vacinal de milhões de brasileiros. A ação começou em abril e segue com calendário escalonado.",
    imagem: "/vacina.png",
    link: "/categoria/saude/17/?filtro=noticias",
    conteudo: (
      <>
        <article className={styles.container}>
          <p>
            O Ministério da Saúde deu início à nova campanha de vacinação 2024,
            voltada para imunizar grupos prioritários contra a gripe (influenza)
            e atualizar a carteira vacinal de milhões de brasileiros. A ação
            começou em abril e segue com calendário escalonado.
          </p>

          <h2>Quais vacinas estão incluídas?</h2>
          <ul>
            <li>Vacina contra a gripe (Influenza)</li>
            <li>Vacinação de rotina para crianças, adolescentes e adultos</li>
            <li>Reforço de vacinas contra COVID-19 em grupos específicos</li>
          </ul>

          <h2> Quem deve tomar?</h2>
          <p>A campanha tem foco inicial nos grupos de risco:</p>
          <ul>
            <li>Idosos com 60 anos ou mais</li>
            <li>Gestantes e puérperas (mães recentes)</li>
            <li>Crianças de 6 meses a menores de 6 anos</li>
            <li>Pessoas com comorbidades</li>
            <li>Trabalhadores da saúde e da educação</li>
            <li>Povos indígenas e ribeirinhos</li>
          </ul>

          <h2> Quando e onde se vacinar?</h2>
          <p>
            A vacinação acontece em todo o território nacional, nos postos de
            saúde do SUS. A campanha será realizada em fases, priorizando os
            grupos mais vulneráveis nas primeiras semanas.
          </p>

          <h2> Importância da campanha</h2>
          <p>
            A vacinação é essencial para prevenir surtos de gripe e reduzir
            internações. Ela também é uma forma de proteger os sistemas de
            saúde, especialmente em períodos de maior circulação de vírus.
          </p>

          <h2> Fique atento!</h2>
          <ul>
            <li>Leve documento com foto e cartão do SUS</li>
            <li>Se tiver, leve a carteira de vacinação</li>
            <li>Mesmo quem já teve gripe deve se vacinar anualmente</li>
          </ul>

          <hr />

          <strong>Resumo:</strong>
          <p>
            Começou a campanha nacional de vacinação 2024, com foco em gripe e
            atualização de vacinas. Grupos prioritários devem procurar os postos
            do SUS conforme o calendário divulgado.
          </p>
        </article>

        <p>
          <br />
          <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
        </p>
      </>
    ),
  },

  {
    id: 18,
    categoria: "financas",
    tipo: "artigos",
    titulo: "O que é a inflação? E por que ela afeta tanto a sua vida",
    resumo:
      "Inflação é o aumento geral e contínuo dos preços de produtos e serviços ao longo do tempo. Se antes você comprava um café por R$ 3 e hoje paga R$ 5, isso é inflação na prática.",
    imagem: "/inflacao.png",
    link: "/categoria/financas/18/?filtro=artigos",
    conteudo: (
      <>
        <article className={styles.container}>
          <p>
            Inflação é o aumento geral e contínuo dos preços de produtos e
            serviços ao longo do tempo. Se antes você comprava um café por R$ 3
            e hoje paga R$ 5, isso é inflação na prática.
          </p>

          <h2> Por que a inflação acontece?</h2>
          <p>A inflação pode surgir por vários motivos. Os principais:</p>
          <ul>
            <li>
              <strong>Alta demanda:</strong> Muita gente querendo comprar, pouca
              oferta. Resultado? Preço sobe.
            </li>
            <li>
              <strong>Aumento de custos:</strong> Se o combustível, a energia ou
              o dólar disparam, tudo encarece.
            </li>
            <li>
              <strong>Emissão de dinheiro:</strong> Quando o governo imprime
              dinheiro demais, o valor dele cai, e os preços sobem.
            </li>
          </ul>

          <h2> Como ela impacta o seu bolso?</h2>
          <ul>
            <li>
              O <strong>dinheiro perde valor</strong>: R$ 100 hoje não compram o
              que compravam há 2 anos.
            </li>
            <li>
              Seu <strong>salário parece encolher</strong>, mesmo que ele não
              tenha mudado.
            </li>
            <li>
              <strong>Planejar o futuro fica mais difícil</strong>: poupança e
              salário parado = perda de poder de compra.
            </li>
          </ul>

          <h2> E o que o governo faz com isso?</h2>
          <p>
            O principal controle é a <strong>taxa Selic</strong> (lembra dela?).
            <br />
            Quando a inflação dispara, o Banco Central{" "}
            <strong>
              aumenta a{" "}
              <a href="https://www.trevvos.com.br/categoria/financas/4/?filtro=artigos">
                Selic
              </a>
            </strong>{" "}
            pra frear o consumo e desacelerar os preços.
          </p>

          <h2>📈 Inflação boa vs. inflação ruim</h2>
          <ul>
            <li>
              <strong>Inflação moderada</strong>: é até esperada e saudável.
            </li>
            <li>
              <strong>Inflação alta e fora de controle</strong>: derruba
              salários, causa instabilidade e assusta os investidores.
            </li>
          </ul>

          <h2>✅ Dica final Trevvos:</h2>
          <ul>
            <li>
              Mantenha uma <strong>reserva de emergência</strong> protegida da
              inflação (ex: Tesouro Selic, CDB pós-fixado).
            </li>
            <li>Evite deixar dinheiro parado na poupança por muito tempo.</li>
            <li>
              Aprenda a ajustar seu orçamento com base no aumento real dos
              preços.
            </li>
          </ul>

          <p>
            <br />
            <strong>Autor: Lucas Amaral - CEO Trevvos</strong>
          </p>
        </article>
      </>
    ),
  },

  {
    id: 19,
    categoria: "tecnologia",
    tipo: "artigos",
    titulo:
      "KM One: O aplicativo criado para transformar a vida dos motoristas de aplicativo",
    resumo:
      "O KM One nasceu da experiência real de quem precisou trabalhar nas ruas e usou a tecnologia para criar um app que resolve problemas reais: controlar ganhos, despesas e lucros de motoristas como você.",
    imagem: "/kmone-thumb.png",
    link: "/categoria/tecnologia/19/?filtro=artigos",
    conteudo: (
      <>
        <article className={styles.container}>
          <p>
            Quando fui demitido, precisei recorrer aos apps de motorista como
            alternativa para continuar gerando renda. Mas meu lado programador e
            empreendedor nunca desligou.
          </p>

          <p>
            A partir dessa experiência, percebi na prática os desafios reais
            enfrentados por motoristas todos os dias:
          </p>
          <ul>
            <li>Entender quanto realmente estão ganhando.</li>
            <li>Controlar despesas fixas e variáveis.</li>
            <li>Planejar abastecimentos e manter a lucratividade.</li>
          </ul>

          <h2> O que é o KM One?</h2>
          <p>
            O KM One é um aplicativo criado dentro do portal Trevvos,
            desenvolvido para ajudar motoristas de Uber, 99, InDrive e outros
            apps a organizarem suas finanças e maximizarem seus ganhos.
          </p>

          <h2> Como ele funciona?</h2>
          <ul>
            <li>Registro fácil de ganhos por corrida e por app.</li>
            <li>
              Cálculo automático de lucro líquido diário, semanal e mensal.
            </li>
            <li>
              Controle detalhado de despesas: combustível, manutenção, pedágios
              e mais.
            </li>
          </ul>

          <h2> Quem está por trás?</h2>
          <p>
            O projeto nasceu dentro do ecossistema Trevvos, uma plataforma
            dedicada a criar soluções tecnológicas com impacto positivo para
            públicos diversos, sempre com visão empreendedora e propósito.
          </p>

          <h2>💡 Quer participar?</h2>
          <p>
            Estamos buscando os primeiros testadores pioneiros! Quem entrar
            agora vai ajudar a moldar a solução e terá acesso gratuito às
            primeiras versões do app.
          </p>

          <p>
            👉 Acesse a lista VIP:{" "}
            <a href="https://kmone.trevvos.com.br">
              https://kmone.trevvos.com.br
            </a>
          </p>

          <p>
            <br />
            <strong>Autor: Lucas Amaral - CEO Trevvos</strong>
          </p>
        </article>
      </>
    ),
  },
];
