import { Container } from "./styles"
import { useEffect, useState } from "react"

import { api } from "../../services/api"

const PerfilPage = ()=> {
    const [username, setUsername] = useState('');
    const [preferences, setPreferences] = useState([]);
    const [amigos, setAmigos] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [userId, setUserId] = useState('');

    const buscarNomeAmigo = async (idAmigo) => {
        try {
        const response = await api.get(`user/show/${idAmigo}`);
        const amigo = response.data;
        return amigo.username;
        } catch (error) {
        console.log(`Erro ao buscar o nome do amigo com ID ${idAmigo}: ${error}`);
        return '';
        }
    };

    useEffect(() => {
        const obterDadosArmazenados = async () => {
        const dadosUsuario = JSON.parse(localStorage.getItem('responseData'));

        if (dadosUsuario) {
            setUsername(dadosUsuario.username || '');
            setUserId(dadosUsuario.id || '');
            setPreferences(dadosUsuario.preferences || []);
            setAmigos(dadosUsuario.friends || []);
            setGrupos(dadosUsuario.groups || []);
        }
        };

        obterDadosArmazenados();
    }, []);

    const abrirMenu = () => {
        const menu = document.getElementById("myMenu");
        if (menu) {
        menu.style.width = "250px";
        }
    };

    const fecharMenu = () => {
        const menu = document.getElementById("myMenu");
        if (menu) {
        menu.style.width = "0";
        }
    };
    return(
        
        <Container>
            <div className="min-h-screen flex items-center justify-center bg-gray-800">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="relative mt-16 h-auto lg:mt-1 py-5">
                        {/* <img
                        className="relative mt-16 h-auto lg:mt-1 flex items-center justify-center"
                        src={catImage}
                        alt="Garoto"
                        width={600}
                        height={1500}
                        /> */}
                    </div>
                    <div className="container py-4 content">
                        <h2 className="text-center mb-4 text-white text-2xl font-bold">
                        Perfil
                        </h2>
                        <table className="text-white w-full">
                        <tbody>
                            <tr className="bg-[#4e43ac]">
                            <td className="font-bold px-4 py-2 border-b border-[#4eaaff]">
                                Nome:
                            </td>
                            <td className="px-4 py-2 border-b border-[#4eaaff]">
                                {username}
                            </td>
                            </tr>
                            <tr className="bg-[#4e43ac]">
                            <td className="font-bold px-4 py-2 border-b border-[#4eaaff]">
                                ID do Usuário:
                            </td>
                            <td className="px-4 py-2 border-b border-[#4eaaff]">
                                {userId}
                            </td>
                            </tr>
                            <tr className="bg-[#4e43ac]">
                            <td className="font-bold px-4 py-2 border-b border-[#4eaaff]">
                                Preferências:
                            </td>
                            <td className="px-4 py-2 border-b border-[#4eaaff]">
                                {preferences.join(', ')}
                            </td>
                            </tr>
                            <tr className="bg-[#4e43ac]">
                            <td className="font-bold px-4 py-2 border-b border-[#4eaaff]">
                                Amigos:
                            </td>
                            <td className="px-4 py-2 border-b border-[#4eaaff]">
                                {amigos.map((amigo, index) => (
                                <span key={index}>
                                    {amigo}
                                    {index !== amigos.length - 1 && ', '}
                                </span>
                                ))}
                            </td>
                            </tr>
                            <tr className="bg-[#4e43ac]">
                            <td className="font-bold px-4 py-2">Grupos:</td>
                            <td className="px-4 py-2">
                                {grupos.map((grupo, index) => (
                                <span key={index}>
                                    {grupo}
                                    {index !== grupos.length - 1 && ', '}
                                </span>
                                ))}
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-[#4e42ac] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Voltar
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </Container>
    )

}
export default PerfilPage