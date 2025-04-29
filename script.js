// Crear el mapa centrado en en Costa Rica
var map = L.map('map').setView([9.7489, -83.7534], 8); // Crea un mapa con el id map. Para que el mapa abra en Costa Rica, con un zoom de 8

// Agregar un mapa base (OpenStreetMap en este caso)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);  // Añade una capa de azulejos (tiles) de OpenStreetMap. Los azulejos son las pequeñas imágenes que componen el mapa.
//Esta parte indica que la capa de OpenStreetMap se agregará al mapa que creamos anteriormente.

// Lista de lugares con latitudes, longitudes, nombres, descripciones y la URL de las imágenes
var lugares = [ 

  {
    "lat": 9.992554,
    "lon": -83.024251,
    "nombre": "57-LA",
    "descripcion": "Blanco",
    "imagen": "https://github.com/Pablotuo/ChichiHitos/blob/main/imagenes/image%20(3).png?raw=true"
  }
];

// Iterar sobre el arreglo y agregar un marcador para cada lugar
lugares.forEach(function(lugar) {
    L.marker([lugar.lat, lugar.lon]).addTo(map)
        .bindPopup("<b>" + lugar.nombre + "</b><br>" + lugar.descripcion + "<br><img src='" + lugar.imagen + "' alt='" + lugar.nombre + "' style='width:350px; height:auto;'>");
});
