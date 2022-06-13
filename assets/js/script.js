
/* Script para poder obtener el mismo header y footer en todoas las paginas */
/* Aqui empieza */
window.addEventListener("DOMContentLoaded", (event) => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
  
    fetch("./header.html")
      .then((response) => response.text())
      .then((data) => (header.innerHTML = data));
  
    fetch("./footer.html")
      .then((response) => response.text())
      .then((data) => (footer.innerHTML = data));
  });
/* Aqui finaliza*/

/*TODO configuracion del mapa*/
/* Confuguracion del mapa */
/* Aqui empieza */
var map = L.map('map').setView([10.202039, -83.774340], 14);
var marker = L.marker([10.202039, -83.774340]).addTo(map);
var circle = L.circle([10.202039, -83.774340], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 13,
    maxZoom: 16,
    attribution: '© OpenStreetMap'
}).addTo(map);
/* Aqui finaliza*/