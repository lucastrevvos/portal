import { Routes, Route } from 'react-router'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import { CategoryPage } from '../pages/Category'

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' index element={<Home />} />
                <Route path='/categoria/:categoria' index element={<CategoryPage />} />
            </Route>
        </Routes>
    )
}