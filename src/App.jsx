import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/home/home'



export default function App(){

return (
<Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={ <Home />} />
<Route path="*" element={<Navigate to={'/'} />} />
</Routes>
)
}