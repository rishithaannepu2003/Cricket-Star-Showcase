// Initialize the map, centered on India with a wider zoom level
var map = L.map('kohli-dhoni-map').setView([20, 77], 3); // Center on India with a zoom level of 3 for better global view

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker for Virat Kohli's hometown (Delhi)
var viratKohliMarker = L.marker([28.6139, 77.2090]).addTo(map);
viratKohliMarker.bindPopup("<b>Virat Kohli</b><br>Hometown: Delhi, India");

// Add a marker for MS Dhoni's hometown (Ranchi)
var dhoniMarker = L.marker([23.3441, 85.3096]).addTo(map);
dhoniMarker.bindPopup("<b>MS Dhoni</b><br>Hometown: Ranchi, India");

// Optional: Add a click event to show clicked location coordinates
map.on('click', function(e) {
    alert("You clicked the map at " + e.latlng.toString());
});
