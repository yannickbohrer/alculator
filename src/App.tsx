import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Landing from './pages/Landing'


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="*" element={<Landing />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
