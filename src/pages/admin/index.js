import React, { useState } from 'react';
import { Container, Container0 } from './styles';

const Formulario = ({ titulo, acao }) => {
  const [item, setItem] = useState('');
  const [listaItens, setListaItens] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setListaItens([...listaItens, item]);
    setItem('');
  };

  const handleClickMostrarLista = () => {
    setMostrarLista(!mostrarLista);
  };

  return (
    <div>
      <p>{titulo}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={handleChange} />
        <button type="submit">{acao}</button>
      </form>
      {listaItens.length > 0 && (
        <>
          <button onClick={handleClickMostrarLista}>
            {mostrarLista ? 'Esconder Lista' : 'Mostrar Lista'}
          </button>
          {mostrarLista && (
            <ul>
              {listaItens.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

const Estatisticas = () => {
  return (
    <div>
      
      <h1>Informaçoes dos usuarios e grupos</h1>
      
    </div>
    
  )


}

const AdminPage = () => {
  return (
    <div>
      <Container>
        <h1>Preferencias</h1>
        <Formulario titulo="Qual você deseja adicionar?" acao="Adicionar" />
        <Formulario titulo="Qual você deseja excluir?" acao="Excluir" />
        <h1>Excluir usuário</h1>
        <Formulario titulo="Qual usuário você deseja excluir?" acao="Excluir" />
      </Container>
      <hr></hr>
      <Container0>
        <h1>Qual usuario quer tirar? de qual grupo? </h1>
        <Formulario titulo="Qual você deseja excluir?" acao="Excluir" />
        <Formulario titulo="Qual grupo?" acao="Excluir" />

      </Container0>


    </div>
  );
};

export default AdminPage;
