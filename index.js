function openGoogleMapsDirections() {
  const destinationCoords = "-23.336816787719727,-46.22216796875";

  const isMobile = /Android/i.test(navigator.userAgent);

  if (isMobile) {
    const mapsMobileUrl = "geo:?daddr=" + encodeURIComponent(destinationCoords);
    window.open(mapsMobileUrl);
  } else {
    if ("geolocation" in navigator) {
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.open("https://maps.google.com/maps?ll=-23.336552,-46.222638&z=16&t=m&hl=pt-BR&gl=US&mapclient=apiv3&cid=17848247453708602673", "_blank");
      } else {
        navigator.geolocation.getCurrentPosition(function(position) {
          const userCoords = position.coords.latitude + "," + position.coords.longitude;
          const mapsDesktopUrl = "https://www.google.com/maps/dir/?api=1&origin=" + encodeURIComponent(userCoords) + "&destination=" + encodeURIComponent(destinationCoords);
          window.open(mapsDesktopUrl, "_blank");
        });
      }
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }
  
}

document.getElementById("showRouteBtn").addEventListener("click", openGoogleMapsDirections);
