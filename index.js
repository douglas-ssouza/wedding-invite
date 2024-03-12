function openWazeRoute() {
  const destinationLat = -23.336816787719727;
  const destinationLng = -46.22216796875;
  const wazeUrl = 'https://waze.com/ul?q=' + destinationLat + ',' + destinationLng + '&navigate=yes';
  window.open(wazeUrl, '_blank');
}

function openGoogleMaps() {
  window.open('https://www.google.com/maps/place/Estr.+Maril%C3%A2ndia,+1870+-+Parque+Santa+Tereza,+Santa+Isabel+-+SP,+07500-000/@-23.3368072,-46.2247426,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce8030e85643e9:0xf690aaf846bb60b!8m2!3d-23.3368072!4d-46.2221677!16s%2Fg%2F11h07pjfpb?entry=ttu', '_blank');
}

document.getElementById('wazeBtn').addEventListener('click', openWazeRoute);
document.getElementById('mapContainer').addEventListener('click', openGoogleMaps);
