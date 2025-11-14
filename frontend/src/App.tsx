// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Room from './pages/Room'
import NotFound from './pages/NotFound'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/room" element={<Room />} />
                <Route path="*" element={<NotFound />} /> {/* <-- Not Found */}
            </Routes>
        </BrowserRouter>
    )
}
