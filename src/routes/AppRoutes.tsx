import { Routes, Route } from 'react-router'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import { CategoryPage } from '../pages/Category'
import { DetailContent } from '../pages/DetailContent'
import { TermosUso } from '../pages/TermosUso'
import { PoliticaPrivacidade } from '../pages/PoliticaPrivacidade'
import { Contato } from '../pages/Contato'
import { Sobre } from '../pages/Sobre'


export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' index element={<Home />} />
                <Route path='/categoria/:categoria' index element={<CategoryPage />} />
                <Route path="/categoria/:categoria/:id" element={<DetailContent />} />
                <Route path="/termos" element={<TermosUso />} />
                <Route path="/privacidade" element={<PoliticaPrivacidade />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobre" element={<Sobre />} />
            </Route>
        </Routes>
    )
}