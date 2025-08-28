import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import { useSelector } from 'react-redux'


export default function App(){
const isAuthed = useSelector(s => s.auth.isAuthed)
return (
<Routes>
<Route path="/" element={isAuthed ? <Navigate to="/home" /> : <Login />} />
<Route path="/home" element={isAuthed ? <Home /> : <Navigate to="/" />} />
<Route path="*" element={<Navigate to={isAuthed ? '/home' : '/'} />} />
</Routes>
)
}