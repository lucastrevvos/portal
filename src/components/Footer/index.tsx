import styles from './styles.module.css'

export function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>TREVVOS</h1>
                <div>
                    <span>
                        <h2>TREVVOS</h2>
                        <ul>
                            <li><a href="/sobre">Sobre</a></li>
                            <li><a href="/contato">Contato</a></li>
                            <li><a href="/privacidade">Politíca de Privacidade</a></li>
                            <li><a href="/termos">Termos de Uso</a></li>
                        </ul>
                    </span>
                    <span>
                        <h2>CATEGORIAS</h2>
                        <ul>
                            <li><a href="/categoria/aplicativos">Aplicativos</a></li>
                            <li><a href="/categoria/tecnologia">Tecnologia</a></li>
                            <li><a href="/categoria/financas">Finanças</a></li>
                            <li><a href="/categoria/saude">Saúde</a></li>
                            <li><a href="/utilitarios">Utilitários</a></li>
                        </ul>
                    </span>
                </div>
                    <h2>REDES SOCIAIS</h2>
                <div className={styles.social}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                     
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </div>
                <footer>
                   2025 Trevvos. Todos os direitos reservados.
                </footer>                
            </div>
        </div>
    )
}