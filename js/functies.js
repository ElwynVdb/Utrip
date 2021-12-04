let likeButton = document.getElementById("elwyn-like_button");
let likeCount = document.getElementById("elwyn-like_count");
let locationName = location.pathname.split("/")[2].replace(".html", "").toLowerCase();

// Like button functionality
likeButton.onclick = () => {
    let liked = likeCount.textContent == "2";
    likeCount.textContent = !liked ? "2" : "1";
    likeButton.style.color = !liked ? "#3a5bc5" : "#504b4b";
}

// Leaflet
let colloseum = {
    bounds: [[41.8895, 12.4912], [41.891, 12.4935]],
    viewport: [41.8902, 12.4922],
    markerMessage: 'Colloseum<br> Rome'
}

// Automatically select which map we need to display, preventing code to be written again
let leafletMapData = grabLeafletMapDataForTrip();

let map = L.map('map').setView(leafletMapData.viewport, 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGVjdG9yd291dGVyIiwiYSI6ImNrM25qZWs1dTB4NHgza240bW0zOG1qZngifQ.1uF5JjJA8l5SpTW3NVQJJQ'
}).addTo(map);

L.marker(leafletMapData.viewport).addTo(map)
.bindPopup('Colloseum<br> Rome')
.openPopup();

map.fitBounds(leafletMapData.bounds);

function grabLeafletMapDataForTrip() {
    switch(locationName) {
        case "colosseum":
            return colloseum;
    }
}