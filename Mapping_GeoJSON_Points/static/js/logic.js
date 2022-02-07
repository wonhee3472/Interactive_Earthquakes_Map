// Add GeoJSON data
// The following GeoJSON data is a FeatureCollection object that has properties and 
// geometry for the San Francisco Airport
// let sanFranAirport = 
// {"type":"FeatureCollection", "features":[{
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
//     "geometry":{
//         "type":"Point",
//         "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Setting the center to the SFO airport with a zoom level of "10"
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// Grabbing the GeoJSON data using the "pointToLayer" callback function
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.city + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//     }
// }).addTo(map);

// Grabbing the GeoJSON data using the "onEachFeature" callback function
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h2> Airport name: " + feature.properties.name + "</h2>");
//     }
// }).addTo(map);

// Adding layer using Mapbox API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Creating the dark view tile layer that will be an option for our map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Creating a base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Alternative way to create the map object without using "setView()"
let map = L.map('mapid', {
    center: [40.7, -94.5],
    zoom: 4,
    layers: [streets]
});

// Adding the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/wonhee3472/Mapping_Earthquakes/main/majorAirports.json"

// Grabbing the GeoJSON Data
d3.json(airportData).then(function(data) {
    console.log(data);
    // creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
            onEachFeature: function(feature, layer) {
                console.log(layer);
                layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h2> Airport name: " + feature.properties.name + "</h2>");
            }
        }).addTo(map);
});