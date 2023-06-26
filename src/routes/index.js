import { useUserContext } from "../context/useUserContext"
import { Route, Routes, Navigate } from "react-router-dom"

import LoginPage from "../pages/login"
import Home from "../pages/home"
import PerfilPage from "../pages/perfil"
import RegisterPage from "../pages/register"
import AdminPage from "../pages/admin"
import MatchPage from "../pages/match"
const MyRoutes = () => {

    const {user} = useUserContext()    

    return (
        <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path= "/login" element = {user? <Home/> : <LoginPage/>}/>
            <Route path= "/registrar" element = {user? <Home/> : <RegisterPage/>}/>
            <Route path= "/match" element = {user? <MatchPage/> : <LoginPage/>}/>
            <Route path= "/perfil" element = {user? <PerfilPage/>: <LoginPage/>}/>
            <Route path= "/admin" element={<AdminPage/>}/>

        </Routes>
    )
}
export default MyRoutes        