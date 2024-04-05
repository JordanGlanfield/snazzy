import TopBar from '@/components/TopBar/TopBar.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login/Login.jsx'
import Chat from '@/pages/Chat/Chat.jsx'

function App() {
    return (
        <>
            <BrowserRouter>
                <TopBar></TopBar>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="chat" element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
