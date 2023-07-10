import { Container } from "./styles"

const Home = ()=> {

    function openMenu() {
        document.getElementById("myMenu").style.width = "250px"
    }
    
    function closeMenu() {
        document.getElementById("myMenu").style.width = "0"
    }
    return(
        <Container>
            <body>

                {/* <div id="myMenu" className="menu">
                    <a href="javascript:void(0)" className="close" onclick= {closeMenu()}> &times;</a>
                    <a href="#">Mensagens</a>
                    <a href="#">Match</a>
                    <a href="#">Grupos</a>
                </div> */}

                {/* <span style = {{fontsize:'30px', cursor:'pointer'}} onclick={openMenu()}>&#9776;</span>  */}
                <div className="profile"><a href="#" style={{color: "clrwhite"}}>Perfil</a></div>
                <div className="logo"><img src="logoooo.png.png"></img></div>

                <div className="container">
                    <div className="box">Grupos de Músicas</div>
                    <div className="box">Grupos de Jogos</div>
                    <div className="box">Grupos de Filmes</div>
                    <div className="box">Grupos de Séries</div>
                </div>



            </body>

        </Container>
    )

}
export default Home