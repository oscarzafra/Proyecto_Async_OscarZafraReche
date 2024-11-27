import './style.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const webSite = () => {
    Header();
    Main();
    Footer ();
    getPhotos("rollercoaster");
};

const getPhotos = async (keyword) => {
    const data = await fetch (`https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=20&client_id=${CLIENT_ID}`);

    const results = await data.json();
    const photos = results.results;
    printPhotos(photos);
};

const printPhotos = (photos) => {
    const container = document.querySelector("#results");
    const message = document.querySelector("#message");

    if(photos.length === 0){
        container.innerHTML = "";
        message.textContent = "No se ha encontrado su búsqueda, pruebe con algo distinto... "
    } else {

    container.innerHTML = "";
    message.textContent = "Se han encontrado" + photos.length + "fotos:";
    for (const photo of photos) {
        const li = document.createElement("li");
        li.innerHTML = `
        <img src="${photo.urls.regular}" alt="${photo.alt_description}"style="border: 10px solid ${photo.color};"" />
        `
        container.appendChild(li);
        }
    }
}

webSite();

document.querySelector("#searchBtn").addEventListener("click", () => {
    const value = document.querySelector("#searchInput").value;
    getPhotos(value);
    document.querySelector("#searchInput").value = "";
});


//Modo claro u oscuro

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme); 
}

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
  localStorage.setItem('theme', currentTheme); 
});