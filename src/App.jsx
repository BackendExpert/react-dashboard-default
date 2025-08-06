import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import DashHome from './pages/Dashboard/DashHome'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/Dashboard/' element={<Dashboard /> } >
                        <Route path='Home' element={<DashHome /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
