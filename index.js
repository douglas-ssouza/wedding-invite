function openGoogleMapsDirections() {
  const destinationCoords = "-23.336816787719727,-46.22216796875";

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    const deviceProtocol = /iPhone|iPad|iPod/i.test(navigator.userAgent)
      ? "maps://?daddr=" : "geo:?daddr=";
    const mapsMobileUrl = deviceProtocol + encodeURIComponent(destinationCoords);
    window.open(mapsMobileUrl);
  } else {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const userCoords = position.coords.latitude + "," + position.coords.longitude;
        const mapsDesktopUrl = "https://www.google.com/maps/dir/?api=1&origin=" + encodeURIComponent(userCoords) + "&destination=" + encodeURIComponent(destinationCoords);
        window.open(mapsDesktopUrl, "_blank");
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }
  
}

document.getElementById("showRouteBtn").addEventListener("click", openGoogleMapsDirections);
