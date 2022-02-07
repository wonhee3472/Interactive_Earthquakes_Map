// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Change the coordinates for the center of the map to somewhere between LAX and SFO
// by changing the values inside of "setView()"
// Change the zoom level in the "setView()" method to 7
let map = L.map('mapid').setView([36.1733, -120.1794], 4);

// Coordinates for each point to be used in line.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [38.7499, -90.3748],
    [43.6777, -79.6248],
    [40.6313, -73.7781]
]
// Create a line on a map using the Leaflet polyline() function
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '8,6'
}).addTo(map);

// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// The addTo() function will add 'streets' tile layer to the map.
streets.addTo(map);
