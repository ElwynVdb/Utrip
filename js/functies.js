let likeButton = document.getElementById("elwyn-like_button");
let likeCount = document.getElementById("elwyn-like_count");

// Like button functionality
likeButton.onclick = () => {
    let liked = likeCount.textContent == "2";
    likeCount.textContent = !liked ? "2" : "1";
    likeButton.style.color = !liked ? "#3a5bc5" : "#504b4b";
}

// Leaflet
let locationName = location.pathname.split("/")[2].replace(".html", "").toLowerCase();

const stonehenge = {
    bounds: [[51.1789, -1.8262], [51.1789, -1.8262]],
    viewport: [51.1789, -1.8262],
    markerMessage: 'Stonehenge<br> Wiltshire'
}
const notredame = {
    bounds: [[48.8530, 2.3499], [48.8530, 2.3499]],
    viewport: [48.8530, 2.3499],
    markerMessage: 'Notre Dame<br> Parijs'
}
const colloseum = {
    bounds: [[41.8895, 12.4912], [41.891, 12.4935]],
    viewport: [41.8902, 12.4922],
    markerMessage: 'Colloseum<br> Rome'
}
const eiffeltower = {
    bounds: [[48.8583, 2.2945], [48.8583, 2.2945]],
    viewport: [48.8583, 2.2945],
    markerMessage: 'Eiffel Toren<br> Parijs'
}
const domvankeulen = {
    bounds: [[50.9413, 6.9583], [50.9413, 6.9583]],
    viewport: [50.9413, 6.9583],
    markerMessage: 'Dom van Keulen<br> Keulen'
}
const schloss = {
    bounds: [[48.18548, 16.3128], [48.18548, 16.3128]],
    viewport: [48.18548, 16.3128],
    markerMessage: 'Schloss Schönbrunn<br> Wenen'
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
    .bindPopup(leafletMapData.markerMessage)
    .openPopup();

map.fitBounds(leafletMapData.bounds);

function grabLeafletMapDataForTrip() {
    switch (locationName) {
        case "stonehenge": return stonehenge;
        case "notre-dame": return notredame;
        case "colosseum": return colloseum;
        case "eiffel-toren": return eiffeltower;
        case "dom-van-keulen": return domvankeulen;
        case "schloss": return schloss;
    }
}