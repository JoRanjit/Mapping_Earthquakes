// Get data from cities.js
let cityData = cities;


// Create the map object with a center and zoom level.
// let map = L.map('mapID').setView([40.7,-94.5],4);

// alternate to setview code
let map = L.map("mapid",{
    center: [
        34.052,-118.2437
    ],
    zoom:14
});

// We create the street tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 5,
    accessToken: API_KEY
});

// We create the tile staellite layer that will be the background of our map.
let sats = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 4,
    accessToken: API_KEY
});

// We create the tile drak layer that will be the background of our map.
let darks = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 4,
    accessToken: API_KEY
});

// Then we add our graymap tile layer to the map.
darks.addTo(map);

// Loop through the cities array and create one marker for each city.

cityData.forEach(function(city){
    console.log(city);
    L.circleMarker(city.location,{
        radius:city.population/100000,
        color: 'orange',
        fillcolor: 'orange',
        weight: 4
    })
    .bindPopup("<h2>" + city.city + "," +city.state+ "</h2> <hr> <h3> Population :"+ city.population.toLocaleString() + "</h3>")
    
    .addTo(map);
});
// Add a marker for Los Angeles, California.
//let marker = L.marker([34.052,-118.2437]).addTo(map);
// marker = L.circleMarker([34.052,-118.2437],{
//     radius: 300,
//     color: "yellow",
//     fillcolor:"#ffffa1"
// });
//marker.addTo(map);