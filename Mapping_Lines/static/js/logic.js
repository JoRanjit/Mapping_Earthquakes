// // First, change the coordinates for the center of the map to somewhere between LAX and SFO by adding [36.1733, -120.1794] in the setView() method.
// let map = L.map("mapid",{center: [36.1733, -120.1794],zoom:7});

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([39.0997, -94.5786], 5);  

// We create the street tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 9,
    accessToken: API_KEY
});


streets.addTo(map);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790], //SFO
    [30.1975, -97.6664], //AUS
    [43.6777, -79.6248], // YYZ
    [40.6413, -73.7781]//JFK
  ];

L.polyline(line, {
    color: "blue",
    dashArray: '10,20',
    weight:4,
    opacity: 0.5
  }).addTo(map);
