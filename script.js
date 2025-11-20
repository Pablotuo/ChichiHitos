// =============================
//  MAPAS BASE
// =============================

// Capa base 1: OpenStreetMap
const calle = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
});

// Capa base 2: Satélite ESRI
const satelite = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: '© ESRI World Imagery' }
);

// =============================
//  CREAR MAPA (COSTA RICA)
// =============================
const map = L.map('map', {
    center: [9.7489, -83.7534],
    zoom: 8,
    layers: [calle]
});

// =============================
//  CONTROL DE CAPAS
// =============================
const mapasBase = {
    "Calles - OSM": calle,
    "Satélite - ESRI": satelite
};
L.control.layers(mapasBase).addTo(map);


// =============================
//  TUS PUNTOS
// =============================
const lugares = [
  {
    lat: 9.992554,
    lon: -83.024251,
    nombre: "57-LA",
    descripcion: "Blanco",
    imagen: "https://github.com/Pablotuo/ChichiHitos/blob/main/imagenes/image%20(3).png?raw=true"
  },
  {
    lat: 10.992554,
    lon: -84.024251,
    nombre: "57-LB",
    descripcion: "Blanco",
    imagen: "https://github.com/Pablotuo/ChichiHitos/blob/main/images/20220501_122303.jpg?raw=true"
  }
];

// =============================
//  AGREGAR MARCADORES
// =============================
lugares.forEach(lugar => {
    L.marker([lugar.lat, lugar.lon]).addTo(map)
      .bindPopup(`
        <b>${lugar.nombre}</b><br>
        ${lugar.descripcion}<br>
        <img src="${lugar.imagen}" alt="${lugar.nombre}" style="width:350px; height:auto;">
      `);
});



// ======================================================
//  🔵 INTEGRACIÓN DEL WFS DEL SNIT
// ======================================================

// Variable global para almacenar la capa WFS
let capaWFS = null;
let capaVisible = false;

// URL WFS del SNIT (EJEMPLO: centro poblado IGN)
// 👉 Cambia "IGN_5:centro_poblado" por la capa que necesites
const urlWFS = "https://geos.snitcr.go.cr/be/IGN_5/wfs?" +
    "service=WFS&version=1.0.0&request=GetFeature&typeName=IGN_5:centro_poblado&outputFormat=application/json";


// Evento del botón
document.getElementById("btnWFS").addEventListener("click", function () {

    if (!capaVisible) {

        // Si no existe la capa aún → descargarla
        if (!capaWFS) {
            fetch(urlWFS)
                .then(resp => resp.json())
                .then(data => {

                    capaWFS = L.geoJSON(data, {
                        style: {
                            color: "red",
                            weight: 2
                        },
                        onEachFeature: function (feature, layer) {
                            // Popup básico con atributos de la capa WFS
                            const props = feature.properties;
                            let txtPopup = "<b>Elemento WFS</b><br>";

                            // Mostrar todos los atributos que existan
                            for (const key in props) {
                                txtPopup += `<b>${key}:</b> ${props[key]}<br>`;
                            }

                            layer.bindPopup(txtPopup);
                        }
                    }).addTo(map);
                });
        } else {
            // Si ya existe → solo mostrarla
            capaWFS.addTo(map);
        }

        capaVisible = true;

    } else {
        // Ocultar capa
        map.removeLayer(capaWFS);
        capaVisible = false;
    }

});
