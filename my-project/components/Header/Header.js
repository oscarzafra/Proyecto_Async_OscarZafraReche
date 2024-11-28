import "./Header.css";

const template = () => `
<h1>Pinterest</h1>
<input type="text" id="searchInput" placeholder="Ex: rollercoaster" />
<button id="searchBtn">Search</button>
<ol id="holi">
        <li id="navbar">Inicio</li>
        <li id="navbar">Trending Topic</li>
        <li id="navbar">Imágenes Guardadas</li>
        <li id="navbar">Foro</li>
        <li id="navbar">Mi Perfil</li>
    </ol>
<button id="theme-toggle">Cambiar Tema</button>
`;

const Header = () => {
    document.querySelector("header").innerHTML = template();
};

export default Header;

