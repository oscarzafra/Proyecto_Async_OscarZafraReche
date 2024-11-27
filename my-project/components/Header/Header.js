import "./Header.css";

const template = () => `
<h1>Pinterest</h1>
<input type="text" id="searchInput" placeholder="Ex: rollercoaster" />
<button id="searchBtn">Search</button>
<button id="theme-toggle">Cambiar Tema</button>
`;

const Header = () => {
    document.querySelector("header").innerHTML = template();
};

export default Header;