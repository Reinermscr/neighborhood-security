/* Confuguracion del mapa */
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