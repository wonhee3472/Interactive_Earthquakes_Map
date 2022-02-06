// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// In the block of code above:
    // 1. Assign a variable map to the object `L.map()`, 
    // and instantiate the object with the given string `'mapid'`.
    // 2. 'mapid' references the id tag in the <div> element on the index.HTML file.
    // 3. The `setView` sets the view of the map with a geographical center
    // where the first coordinate is latitude of `40.7` and the second is longitude of `-94.5`,
    // and set the zoom level of `4` on a scale 0-18

// Create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// streets.addTo(map);

// Breakdown of the block of code above:
    // 1. Assign the `titleLayer()` method to the variable `streets`.
    // * NOTE * Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
    // 2. The following URLs appear in the parentheses of our titleLayer() method:
        // The API URL with a reference to the `accessToken`
        // The `OpenStreetMap` URL inside the curly braces of our `tileLayer()` method
    // 3. Add the maxZoom attribute and assign it a value of 18.
    // 4. Add the id attribute and assign it `mapbox/streets-v11`, which will show the streets on the map.
    // 5. Add the accessToken attribute and assign it the value of our API_KEY.
    // 6. Call the addTo() function with our `map` object, `map` on our graymap object tile layer. 
    // The addTo() function will add 'streets' tile layer to the map.

// To change the map's style, change the map id using the list of Mapbox ids below:
    // mapbox/streets-v11
    // mapbox/outdoors-v11
    // mapbox/light-v10
    // mapbox/dark-v10
    // mapbox/satellite-v9
    // mapbox/satellite-streets-v11

// In this project, I'll be using the Mapbox Styles API:
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// In this tileLayer() code above:
    // 1. I replaced 'https://api.tiles.mapbox.com/v4/{id}/' with the Mapbox Styles API URL.
    // 2. I removed the .png from the URL.
    // 3. I removed the id attribute and the map style reference.
streets.addTo(map);
