function openWazeRoute() {
  const destinationLat = -23.336816787719727;
  const destinationLng = -46.22216796875;
  const wazeUrl = 'https://waze.com/ul?q=' + destinationLat + ',' + destinationLng + '&navigate=yes';
  window.open(wazeUrl, '_blank');
}

document.getElementById('wazeBtn').addEventListener('click', openWazeRoute);
