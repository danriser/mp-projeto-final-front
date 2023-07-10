import styled from "styled-components";
export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
    color: #06022c;
    background-color: #21082c;
    --clr-white: #fff;
    --clr-gray: #d9d9d9;
    --clr-dark-gray: #71767b;

    font-family: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
}

profile{
    color:white;
}

body {
    font-family: var(--ff-primary);
    background-color: var(--clr-background);
    color: var(--clr-white);
}

#myMenu {
    background-color: var(--clr-header);
    font-size: 1.2em;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    transition: 0.5s;
    z-index: 2;
    overflow-x: hidden;
    padding-top: 60px;
}

.menu a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: var(--clr-white);
    display: block;
    transition: 0.3s;
}

.menu .close {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    color: var(--clr-white);
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 100px;
    gap: 25px;
    margin-top: 100px;
}

.box {
    width: 200px;
    height: 200px;
    background-color: var(--dark-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    border-radius: 1rem;
    font-size: 1.2em;
    font-weight: 700;
    transition: 0.3s;
}

.box:hover {
    transform: scale(1.05);
}

#profile {
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px;
    font-size: 1.2em;
    z-index: 1;
}

#logo {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0px;
    z-index: 1;
}

#logo img {
    height: 150px;
}

`