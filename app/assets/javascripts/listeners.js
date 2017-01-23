$( document ).ready(function() {

  $('#datepicker').datepicker({
    onSelect: function(dateText, inst) {
      drawBaseMap()
      window.history.pushState("object or string", "Title", updateParams("date", dateText));
      getFieldWorkers(dateText)
      date = dateText
      if (getParam("address")) {
        bestAppointment(getParam("address"), getParam("date"))
      }
    }
  });

  $(".field_workers").on("click", selectFieldWorker)
  $(".arrow").on("click", navDate);
});

function selectFieldWorker(dateText, inst) {
  var buttonText = $(this).find("a").text().toLowerCase()
  var role = buttonText
  if (buttonText === "all") {
    role = "field_workers"
  }
  window.history.pushState("object or string", "Title", updateParams("role", role));
  getFieldWorkers(date, role)
  if (getParam("address")) {
    bestAppointment(getParam("address"), getParam("date"))
  }
};

function navDate() {
  var buttonText = $(this).find("a").text()
  if (buttonText === "Previous") {
    var currentDate = new Date(date).getTime() - 86400000;
  } else {
    var currentDate = new Date(date).getTime() + 86400000;
  }
  var newDate = new Date(currentDate);
  date = processDate(newDate)
  window.history.pushState("object or string", "Title", updateParams("date", date));
  getFieldWorkers(date)
  if (getParam("address")) {
    bestAppointment(getParam("address"), getParam("date"))
  }
};
