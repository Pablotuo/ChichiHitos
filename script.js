// =============================
//  MAPAS BASE
// =============================

// Capa base 1: OpenStreetMap (la misma que tenías)
var calle = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
});

// Capa base 2: Satélite ESRI
var satelite = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
    {
        attribution: '© ESRI World Imagery'
    }
);

// =============================
//  CREAR MAPA (COSTA RICA)
// =============================
var map = L.map('map', {
    center: [9.7489, -83.7534],
    zoom: 8,
    layers: [calle]  // carga OpenStreetMap al inicio
});

// =============================
//  CONTROL DE CAPAS (EL BOTÓN)
// =============================
var mapasBase = {
    "Calles - OSM": calle,
    "Satélite - ESRI": satelite
};

L.control.layers(mapasBase).addTo(map);


// =============================
//  TUS PUNTOS (SIN CAMBIOS)
// =============================
var lugares = [ 
  {
    "lat": 9.992554,
    "lon": -83.024251,
    "nombre": "57-LA",
    "descripcion": "Blanco",
    "imagen": "https://github.com/Pablotuo/ChichiHitos/blob/main/imagenes/image%20(3).png?raw=true"
  },
  {
    "lat": 10.992554,
    "lon": -84.024251,
    "nombre": "57-LA",
    "descripcion": "Blanco",
    "imagen": "https://github.com/Pablotuo/ChichiHitos/blob/main/images/20220501_122303.jpg?raw=true"
  }
];

// =============================
//  AGREGAR MARCADORES
// =============================
lugares.forEach(function(lugar) {
    L.marker([lugar.lat, lugar.lon]).addTo(map)
        .bindPopup(
            "<b>" + lugar.nombre + "</b><br>" +
            lugar.descripcion + "<br>" +
            "<img src='" + lugar.imagen + "' alt='" + lugar.nombre + "' style='width:350px; height:auto;'>"
        );
});
