import { IMC } from "../../components/Utils/IMC";
import { CalculadoraJurosCompostos } from "../../components/Utils/JurosCompostos";

export const dadosConteudo = [
    {
        id: 1,
        categoria: 'tecnologia',
        tipo: 'noticias',
        titulo: 'Novo chip revolcuiona celulares',
        resumo: 'Um novo chip promete triplicar a velocidade dos smartphones...',
        imagem: '/news/chip.png',
        conteudo: (
            <>
                <p>Um novo chip promete triplicar a velocidade dos smartphones, <a href="#" target="_blank">leia mais aqui</a>.</p>
                
                <p>
                    Um novo chip promete triplicar a velocidade dos smartphones, Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones,Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones, Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones, Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones, Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones.
                </p>
                <p>
                    Um novo chip promete triplicar a velocidade dos smartphones, Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones,Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones, Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones, Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones, Um novo chip promete triplicar a velocidade dos smartphones,
                    Um novo chip promete triplicar a velocidade dos smartphones.
                </p>
                <p>
                    <strong>Fonte: Lucas Amaral</strong>
                </p>
            </>
            ),
    },
    {
        id: 2,
        categoria: 'tecnologia',
        tipo: 'noticias',
        titulo: 'revolcuiona celulares',
        resumo: 'Um novo chip promete triplicar a velocidade dos smartphones...',
        imagem: '/news/chip.png'
    },
    {
        id: 3,
        categoria: 'tecnologia',
        tipo: 'noticias',
        titulo: 'Novo',
        resumo: 'Um novo chip promete triplicar a velocidade dos smartphones...',
        imagem: '/news/chip.png'
    },
    {
        id: 4,
        categoria: 'tecnologia',
        tipo: 'noticias',
        titulo: 'celulares',
        resumo: 'Um novo chip promete triplicar a velocidade dos smartphones...',
        imagem: '/news/chip.png'
    },
    {
        id: 5,
        categoria: 'tecnologia',
        tipo: 'aplicativos',
        titulo: 'receita',
        resumo: 'Um novo chip promete triplicar a velocidade dos smartphones...',
        imagem: '/news/chip.png'
    },
    {
        id: 6,
        categoria: 'tecnologia',
        tipo: 'artigos',
        titulo: 'algum artigo legal',
        resumo: 'Um novo chip promete triplicar a velocidade dos smartphones...',
        imagem: '/news/chip.png'
    },
    {
        id: 7,
        categoria: 'utilitarios',
        tipo: 'ferramentas',
        titulo: 'Calculadora IMC',
        resumo: 'Calcule IMC',
        imagem: '/utilitarios/calc-thumb.png',
        link: '/categoria/utilitarios/7/?filtro=ferramentas',
        conteudo: (
            <>
                <IMC></IMC>
            </>
            ),
    },
    {
        id: 8,
        categoria: 'utilitarios',
        tipo: 'ferramentas',
        titulo: 'Calculadora de Juros Compostos',
        resumo: 'Simule seus rendimentos com base em juros compostos mensais.',
        imagem: '/utilitarios/juros-thumb.png',
        link: '/categoria/utilitarios/8/?filtro=ferramentas',
        conteudo: (
            <>
                <CalculadoraJurosCompostos />
            </>
            ),
    },
    

]