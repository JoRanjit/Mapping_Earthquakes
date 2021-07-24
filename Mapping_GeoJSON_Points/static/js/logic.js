// //Add geoJSON data
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};


// We create the satelliet strrets tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//streets.addTo(map);
//create a base layer that holds both maps
let baseMaps = {
  Street: streets,
  Dark: dark
};

//create a map object with center and zoom
let map = L.map("mapid",{
  center:[40.7,-94.5],
  zoom:4,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//Accessing major airports geoJSON via github raw url
let airportData = "https://raw.githubusercontent.com/JoRanjit/Mapping_Earthquakes/main/Mapping_GeoJSON_Points/static/data/majorAirports.json"

// //grabbing our groJSON data and use pointToLayer function
// L.geoJSON(sanFranAirport, {
//   pointToLayer: function(feature,latlng){
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>" );
//   }
  
// }).addTo(map);

// //grabbing our sanFrancisco GeoJSON data and use OnEachFeature Function
// L.geoJSON(sanFranAirport, {
//   onEachFeature: function(feature,layer){
//     console.log(layer);
//     layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2><hr><h3> Airport name: " + feature.properties.name + "</h3>" );
//   }
  
// }).addTo(map);

//Grabbing our GeoJSON data from URL using d3.JSON
d3.json(airportData).then(function(data){
  console.log(data);
  //Creating a GeoJSPN layer with the retreived data
  L.geoJSON(data,{
    onEachFeature: function(feature,layer){
      layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2><hr><h3> Airport name: " + feature.properties.name + "</h3>" );
    }
  }).addTo(map);
});






