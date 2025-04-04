import { Routes, Route } from 'react-router'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import { CategoryPage } from '../pages/Category'
import { DetailContent } from '../pages/DetailContent'

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' index element={<Home />} />
                <Route path='/categoria/:categoria' index element={<CategoryPage />} />
                <Route path="/categoria/:categoria/:id" element={<DetailContent />} />
            </Route>
        </Routes>
    )
}