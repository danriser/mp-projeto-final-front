import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie"
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const UserContext = createContext({}); 


const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [adminOptions, setAdminOptions] = useState(false)
    
    let navigate = useNavigate()
    const login = async (email, password) => {
        try{
            const response = await api.get('/admins/login', {params: {email, password}})
            
            if(response.data){
                setUser(response.data)
                api.defaults.headers.common["X-Admin-Token"] = response.data.authentication_token
                api.defaults.headers.common["X-Admin-Email"] = response.data.email
                setAdminOptions(true)
                Cookie.set('match.user', JSON.stringify(response.data), {expires: 1})
                Cookie.set('viewAdmin', JSON.stringify(true))
                toast.success("Usuário logado com sucesso!")
                navigate("/")
                
            }
        } catch(err) {
            toast.error(err.response.data? err.response.data.message : 'Algum erro ocorreu. Por favor, tente novamente.')
        }
    }
    useEffect(() => {
        const retrievedUser = Cookie.get('match.user');
        if(retrievedUser){
            let parsedUser = JSON.parse(retrievedUser)
            setUser(parsedUser)
            api.defaults.headers.common["X-Admin-Token"] = parsedUser.authentication_token
            api.defaults.headers.common["X-Admin-Email"] = parsedUser.email
        }
    }, [])

    useEffect(() => {
        const retrievedAdmin = Cookie.get('viewAdmin');
        if(retrievedAdmin){
            let parsedAdmin = JSON.parse(retrievedAdmin)
            setAdminOptions(parsedAdmin)
        }
    }, [])

    const toggleAdmin = () => {
        Cookie.set('viewAdmin', JSON.stringify(!adminOptions))
        setAdminOptions(!adminOptions)
    } 




    const logout = async () => {
        if(window.confirm("Tem certeza que deseja sair da sua conta?")){
            setUser({});
            Cookie.remove('struct.user');
            Cookie.remove('viewAdmin')
            navigate(0)
        }

    }

    return (
        <UserContext.Provider value={{login, user, adminOptions, toggleAdmin, logout}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}
export {useUserContext, UserProvider}