const socket = io();

// Initialize the map
const map = L.map("map").setView([0, 0], 15);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'A project by TheAyushB',
}).addTo(map);

// Markers object to keep track of users
const markers = {};

// Check Geolocation Support
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const {
                latitude,
                longitude
            } = position.coords;

            // Emit location data to the server
            socket.emit("send-location", {
                latitude,
                longitude
            });
        },
        (error) => console.error("Error with geolocation:", error), {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    }
    );
} else {
    alert("Geolocation is not supported by your browser.");
}

// Handle location updates from the server
socket.on("update-location", (data) => {
    const { id, latitude, longitude } = data;

    if (markers[id]) {
        // Update existing marker
        markers[id].setLatLng([latitude, longitude]);
    } else {
        // Create a new marker
        const marker = L.marker([latitude, longitude]).addTo(map);
        markers[id] = marker;

        // Center map on the user's location
        map.setView([latitude, longitude], 15);
    }
});

// Handle user disconnections
socket.on("remove-marker", (id) => { // Changed event name
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});