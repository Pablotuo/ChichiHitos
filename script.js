// Crear el mapa centrado en una ubicación inicial (por ejemplo, Madrid)
var map = L.map('map').setView([40.4168, -3.7038], 3); // Coordenadas de Madrid, zoom de nivel 3 para ver más lugares

// Agregar un mapa base (OpenStreetMap en este caso)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Lista de lugares con latitudes, longitudes, nombres, descripciones y la URL de las imágenes
var lugares = [
    { lat: 10.0000, lon: -84.0000, nombre: "Madrid", descripcion: "La capital de España.", imagen: "images/madrid.jpg" },
    { lat: 9.0000, lon: -83.0000, nombre: "Roma", descripcion: "La ciudad eterna en Italia.", imagen: "images/roma.jpg" },
    { lat: 10.0000, lon: -83.0000, nombre: "París", descripcion: "La ciudad de la luz en Francia.", imagen: "images/paris.jpg" },
    { lat: 9.0000, lon: -84.0000, nombre: "Los Ángeles", descripcion: "La ciudad de las estrellas en USA.", imagen: "images/los-angeles.jpg" }
];

// Iterar sobre el arreglo y agregar un marcador para cada lugar
lugares.forEach(function(lugar) {
    L.marker([lugar.lat, lugar.lon]).addTo(map)
        .bindPopup("<b>" + lugar.nombre + "</b><br>" + lugar.descripcion + "<br><img src='" + lugar.imagen + "' alt='" + lugar.nombre + "' style='width:100px; height:auto;'>");
});
