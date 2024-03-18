import { useState } from 'react'
import TopBar from '@/components/TopBar/TopBar.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login/Login.jsx'
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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
