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
                <img  src={logo} alt="Logotipo Trevvos" />
                <nav className="menu-desktop">
                    <ul>
                        <li><a href="/tecnologia">Tecnologia</a></li>
                        <li><a href="/financas">Finanças</a></li>
                        <li><a href="/saude">Saúde</a></li>
                        <li><a href="/utilitarios">Utilitários</a></li>
                        <li><a href="/apps">Aplicativos</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
   
            <div className='content'>
                <nav className='menu-mobile'>
                    <ul>
                        <li>Técnologia</li>
                        <li>Finanças</li>
                        <li>Saúde</li>
                    </ul> 
                </nav>
                <button className='hamburger' onClick={() => setOpen(!open)}>☰</button>
            </div>
            
                <nav className={`menu-mobile-suspenso ${open ? "open" : ""}`}>
                    <a href="/">Início</a>
                    <a href="/">Apps</a>
                    <a href="/tecnologia">Tecnologia</a>
                    <a href="/financas">Finanças</a>
                    <a href="/saude">Saúde</a>
                    <a href="/utilitarios">Utilitários</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                </nav>
            
            <Outlet />

            <Footer />
      
        </>
    )
}