import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import DashHome from './pages/Dashboard/DashHome'
import Notifications from './pages/Dashboard/Notifications'
import Chats from './pages/Dashboard/Chats'


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/Dashboard/' element={<Dashboard /> } >
                        <Route path='Home' element={<DashHome /> } />
                        <Route path='Notifications' element={<Notifications /> } />
                        <Route path='Chats' element={<Chats /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
