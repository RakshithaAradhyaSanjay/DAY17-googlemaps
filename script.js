// Initialize the map
function initMap() {
    const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 }, // San Francisco coordinates
        zoom: 12, // Zoom level (adjust as needed)
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add a marker
    const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        title: 'San Francisco',
    });
}

// Load the map when the page loads
window.onload = initMap;
