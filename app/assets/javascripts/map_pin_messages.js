function attachMessage(marker, message, address) {
  var infowindow = new google.maps.InfoWindow({
    content: message
  });
  marker.addListener('mouseover', function() {
    infowindow.open(marker.get('map'), marker);
  })
  marker.addListener('mouseout', function() {
    infowindow.close(marker.get('map'), marker);
  })
}

function attachLockedMessage(marker, message) {
  var infowindow = new google.maps.InfoWindow({
    content: message
  });
  infowindow.open(marker.get('map'), marker);
  marker.addListener('clickOn', function() {
    infowindow.close(marker.get('map'), marker);
  })
}
