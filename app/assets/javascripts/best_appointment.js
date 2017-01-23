function findClosestAddress() {
  var address = $('#pac-input').val();
  var state = {address: address};
  window.history.pushState(state, "title", updateParams("address", address));
  bestAppointment(address, getParam("date"));
}

function bestAppointment(location, date) {
  var role = ""
  if (getParam("role")) {
    role = getParam("role")
  }
  $.ajax({
    type: 'GET',
    url: "/api/v1/best_appointment.json?markerAddress=" + location + "&date=" + date + "&role=" + role,
    success: function(data) {
      placeNewAddressMarker(data)
    },
    error: function(errorBody){
      console.log(error)
    }
  })
}

function placeNewAddressMarker(data) {
  var address = addMarker({ lat: data[0].latitude, lng: data[0].longitude });
  attachLockedMessage(address, data[0].address)

  if (typeof data[1] !== "undefined") {
    var closest_appointment = addMarker({ lat: data[3].latitude, lng: data[3].longitude });
    attachLockedMessage(closest_appointment, "Closest");
  }
}
