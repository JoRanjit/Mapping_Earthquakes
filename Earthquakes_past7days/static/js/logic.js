// We create the satelliet strrets tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//streets.addTo(map);
//create a base layer that holds both maps
let baseMaps = {
  Satellite: satelliteStreets,
  Street: streets
};

//create a map object with center and zoom
let map = L.map("mapid",{
  center:[43.7,-79.3], //Toronto coordinates
  zoom:10,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//Accessing major airports geoJSON via github raw url
let torontoHoods = "https://raw.githubusercontent.com/JoRanjit/Mapping_Earthquakes/main/torontoNeighborhoods.json"

//Create a style for lines
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1
};
//Grabbing our GeoJSON data from URL using d3.JSON
d3.json(torontoHoods).then(function(data){
 
  //Creating a GeoJSPN layer with the retreived data
  L.geoJSON(data,{
     style: myStyle,
     onEachFeature: function(feature,layer){
      layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>"); 
    }
  }).addTo(map);
});







