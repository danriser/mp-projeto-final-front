<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div id="myMenu" class="menu">
        <a href="javascript:void(0)" class="close" onclick="closeMenu()">&times;</a>
        <a href="#">Mensagens</a>
        <a href="#">Match</a>
        <a href="#">Grupos</a>
    </div>

    <span style="font-size:30px;cursor:pointer" onclick="openMenu()">&#9776;</span>
    <div id="profile"><a href="#" style="color:var(--clr-white);">Perfil</a></div>
    <div id="logo"><img src="logoooo.png.png"></div>

    <div class="container">
        <div class="box">Grupos de Músicas</div>
        <div class="box">Grupos de Jogos</div>
        <div class="box">Grupos de Filmes</div>
        <div class="box">Grupos de Séries</div>
    </div>

    <script>
        function openMenu() {
            document.getElementById("myMenu").style.width = "250px";
        }

        function closeMenu() {
            document.getElementById("myMenu").style.width = "0";
        }
    </script>

</body>
</html>
