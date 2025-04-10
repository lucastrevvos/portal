
import { ConversorMoedas } from "../../components/Utils/ConvertorMoedas";
import { IMC } from "../../components/Utils/IMC";
import { CalculadoraJurosCompostos } from "../../components/Utils/JurosCompostos";
import { CalculadoraRegraDeTres } from "../../components/Utils/RegraTres";
import { SimuladorTempoLeitura } from "../../components/Utils/SimuladorTempoLeitura";

import styles from './styles.module.css'

export const dadosConteudo = [
    {
        id: 1,
        categoria: 'tecnologia',
        tipo: 'artigos',
        titulo: 'O que é Nuvem?',
        resumo: 'Descubra o que é a computação em nuvem de forma simples e como ela já faz parte do seu dia a dia — mesmo que você não perceba. Entenda seus benefícios e onde ela está presente na sua rotina.',
        link: '/categoria/tecnologia/1/?filtro=artigos',
        imagem: '/nuvem.png',
        conteudo: (
            <>
                <article className={styles.container}>
                <br />

                    <p>A computação em nuvem deixou de ser um termo técnico para se tornar parte do nosso dia a dia — mesmo sem perceber. 
                    Quando você envia uma foto para o Google Drive, assiste a um filme na Netflix ou ouve música no Spotify, está usando a nuvem.</p>

                    <h2> O que é a nuvem?</h2>
                    <p>A "nuvem" é um conjunto de servidores acessíveis pela internet, onde você pode armazenar, acessar e processar dados. 
                    Ao invés de depender de um único dispositivo físico, como seu computador ou celular, você passa a depender de uma rede remota que pode ser acessada de qualquer lugar.</p>

                    <h2>Tipos de nuvem:</h2>
                    <ul>
                        <li><strong>Pública:</strong> usada por todos (ex: Google Drive)</li>
                        <li><strong>Privada:</strong> usada por empresas internamente</li>
                        <li><strong>Híbrida:</strong> mistura das duas</li>
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
        categoria: 'tecnologia',
        tipo: 'artigos',
        titulo: 'Diferença entre Hardware e Software ',
        resumo: 'Entenda de forma clara e sem complicações o que são hardware e software, suas funções e como essa diferença impacta seu dia a dia com celulares, computadores e outros dispositivos.',
        link: '/categoria/tecnologia/2/?filtro=artigos',
        imagem: '/hardsoft.png',
        conteudo: (
            <>
                    <article className={styles.container}>
                    <br />
                        <p>Mesmo quem não é "da área" de tecnologia já ouviu esses termos. Mas você sabe exatamente o que eles significam?</p>

                        <h2> O que é hardware?</h2>
                        <p>É a parte física de um dispositivo eletrônico — tudo aquilo que você pode tocar.</p>
                        <ul>
                            <li>Teclado</li>
                            <li>Monitor</li>
                            <li>Placa-mãe</li>
                            <li>Processador</li>
                            <li>Celular</li>
                        </ul>

                        <h2>O que é software?</h2>
                        <p>É a parte lógica, os programas e sistemas que fazem o hardware funcionar.</p>
                        <ul>
                            <li>Windows</li>
                            <li>Aplicativos de celular</li>
                            <li>Jogos</li>
                            <li>Navegadores como Chrome ou Firefox</li>
                        </ul>

                        <h2>Uma analogia simples:</h2>
                        <p>Pense em um carro:</p>
                        <ul>
                            <li><strong>Hardware:</strong> é o próprio carro — volante, rodas, motor</li>
                            <li><strong>Software:</strong> é o motorista e as instruções que fazem o carro funcionar</li>
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
        )
    },
    {
        id: 3,
        categoria: 'tecnologia',
        tipo: 'artigos',
        titulo: 'O que é um sistema operacional? Veja como Windows, Android e iOS funcionam',
        resumo: 'Entenda o papel do sistema operacional no funcionamento de celulares, computadores e tablets. Descubra o que ele faz e por que é fundamental conhecer o seu para aproveitar melhor seus dispositivos.',
        link: '/categoria/tecnologia/3/?filtro=artigos',
        imagem: '/sistemasoperacionais.png',
        conteudo: (
            <>

                <article className={styles.container}>
                <br />

                <p>Você já parou pra pensar o que faz seu celular, tablet ou computador funcionar? O responsável por isso é o sistema operacional.</p>

                <h2>O que é um sistema operacional (SO)?</h2>
                <p>É o "cérebro do aparelho" — o sistema que gerencia todo o funcionamento do dispositivo, conectando o hardware ao software. Sem ele, o dispositivo simplesmente não funciona.</p>

                <h2>Exemplos de SOs famosos:</h2>
                <ul>
                    <li><strong>Windows</strong> (computadores)</li>
                    <li><strong>Android</strong> (celulares e tablets)</li>
                    <li><strong>iOS</strong> (iPhones e iPads)</li>
                    <li><strong>macOS</strong> (computadores Apple)</li>
                    <li><strong>Linux</strong> (sistemas alternativos e servidores)</li>
                </ul>

                <h2>O que o sistema operacional faz?</h2>
                <ul>
                    <li>Gerencia memória e arquivos</li>
                    <li>Controla o funcionamento dos aplicativos</li>
                    <li>Permite que você interaja com o aparelho via tela, mouse ou teclado</li>
                </ul>

                <h2> Por que isso importa?</h2>
                <ul>
                    <li>Ajuda você a entender limitações e recursos do seu aparelho</li>
                    <li>Permite tomar melhores decisões ao escolher um dispositivo</li>
                    <li>Explica por que certos apps só funcionam em determinados aparelhos</li>
                </ul>
                </article>

                <p>
                    <br />
                    <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
                </p>
            
            
            </>
        )
    },
    {
        id: 4,
        categoria: 'financas',
        tipo: 'artigos',
        titulo: 'O que é a taxa Selic e como ela afeta sua vida financeira',
        resumo: 'A taxa Selic é a taxa básica de juros da economia brasileira. Ela afeta diretamente os juros que você paga em empréstimos e o rendimento dos seus investimentos. Entender como ela funciona ajuda você a tomar melhores decisões com seu dinheiro.',
        link: '/categoria/financas/4/?filtro=financas',
        imagem: '/selic.png',
        conteudo: (
            <>
                <article className={styles.container}>
                <br />

                    <p>A taxa Selic é a <strong>taxa básica de juros</strong> da economia brasileira. Definida pelo Banco Central, ela influencia todos os juros do país: de financiamentos a investimentos.</p>

                    <h2>Como a Selic funciona</h2>
                    <p>Selic é a sigla para <em>Sistema Especial de Liquidação e Custódia</em>. Na prática, é a taxa usada nas negociações de títulos públicos entre os bancos. O Banco Central define a meta da Selic para controlar a <strong>inflação</strong> e incentivar ou desacelerar a economia.</p>

                    <h2>Como ela afeta sua vida</h2>
                    <ul>
                        <li><strong>Empréstimos e financiamentos:</strong> Juros mais altos quando a Selic sobe, e mais baixos quando ela cai.</li>
                        <li><strong>Investimentos:</strong> Rende mais em aplicações como <em>Tesouro Selic</em> e <em>CDBs pós-fixados</em> quando a Selic está alta.</li>
                        <li><strong>Inflação:</strong> Selic alta ajuda a conter o aumento dos preços.</li>
                        <li><strong>Cartão de crédito:</strong> Os juros do rotativo costumam subir com a Selic — mais um motivo pra evitar o parcelamento da fatura.</li>
                    </ul>

                    <h2>Exemplo prático</h2>
                    <p>Se a Selic sobe de 10% para 13,75%, o financiamento do seu carro pode ficar mais caro, e o seu investimento no Tesouro Direto pode render mais.</p>

                    <h2>Conclusão</h2>
                    <p>Ficar de olho na Selic é importante. Mesmo sem ser economista, saber se ela está subindo ou caindo ajuda você a decidir se é hora de <strong>gastar, guardar ou investir</strong>.</p>
                    </article>

                    <p>
                        <br />
                        <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
                    </p>
            </>
        )
    },
    {
        id: 5,
        categoria: 'financas',
        tipo: 'artigos',
        titulo: 'Reserva de emergência: o que é, por que você precisa e onde guardar',
        resumo: 'A reserva de emergência é um valor guardado para imprevistos, como perder o emprego ou enfrentar uma despesa médica inesperada. Ela é o primeiro passo para uma vida financeira saudável e deve estar aplicada em um lugar seguro e de fácil acesso.',
        link: '/categoria/financas/5/?filtro=financas',
        imagem: '/reserva.png',
        conteudo: (
            <>
                <article className={styles.container}>
                <br />

                    <p>A <strong>reserva de emergência</strong> é um valor guardado para lidar com situações imprevistas, como demissão, problemas de saúde ou reparos urgentes. Ter esse dinheiro separado evita dívidas e traz segurança financeira.</p>

                    <h2>Por que você precisa de uma reserva</h2>
                    <p>Sem uma reserva, qualquer imprevisto pode virar uma bola de neve de dívidas. Ela garante tranquilidade e evita o uso do cartão de crédito ou empréstimos em situações de aperto.</p>

                    <h2>Quanto acumular</h2>
                    <p>O ideal é guardar de <strong>3 a 6 meses dos seus custos fixos</strong>. Por exemplo: se você gasta R$ 2.000 por mês com moradia, alimentação e transporte, sua reserva deve ter entre R$ 6.000 e R$ 12.000.</p>

                    <h2>Onde aplicar sua reserva</h2>
                    <ul>
                        <li><strong>Tesouro Selic:</strong> seguro, com liquidez e rendimento acima da poupança.</li>
                        <li><strong>Poupança:</strong> menos rentável, mas acessível para quem está começando.</li>
                        <li><strong>CDBs com liquidez diária:</strong> boa opção se tiver garantia do FGC.</li>
                    </ul>

                    <h2>Primeiro passo antes de investir</h2>
                    <p>Antes de pensar em ações, criptomoedas ou fundos, monte sua reserva. Investimentos mais arriscados podem ter perdas ou não estar disponíveis no momento que você mais precisa.</p>

                    <h2>Conclusão</h2>
                    <p>Comece hoje a montar sua reserva. Pouco a pouco, você constrói uma base sólida para lidar com o inesperado e, depois disso, pode investir com mais segurança.</p>
                    </article>

                    <p>
                        <br />
                        <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
                    </p>
            </>
        )
    },
    {
        id: 6,
        categoria: 'financas',
        tipo: 'artigos',
        titulo: 'Diferença entre cartão de crédito e débito',
        resumo: 'Entender a diferença entre cartão de crédito e débito ajuda a evitar dívidas e usar melhor o seu dinheiro. Cada um tem uma função e, usados com consciência, podem ser grandes aliados do seu controle financeiro.',
        link: '/categoria/financas/6/?filtro=financas',
        imagem: '/creditodebito.png',
        conteudo: (
            <>
                <article className={styles.container}>
                <br />

                    <p>Cartão de <strong>crédito</strong> e <strong>débito</strong> parecem semelhantes, mas funcionam de formas bem diferentes. Entender como cada um funciona é essencial pra fazer boas escolhas no seu dia a dia.</p>

                    <h2>Como funciona o cartão de débito</h2>
                    <p>Ao pagar com débito, o valor é <strong>descontado na hora</strong> da sua conta bancária. Ele só pode ser usado se você tiver saldo disponível.</p>

                    <h2>Como funciona o cartão de crédito</h2>
                    <p>No crédito, você paga agora e só <strong>quita a fatura no mês seguinte</strong>. É como um empréstimo de curto prazo. Pode ser útil, mas exige planejamento para não cair nos juros altos.</p>

                    <h2>Vantagens e armadilhas</h2>
                    <ul>
                        <li><strong>Crédito:</strong> permite parcelar compras, acumular pontos e organizar gastos. Mas pode virar dívida se você gastar mais do que pode pagar.</li>
                        <li><strong>Débito:</strong> ajuda a controlar melhor os gastos, pois só gasta o que tem. Mas não tem benefícios como milhas ou cashback.</li>
                    </ul>

                    <h2>Dicas para usar bem os dois</h2>
                    <ul>
                        <li>Use o crédito apenas se tiver certeza que pode pagar a fatura inteira.</li>
                        <li>Evite o parcelamento da fatura (rotativo do cartão), os juros são altíssimos.</li>
                        <li>Use o débito para despesas do dia a dia e mantenha o controle do saldo.</li>
                        <li>Tenha um limite de crédito abaixo da sua renda total.</li>
                    </ul>

                    <h2>Conclusão</h2>
                    <p>Ambos os cartões têm seu papel no seu dia a dia. O segredo é saber quando e como usar cada um. <strong>Educação financeira começa nas pequenas escolhas</strong>, como essa.</p>
                    </article>

                    <p>
                        <br />
                        <strong>Fonte: Lucas Amaral - CEO Trevvos</strong>
                    </p>
            </>
        )
    },
    {
        id: 7,
        categoria: 'utilitarios',
        tipo: 'calculadoras',
        titulo: 'Calculadora IMC',
        resumo: 'Calcule IMC',
        imagem: '/utilitarios/calc-thumb.png',
        link: '/categoria/utilitarios/7/?filtro=calculadoras',
        conteudo: (
            <>
                <IMC></IMC>
            </>
            ),
    },
    {
        id: 8,
        categoria: 'utilitarios',
        tipo: 'calculadoras',
        titulo: 'Calculadora de Juros Compostos',
        resumo: 'Simule seus rendimentos com base em juros compostos mensais.',
        imagem: '/utilitarios/juros-thumb.png',
        link: '/categoria/utilitarios/8/?filtro=calculadoras',
        conteudo: (
            <>
                <CalculadoraJurosCompostos />
            </>
            ),
    },
    {
        id: 9,
        categoria: 'utilitarios',
        tipo: 'calculadoras',
        titulo: 'Calculadora de Regra de Três',
        resumo: 'Preencha três valores e descubra o quarto proporcional.',
        imagem: '/utilitarios/regra-thumb.png',
        link: '/categoria/utilitarios/9/?filtro=calculadoras',
        conteudo: (
            <>
                <CalculadoraRegraDeTres></CalculadoraRegraDeTres>
            </>
            ),
    },
    {
        id: 10,
        categoria: 'utilitarios',
        tipo: 'simuladores',
        titulo: 'Simulador de Tempo de Leitura',
        resumo: 'Descubra quanto tempo levaria para ler um texto',
        imagem: '/utilitarios/simuladorleitura-thumb.png',
        link: '/categoria/utilitarios/10/?filtro=simuladores',
        conteudo: (
            <>
                <SimuladorTempoLeitura></SimuladorTempoLeitura>
            </>
            ),
    },
    {
        id: 11,
        categoria: 'utilitarios',
        tipo: 'conversores',
        titulo: 'Conversor de Moedas',
        resumo: 'Converta valores com câmbio em tempo real',
        imagem: '/utilitarios/moedas-thumb.png',
        link: '/categoria/utilitarios/11/?filtro=conversores',
        conteudo: (
            <>
                <ConversorMoedas />
            </>
            ),
    },

    {
        id: 12,
        categoria: 'saude',
        tipo: 'artigos',
        titulo: 'Importância do sono: por que dormir bem muda tudo na sua saúde',
        resumo: 'Dormir bem é essencial para a saúde física, mental e emocional. O sono regula hormônios, fortalece o sistema imunológico, melhora o humor e a memória. Pequenas mudanças na rotina já podem transformar a qualidade do seu descanso.',
        imagem: '/sono.png',
        link: '/categoria/saude/12/?filtro=artigos',
        conteudo: (
            <>
                <article className={styles.container}>
                <br />

                    <p>O sono é uma das funções mais importantes do nosso corpo. Dormir bem vai muito além de descansar: é durante o sono que o corpo <strong>se recupera, regula hormônios e fortalece o sistema imunológico</strong>.</p>

                    <h2>Como funciona o sono</h2>
                    <p>O sono é dividido em ciclos que duram cerca de 90 minutos e incluem fases leves, profundas e o sono REM (movimento rápido dos olhos), essencial para a <strong>memória e o equilíbrio emocional</strong>.</p>

                    <h2>Benefícios de uma boa noite de sono</h2>
                    <ul>
                        <li><strong>Mais disposição física e mental</strong></li>
                        <li><strong>Melhora no humor e na concentração</strong></li>
                        <li><strong>Redução do estresse</strong></li>
                        <li><strong>Fortalecimento da imunidade</strong></li>
                        <li><strong>Controle do apetite e peso</strong></li>
                    </ul>

                    <h2>Dicas práticas para dormir melhor</h2>
                    <ul>
                        <li>Evite telas pelo menos 1 hora antes de dormir</li>
                        <li>Crie um ritual de relaxamento (leitura, banho morno, meditação)</li>
                        <li>Durma e acorde sempre nos mesmos horários</li>
                        <li>Evite cafeína no fim do dia</li>
                        <li>Mantenha o quarto escuro, silencioso e fresco</li>
                    </ul>

                    <h2>Conclusão</h2>
                    <p>Não subestime o poder do sono. <strong>Investir em noites bem dormidas é investir em saúde, produtividade e bem-estar</strong>. Comece com pequenas mudanças e sinta a diferença no seu corpo e mente.</p>
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
        categoria: 'saude',
        tipo: 'artigos',
        titulo: 'Alimentação balanceada: como montar um prato saudável no dia a dia',
        resumo: 'Uma alimentação balanceada é a base de uma vida mais saudável. Aprender a montar um prato equilibrado com alimentos acessíveis ajuda na disposição, no controle do peso e na prevenção de doenças.',
        imagem: '/alimentacao.png',
        link: '/categoria/saude/13/?filtro=artigos',
        conteudo: (
            <>
                <article className={styles.container}>
                    <br />
                    <p>Comer bem não precisa ser caro ou complicado. Uma alimentação balanceada garante <strong>energia, saúde e qualidade de vida</strong>, e começa com escolhas simples no prato.</p>

                    <h2>O que é uma alimentação equilibrada?</h2>
                    <p>É aquela que inclui variedade, equilíbrio e moderação. Você precisa de todos os grupos alimentares: <strong>carboidratos, proteínas, gorduras boas, vitaminas e minerais</strong>.</p>

                    <h2>Como montar um prato saudável</h2>
                    <ul>
                        <li><strong>Metade do prato:</strong> verduras, legumes e frutas</li>
                        <li><strong>1/4 do prato:</strong> proteínas magras (frango, ovo, peixe, leguminosas)</li>
                        <li><strong>1/4 do prato:</strong> carboidratos (arroz integral, batata, mandioca)</li>
                        <li><strong>Gorduras boas:</strong> azeite de oliva, castanhas, abacate (em pequenas porções)</li>
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
                    <p><strong>Comer bem é um hábito que se constrói aos poucos.</strong> Não se trata de dietas restritivas, mas de escolhas inteligentes e constantes. Seu corpo e sua mente agradecem!</p>
                    
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
        categoria: 'saude',
        tipo: 'artigos',
        titulo: 'Importância da hidratação: quanto de água beber por dia?',
        resumo: 'A água é essencial para o funcionamento do nosso corpo. Ainda assim, muitas pessoas negligenciam esse hábito tão simples e vital. Saber a quantidade ideal de consumo e entender os benefícios da hidratação pode transformar sua saúde.',
        imagem: '/hidratacao.png',
        link: '/categoria/saude/14/?filtro=artigos',
        conteudo: (
        <>
        <article className={styles.container}>
        
        <p>A água é essencial para o funcionamento do nosso corpo. Ainda assim, muitas pessoas negligenciam esse hábito tão simples e vital. Saber a quantidade ideal de consumo e entender os benefícios da hidratação pode transformar sua saúde.</p>
        
        <h2> Por que a hidratação é tão importante?</h2>
        <p>Nosso corpo é composto por cerca de 60% de água. Ela participa de praticamente todas as funções vitais:</p>
        <ul>
        <li>Regula a temperatura corporal</li>
        <li>Transporta nutrientes</li>
        <li>Elimina toxinas</li>
        <li>Lubrifica articulações</li>
        <li>Melhora o funcionamento do intestino</li>
        <li>Mantém pele e cabelo saudáveis</li>
        </ul>
        
        <h2> Quanto de água devemos beber?</h2>
        <p>A recomendação mais comum é cerca de <strong>35 ml por quilo de peso corporal</strong>. Ou seja, uma pessoa com 70 kg deve consumir aproximadamente 2,4 litros por dia. Mas isso pode variar com:</p>
        <ul>
        <li>Atividade física</li>
        <li>Clima</li>
        <li>Alimentação</li>
        <li>Condições de saúde</li>
        </ul>
        <p><em>Dica simples:</em> observar a cor da urina é um ótimo indicativo — quanto mais clara, melhor!</p>
        
        <h2> Como criar o hábito de se hidratar?</h2>
        <ul>
        <li>Tenha sempre uma garrafinha por perto</li>
        <li>Use apps ou alarmes pra lembrar</li>
        <li>Adicione rodelas de limão, hortelã ou pepino para dar sabor</li>
        <li>Beba um copo ao acordar e antes de dormir</li>
        </ul>
        
        <h2>Mitos sobre beber água</h2>
        <ul>
        <li><strong>"Beber muita água faz mal"</strong>: só em casos extremos e muito acima da recomendação</li>
        <li><strong>"Sede é o único sinal de desidratação"</strong>: quando sentimos sede, o corpo já está desidratado</li>
        </ul>
        
        <h2>Benefícios diretos da hidratação</h2>
        <ul>
        <li>Mais disposição</li>
        <li>Menos dores de cabeça</li>
        <li>Melhor concentração</li>
        <li>Pele mais bonita</li>
        <li>Controle do apetite</li>
        </ul>
        
        <p>Manter-se hidratado é uma das atitudes mais simples — e poderosas — que você pode adotar para cuidar do seu corpo e mente. Comece hoje e sinta a diferença!</p>
        </article>
        
        <br />
        <p>
        <strong>Autor: Lucas Amaral - CEO Trevvos</strong>
        </p>
        </>
        ),
        },
    
    

]