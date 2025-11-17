// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Room from './pages/Room'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/room" element={<Room />} />
                    <Route path="*" element={<NotFound />} />{' '}
                    {/* <-- Not Found */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
