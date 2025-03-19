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
    "lat": 9.975245,
    "lon": -84.83178,
    "nombre": 1,
    "descripcion": "azul"
  },
  {
    "lat": 9.97527,
    "lon": -84.831708,
    "nombre": 2,
    "descripcion": "azul"
  },
  {
    "lat": 9.976298,
    "lon": -84.832712,
    "nombre": 6,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.424384,
    "lon": -84.167862,
    "nombre": "2-Q",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.424811,
    "lon": -84.170083,
    "nombre": "1-Q",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.43575,
    "lon": -84.164576,
    "nombre": "5-Q",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.998806,
    "lon": -84.117175,
    "nombre": "1-M",
    "descripcion": "azul"
  },
  {
    "lat": 9.425375,
    "lon": -84.166316,
    "nombre": "3-Q",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.992001,
    "lon": -83.025929,
    "nombre": "5-L",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.932587,
    "lon": -84.720673,
    "nombre": 16,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.929702,
    "lon": -84.711281,
    "nombre": 17,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.934299,
    "lon": -84.702186,
    "nombre": "17-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.929833,
    "lon": -84.691925,
    "nombre": 18,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.927529,
    "lon": -84.684897,
    "nombre": "18-A",
    "descripcion": "Azul"
  },
  {
    "lat": 9.925851,
    "lon": -84.676847,
    "nombre": 19,
    "descripcion": "Negro"
  },
  {
    "lat": 9.926374,
    "lon": -84.67393,
    "nombre": 20,
    "descripcion": "Negro"
  },
  {
    "lat": 9.917966,
    "lon": -84.668912,
    "nombre": 21,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.916314,
    "lon": -84.66858,
    "nombre": 22,
    "descripcion": "Blanco"
  },
  {
    "lat": 9.909826,
    "lon": -84.664656,
    "nombre": "22-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.902067,
    "lon": -84.652667,
    "nombre": 23,
    "descripcion": "Rojo"
  },
  {
    "lat": 9.897177,
    "lon": -84.64412,
    "nombre": "23-A",
    "descripcion": "Negro"
  },
  {
    "lat": 9.89785,
    "lon": -84.639047,
    "nombre": "23-B",
    "descripcion": "Blanco"
  },
  {
    "lat": 9.90134,
    "lon": -84.626794,
    "nombre": 24,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.902091,
    "lon": -84.621158,
    "nombre": "24-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.902436,
    "lon": -84.610839,
    "nombre": 25,
    "descripcion": "Blanco"
  },
  {
    "lat": 9.893694,
    "lon": -84.568832,
    "nombre": "26-B",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.896001,
    "lon": -84.560593,
    "nombre": "26-C",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.898846,
    "lon": -84.557867,
    "nombre": 27,
    "descripcion": "Azul"
  },
  {
    "lat": 9.913485,
    "lon": -84.541296,
    "nombre": "27-A-28",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.912588,
    "lon": -84.525893,
    "nombre": "27-B-28",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.907886,
    "lon": -84.54935,
    "nombre": "27-C",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.912517,
    "lon": -84.525746,
    "nombre": 28,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.912739,
    "lon": -84.517871,
    "nombre": "28-A",
    "descripcion": "Azul"
  },
  {
    "lat": 9.849995,
    "lon": -83.884751,
    "nombre": "28-C",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.91795,
    "lon": -84.503733,
    "nombre": 29,
    "descripcion": "Blanco"
  },
  {
    "lat": 9.919877,
    "lon": -84.490097,
    "nombre": "29-A",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.919781,
    "lon": -84.489426,
    "nombre": 30,
    "descripcion": "Azul"
  },
  {
    "lat": 9.923039,
    "lon": -84.481631,
    "nombre": "30-A",
    "descripcion": "Negro"
  },
  {
    "lat": 9.920976,
    "lon": -84.478018,
    "nombre": "30-B",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.864057,
    "lon": -83.921123,
    "nombre": "30-C",
    "descripcion": "Azul"
  },
  {
    "lat": 9.921214,
    "lon": -84.470385,
    "nombre": 31,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.939068,
    "lon": -84.470011,
    "nombre": "31-A-32",
    "descripcion": "Negro"
  },
  {
    "lat": 9.939497,
    "lon": -84.469667,
    "nombre": 32,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.923023,
    "lon": -84.467567,
    "nombre": "31-B",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.931616,
    "lon": -84.467227,
    "nombre": "31-C",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.931993,
    "lon": -84.452381,
    "nombre": 33,
    "descripcion": "Blanco"
  },
  {
    "lat": 9.934783,
    "lon": -84.435202,
    "nombre": 34,
    "descripcion": "Blanco"
  },
  {
    "lat": 9.939326,
    "lon": -84.421019,
    "nombre": "34-C",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.934804,
    "lon": -84.434871,
    "nombre": "34-A-35",
    "descripcion": "Azul"
  },
  {
    "lat": 9.931041,
    "lon": -84.441494,
    "nombre": "33-B",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.93604,
    "lon": -84.419019,
    "nombre": 35,
    "descripcion": "Blanco"
  },
  {
    "lat": 9.93624,
    "lon": -84.413896,
    "nombre": "35-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.937107,
    "lon": -84.403278,
    "nombre": "35-B",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.94139,
    "lon": -84.397113,
    "nombre": 36,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.94067,
    "lon": -84.389603,
    "nombre": "36-B",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.934673,
    "lon": -84.433062,
    "nombre": "34-B",
    "descripcion": "Azul"
  },
  {
    "lat": 9.942193,
    "lon": -84.379982,
    "nombre": "36-A-37",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.942204,
    "lon": -84.379923,
    "nombre": 37,
    "descripcion": "Negro"
  },
  {
    "lat": 9.941158,
    "lon": -84.368338,
    "nombre": "37-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.946829,
    "lon": -84.359108,
    "nombre": "37-B",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.960855,
    "lon": -84.353927,
    "nombre": 38,
    "descripcion": "Negro"
  },
  {
    "lat": 9.962897,
    "lon": -84.350103,
    "nombre": 39,
    "descripcion": "Negro"
  },
  {
    "lat": 9.962897,
    "lon": -84.350103,
    "nombre": "39-A",
    "descripcion": "Negro"
  },
  {
    "lat": 9.962872,
    "lon": -84.348221,
    "nombre": 40,
    "descripcion": "Negro"
  },
  {
    "lat": 9.96354,
    "lon": -84.342695,
    "nombre": "40-A",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.957402,
    "lon": -84.343499,
    "nombre": "40-B",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.951553,
    "lon": -84.335291,
    "nombre": "41-B",
    "descripcion": "Negro"
  },
  {
    "lat": 9.960962,
    "lon": -84.331022,
    "nombre": "41-C",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.957381,
    "lon": -84.343448,
    "nombre": "41-A-42",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.962476,
    "lon": -84.318155,
    "nombre": 42,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.964019,
    "lon": -84.308909,
    "nombre": "42-A",
    "descripcion": "Negro"
  },
  {
    "lat": 9.968855,
    "lon": -84.295676,
    "nombre": 43,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.968781,
    "lon": -84.287216,
    "nombre": "43-A",
    "descripcion": "Blanco"
  },
  {
    "lat": 9.970304,
    "lon": -84.274637,
    "nombre": 44,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.976946,
    "lon": -84.26478,
    "nombre": "44-A",
    "descripcion": "Rojo"
  },
  {
    "lat": 10.01698,
    "lon": -84.21278,
    "nombre": "44-C",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.934086,
    "lon": -83.639186,
    "nombre": 109,
    "descripcion": "Blanco"
  },
  {
    "lat": 9.935073,
    "lon": -83.639444,
    "nombre": 110,
    "descripcion": "Blanco"
  },
  {
    "lat": 9.992493,
    "lon": -83.024357,
    "nombre": "144-A",
    "descripcion": "Rojo"
  },
  {
    "lat": 10.108212,
    "lon": -84.38897,
    "nombre": 231,
    "descripcion": "Amarillo"
  },
  {
    "lat": 10.096978,
    "lon": -84.378803,
    "nombre": 232,
    "descripcion": "Amarillo"
  },
  {
    "lat": 10.081722,
    "lon": -84.359444,
    "nombre": 233,
    "descripcion": "Blanco"
  },
  {
    "lat": 10.090081,
    "lon": -84.345236,
    "nombre": 234,
    "descripcion": "Azul"
  },
  {
    "lat": 10.072555,
    "lon": -84.311541,
    "nombre": 237,
    "descripcion": "Azul"
  },
  {
    "lat": 10.057751,
    "lon": -84.305807,
    "nombre": "238-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 10.012085,
    "lon": -84.241912,
    "nombre": 243,
    "descripcion": "Negro"
  },
  {
    "lat": 9.742022,
    "lon": -83.959313,
    "nombre": 333,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.670187,
    "lon": -83.887108,
    "nombre": 340,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.569752,
    "lon": -83.752782,
    "nombre": "349-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 10.18443,
    "lon": -84.391201,
    "nombre": 360,
    "descripcion": "Azul"
  },
  {
    "lat": 10.184069,
    "lon": -84.390535,
    "nombre": 361,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.911139,
    "lon": -84.523405,
    "nombre": 473,
    "descripcion": "Amarillo"
  },
  {
    "lat": 10.084074,
    "lon": -84.159198,
    "nombre": "H-7",
    "descripcion": "Amarillo"
  },
  {
    "lat": 10.090987,
    "lon": -84.166901,
    "nombre": "H-9",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.978632,
    "lon": -84.83395,
    "nombre": "B-4",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.266819,
    "lon": -83.632078,
    "nombre": "P-1",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.253012,
    "lon": -83.565944,
    "nombre": "P-113",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.251022,
    "lon": -83.509315,
    "nombre": "P-123",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.247483,
    "lon": -83.494491,
    "nombre": "P-129",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.960049,
    "lon": -83.459775,
    "nombre": "P-131",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.956962,
    "lon": -83.46031,
    "nombre": "P-199",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.917486,
    "lon": -83.798042,
    "nombre": "P-200",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.961405,
    "lon": -83.711223,
    "nombre": 1050,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.93655,
    "lon": -84.521803,
    "nombre": "1065-B",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.936039,
    "lon": -84.522115,
    "nombre": 1304,
    "descripcion": "Azul"
  },
  {
    "lat": 9.935194,
    "lon": -84.527684,
    "nombre": 1305,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.941173,
    "lon": -84.53869,
    "nombre": 1306,
    "descripcion": "Negro"
  },
  {
    "lat": 9.94499,
    "lon": -84.549101,
    "nombre": 1307,
    "descripcion": "Rojo"
  },
  {
    "lat": 9.946474,
    "lon": -84.560755,
    "nombre": 1308,
    "descripcion": "Rojo"
  },
  {
    "lat": 9.953408,
    "lon": -84.568722,
    "nombre": 1309,
    "descripcion": "Negro"
  },
  {
    "lat": 9.955705,
    "lon": -84.577914,
    "nombre": 1310,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.959469,
    "lon": -84.590591,
    "nombre": 1311,
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.958463,
    "lon": -84.600855,
    "nombre": 1312,
    "descripcion": "Rojo"
  },
  {
    "lat": 9.959431,
    "lon": -84.606991,
    "nombre": 1313,
    "descripcion": "Negro"
  },
  {
    "lat": 10.096568,
    "lon": -84.378848,
    "nombre": 1314,
    "descripcion": "Rojo"
  },
  {
    "lat": 10.139874,
    "lon": -84.393488,
    "nombre": "232-A-233",
    "descripcion": "Amarillo"
  },
  {
    "lat": 10.323219,
    "lon": -84.430941,
    "nombre": 355,
    "descripcion": "Azul"
  },
  {
    "lat": 10.323269,
    "lon": -84.43047,
    "nombre": "372-AB",
    "descripcion": "Azul"
  },
  {
    "lat": 10.142798,
    "lon": -85.453553,
    "nombre": "372-B-373",
    "descripcion": "Verde"
  },
  {
    "lat": 9.296133,
    "lon": -83.654099,
    "nombre": "G-65",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.995292,
    "lon": -83.026571,
    "nombre": "P-109-A",
    "descripcion": "Azul"
  },
  {
    "lat": 9.993316,
    "lon": -83.024895,
    "nombre": "9-L",
    "descripcion": "Rojo"
  },
  {
    "lat": 9.280594,
    "lon": -83.590215,
    "nombre": "Buchita AZ",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.870809,
    "lon": -83.343853,
    "nombre": "P-118-P",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.093469,
    "lon": -83.271788,
    "nombre": "P-216-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.09162,
    "lon": -83.270625,
    "nombre": "P-158-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.063484,
    "lon": -83.270117,
    "nombre": "P-158-B",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.993256,
    "lon": -83.237752,
    "nombre": "P-162-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.987683,
    "lon": -83.258885,
    "nombre": "P-171-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.984678,
    "lon": -83.27537,
    "nombre": "P-174-B",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.957373,
    "lon": -83.323376,
    "nombre": "P-176-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.96156,
    "lon": -83.397511,
    "nombre": "P-183-B",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.966071,
    "lon": -83.417362,
    "nombre": "P-191-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.917964,
    "lon": -83.417257,
    "nombre": "P-193-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.890314,
    "lon": -83.379361,
    "nombre": "P-206-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.880686,
    "lon": -83.36591,
    "nombre": "P-211-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.840167,
    "lon": -83.310269,
    "nombre": "P-213-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.821636,
    "lon": -83.289829,
    "nombre": "P-221-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 8.798356,
    "lon": -83.251681,
    "nombre": "P-224-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.893911,
    "lon": -83.942023,
    "nombre": "P-228-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.977091,
    "lon": -83.845916,
    "nombre": "83-AB",
    "descripcion": "Amarillo"
  },
  {
    "lat": 10.056087,
    "lon": -84.008153,
    "nombre": "309-A",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.99312,
    "lon": -83.025022,
    "nombre": "J-81",
    "descripcion": "Amarillo"
  },
  {
    "lat": 9.992554,
    "lon": -83.024251,
    "nombre": "57-LA",
    "descripcion": "Blanco"
  }
];

// Iterar sobre el arreglo y agregar un marcador para cada lugar
lugares.forEach(function(lugar) {
    L.marker([lugar.lat, lugar.lon]).addTo(map)
        .bindPopup("<b>" + lugar.nombre + "</b><br>" + lugar.descripcion + "<br><img src='" + lugar.imagen + "' alt='" + lugar.nombre + "' style='width:100px; height:auto;'>");
});
