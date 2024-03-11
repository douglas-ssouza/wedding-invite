function openGoogleMapsDirections() {
  const destinationCoords = "-23.336816787719727,-46.22216796875";

  const isMobile = /Android/i.test(navigator.userAgent);

  if (isMobile) {
    const mapsMobileUrl = "geo:?daddr=" + encodeURIComponent(destinationCoords);
    window.open(mapsMobileUrl);
  } else {
    window.open("https://maps.google.com/maps?ll=-23.336552,-46.222638&z=16&t=m&hl=pt-BR&gl=US&mapclient=apiv3&cid=17848247453708602673");
  }
  
}

function openWazeRoute() {
  const destinationLat = -23.336816787719727;
  const destinationLng = -46.22216796875;

  const wazeUrl = 'https://waze.com/ul?q=' + destinationLat + ',' + destinationLng + '&navigate=yes';

  window.open(wazeUrl, '_blank');
}

document.getElementById("showRouteBtn").addEventListener("click", openGoogleMapsDirections);
document.getElementById("wazeBtn").addEventListener("click", openWazeRoute);
