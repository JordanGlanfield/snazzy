import { useState } from 'react'
import TopBar from '@/components/TopBar/TopBar.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login/Login.jsx'
import Chat from '@/pages/Chat/Chat.jsx'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <TopBar></TopBar>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="chat" element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
