// Crear el mapa centrado en en Costa Rica
var map = L.map('map').setView([9.7489, -83.7534], 7); // Para que el mapa abra en Costa Rica, con un zoom de 7

// Agregar un mapa base (OpenStreetMap en este caso)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Lista de lugares con latitudes, longitudes, nombres, descripciones y la URL de las imágenes
var lugares = [
    { lat: 10.4168, lon: -83.7038, nombre: "BM 1489", descripcion: "DESTRUIDO", imagen: "images/madrid.jpg" },
    { lat: 11.9028, lon: -84.4964, nombre: "BM J89", descripcion: "SEPULTADO", imagen: "images/roma.jpg" },
    { lat: 10.8566, lon: -83.3522, nombre: "SASA", descripcion: "BUEN ESTADO ", imagen: "images/paris.jpg" },
    { lat: 9.0522, lon: -84.2437, nombre: "BM 67", descripcion: "INVESTIGAR", imagen: "images/los-angeles.jpg" }
];

// Iterar sobre el arreglo y agregar un marcador para cada lugar
lugares.forEach(function(lugar) {
    L.marker([lugar.lat, lugar.lon]).addTo(map)
        .bindPopup("<b>" + lugar.nombre + "</b><br>" + lugar.descripcion + "<br><img src='" + lugar.imagen + "' alt='" + lugar.nombre + "' style='width:100px; height:auto;'>");
});
