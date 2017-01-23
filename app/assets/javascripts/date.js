function todaysDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd='0'+dd
  }
  if(mm<10) {
      mm='0'+mm
  }
  return today = mm+'/'+dd+'/'+yyyy;
}

function processDate(time){
  var today = new Date(time);
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd < 10) {
      dd = '0' + dd
  }
  if(mm < 10) {
      mm = '0' + mm
  }
  return today = mm + '/' + dd + '/' + yyyy;
}

function formatAppointmentTime(time){
  var today = new Date(time);
  var h = today.getHours()
  return today = h + " " + "o'clock"
}
