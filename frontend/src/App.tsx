// src/App.tsx
import Header from './components/header'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Room from './pages/Room'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
export default function App() {
    return (
        <div className="app">
            <Header />

            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/room" element={<Room />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}
