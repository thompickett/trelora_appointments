function getFieldWorkers(date, role) {
  if (typeof role !== "undefined") {
    selection = role
  }

  $.ajax({
    type: 'GET',
    data: {day: date},
    url: '/api/v1/' + selection + '.json',
    success: function(data) {

      drawBaseMap()
      addRoutes(data);
    },
    error: function(errorBody){
      alert('error');
    }
  });
}
