function openGoogleMapsDirections() {
  const destinationCoords = "-23.336816787719727,-46.22216796875";
  
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const userCoords = position.coords.latitude + "," + position.coords.longitude;
      const mapsUrl = "https://www.google.com/maps/dir/?api=1&origin=" + encodeURIComponent(userCoords) + "&destination=" + encodeURIComponent(destinationCoords);
      window.open(mapsUrl, "_blank");
    });
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

document.getElementById("showRouteBtn").addEventListener("click", openGoogleMapsDirections);
