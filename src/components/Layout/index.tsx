import './styles.css'
import logo from '../../assets/logotipo-trevvos.png'
import { Outlet } from 'react-router'
import { useState } from 'react'
import { Footer } from '../Footer'

export function Layout() {
    const [open, setOpen] = useState(false)

    return (
        <>
        <header>
            <div className="navbar">
            <a href="/"><img  src={logo} alt="Logotipo Trevvos" /></a>
                <nav className="menu-desktop">
                    <ul>
                        <li><a href="/categoria/tecnologia">Tecnologia</a></li>
                        <li><a href="/categoria/financas">Finanças</a></li>
                        <li><a href="/categoria/saude">Saúde</a></li>
                        <li><a href="/categoria/utilitarios">Utilitários</a></li>
                        <li><a href="/categoria/tecnologia/?filtro=aplicativos">Aplicativos</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
   
            <div className='content'>
                <nav className='menu-mobile'>
                    <ul>
                        <a href="/categoria/tecnologia">Tecnologia</a>
                        <a href="/categoria/financas">Finanças</a>
                        <a href="/categoria/saude">Saúde</a>
                    </ul> 
                </nav>
                <button className='hamburger' onClick={() => setOpen(!open)}>☰</button>
            </div>
            
                <nav className={`menu-mobile-suspenso ${open ? "open" : ""}`}>
                    <a href="/">Início</a>
                    <a href="/categoria/tecnologia/?filtro=aplicativos">Aplicativos</a>
                    <a href="/categoria/tecnologia">Tecnologia</a>
                    <a href="/categoria/financas">Finanças</a>
                    <a href="/categoria/saude">Saúde</a>
                    <a href="/categoria/utilitarios">Utilitários</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                </nav>
            
            <Outlet />

            <Footer />
      
        </>
    )
}