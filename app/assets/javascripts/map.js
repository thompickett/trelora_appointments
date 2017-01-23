// draw base map
var selection = 'field_workers';
var map;

function drawBaseMap() {
  $("#datepicker").val(getParam("date"))
  var address = getParam("address")
  while (address.includes("%20")) {
    address = address.replace("%20", " ")
  }
  $("#pac-input").val(address)
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  // render map
  // $('#map').html('');
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.753, lng: -104.9775},
    zoom: 11
  });

  // render search bar
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  google.maps.event.addListener(searchBox, 'places_changed', findClosestAddress)

  return searchBox;
}

function addMarker(position) {
  return new google.maps.Marker({
    map: map,
    position: position,
  });
}

function addRoutes(fieldWorkers) {
  var directionsService = new google.maps.DirectionsService;
  var colors = ['#993300', '#0099cc', '#669999', '#cc3300', '#009999', '#cc6699', 'yellow'];
  var trelora = "2401 15th st, Denver CO 80202";

  fieldWorkers.forEach(function(fieldWorker, index){

    var waypoints = [];

    fieldWorker.appointments.forEach(function(appointment){
      waypoints.push({location: appointment.location.address});
      var startTime = formatAppointmentTime(appointment.info.start_time)
      var endTime = formatAppointmentTime(appointment.info.end_time)
      var marker = addMarker({ lat: appointment.location.latitude, lng: appointment.location.longitude });
      var message = fieldWorker.username + "<br>" + startTime + "<br>" + endTime +
                    "<br>" + appointment.location.address
      attachMessage(marker,message,appointment.location.address)
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: colors[index]
      }
    });
    directionsService.route({
      origin: trelora,
      destination: trelora,
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.DRIVING,
      avoidTolls: true
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setOptions({ preserveViewport: true });
        directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  });
}

function initMap() {
  searchBar = drawBaseMap();

  date = getParam('date');

  if (getParam("role")) {
    selection = getParam("role");
  }

  getFieldWorkers(date);
  if (getParam("address")) {
    bestAppointment(getParam("address"), date)
  }
}
