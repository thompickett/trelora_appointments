function setDateOnPageLoad() {
  if (getParam('date') === '') {
    window.history.pushState("object or string", "Title", updateParams("date", todaysDate()));
  }
}

setDateOnPageLoad();
