import { useUserContext } from "../context/useUserContext"
import { Route, Routes, Navigate } from "react-router-dom"

const MyRoutes = () => {

    const {user} = useUserContext()    

    return (
        <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path= "/login" element = {user? <Home/> : <LoginPage/>}/>
            <Route path= "/registrar" element = {user? <Home/> : <Register/>}/>
            <Route path= "/match" element = {user? <MatchPage/> : <LoginPage/>}/>
            <Route path= "/perfil" element = {user? <Perfil/>: <LoginPage/>}/>
            <Route path= "/admin" element={<AdminPage/>}/>

        </Routes>
    )
}
export default MyRoutes        