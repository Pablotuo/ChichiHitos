// =============================
//  MAPAS BASE
// =============================
const calle = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
});

const satelite = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: '© ESRI World Imagery' }
);

// =============================
//  CREAR MAPA
// =============================
const map = L.map('map', {
    center: [9.7489, -83.7534],
    zoom: 8,
    layers: [calle]
});

// Control capas
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
//  MOSTRAR DATOS EN PANEL
// =============================
function mostrarEnPanel(html) {
    document.getElementById("contenidoPanel").innerHTML = html;
}

// =============================
//  AGREGAR MARCADORES
// =============================
lugares.forEach(l => {
    L.marker([l.lat, l.lon]).addTo(map)
      .on("click", function () {
         mostrarEnPanel(`
            <h3>${l.nombre}</h3>
            <p>${l.descripcion}</p>
            <img src="${l.imagen}">
         `);
      });
});


// ======================================================
//  🔵 WFS DEL SNIT FUNCIONAL
// ======================================================

let capaWFS = null;
let capaVisible = false;

// Capa WFS que SÍ devuelve GeoJSON correctamente
const urlWFS = "https://geos.snitcr.go.cr/be/IGN_5/wfs?" +
    "service=WFS&version=1.0.0&request=GetFeature&typeName=IGN_5:distrito&outputFormat=application/json&SRSName=EPSG:4326";

document.getElementById("btnWFS").addEventListener("click", function() {

    if (!capaVisible) {

        if (!capaWFS) {
            fetch(urlWFS)
                .then(response => response.json())
                .then(data => {

                    capaWFS = L.geoJSON(data, {
                        style: {
                            color: "red",
                            weight: 1
                        },
                        onEachFeature: function (feature, layer) {

                            layer.on("click", function () {

                                let html = "<h3>Distrito</h3>";

                                for (let k in feature.properties) {
                                    html += `<b>${k}:</b> ${feature.properties[k]}<br>`;
                                }

                                mostrarEnPanel(html);
                            });
                        }
                    }).addTo(map);

                });
        } else {
            capaWFS.addTo(map);
        }

        capaVisible = true;

    } else {
        map.removeLayer(capaWFS);
        capaVisible = false;
    }

});
