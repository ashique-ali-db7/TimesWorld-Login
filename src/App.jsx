import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/home/home'
import { useSelector } from 'react-redux'


export default function App(){
const isAuthed = useSelector(s => s.auth.isAuthed)
console.log("sssss",isAuthed)
return (
<Routes>
{/* <Route path="/" element={isAuthed ? <Navigate to="/home" /> : <Login />} />
<Route path="/home" element={isAuthed ? <Home /> : <Navigate to="/" />} />
<Route path="*" element={<Navigate to={isAuthed ? '/home' : '/'} />} /> */}
<Route path="/" element={<Login />} />
<Route path="/home" element={ <Home />} />
<Route path="*" element={<Navigate to={isAuthed ? '/home' : '/'} />} />
</Routes>
)
}