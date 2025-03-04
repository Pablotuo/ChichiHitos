// Crear el mapa centrado en una ubicación inicial (por ejemplo, Madrid)
var map = L.map('map').setView([40.4168, -3.7038], 13); // Coordenadas de Madrid

// Agregar un mapa base (OpenStreetMap en este caso)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ejemplo de marcador de un lugar
L.marker([40.4168, -3.7038]).addTo(map)
    .bindPopup("<b>Madrid</b><br>España.")
    .openPopup();
