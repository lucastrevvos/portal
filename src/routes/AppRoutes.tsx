import { Routes, Route } from 'react-router'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' index element={<Home />} />
            </Route>
        </Routes>
    )
}