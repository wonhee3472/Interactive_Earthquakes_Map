// Alternative way to create the map object without using "setView()"
let map = L.map('mapid', {
    center: [40.7, -94.5],
    zoom: 4,
    layers: [streets]
});

// Adding layer using Mapbox API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

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