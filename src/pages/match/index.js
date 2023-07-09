import React, { useState } from 'react';
import { Container, HeaderContainer, HeaderTitle } from './styles';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';

const Entrada = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Match</title>
      //<link rel="stylesheet" href="styleperfil.css" />
    </Helmet>
  )
}

const Cabeçalho = () => {
  return (
    <HeaderContainer>
      <nav>
      <div className="image-container">
        <a href="#" target="_blank">
          <img src={logo} alt="logo" className="logo" style={{ width: '100px', height: 'auto' }} />
        </a>
        <HeaderTitle>Match</HeaderTitle>
        <a href="#" className="signup-link">
          sair
        </a>
      </div>
    </nav>
    </HeaderContainer>
  )
}

const MatchPage = () => {
  const matches = [
    {
      id: 1,
      name: "John",
      pref0: "Series",
      pref1: "Jogos",
      pref2: "Filmes",
      image: "john.jpg",
      
    },
    {
      id: 2,
      name: "Sarah",
      pref0: "Series",
      pref1: "Filmes",
      pref2: "Musicas",
      image: "sarah.jpg",
    },
    // Outros perfis com "match"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const deusemimatch = () => {
    let a = "fikdk";
    alert(`Esperando o ${a} dar match.`);
     {/* arrumar o que essa funçao faz pro back*/}
  };
   
  

  const deumatch = () => {
    alert("Deu match!");
    {/* arrumar o que essa funçao faz pro back*/}
  };

  const currentMatch = matches[currentIndex];

  return (
    <div>
      <Entrada/>
        <Cabeçalho/>
          <Container>
            <div>
              <h2>Seus Matches</h2>
              {currentMatch && (
              <div className="match-card">
                <img src={currentMatch.image} alt={currentMatch.name} />
                <div className="match-details">
                  <h3>{currentMatch.name}</h3>
                  <p>Preferencias: {currentMatch.pref0}, {currentMatch.pref1}, {currentMatch.pref2}</p>
                  {/* Outras informações do perfil */}
                </div>
                <button onClick={handleNext}>Próximo</button>
                <button onClick={deusemimatch}>gostei</button>
             </div>
              )}
            </div>   
          </Container>
    </div>
    
  );
}

export default MatchPage;