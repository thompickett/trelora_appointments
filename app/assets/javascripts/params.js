function updateParams(key, value) {
  var params = prepareUrl()
  if (!params) {
    return "?" + key + "=" + value
  } else if (params.includes(key)) {
    return params.replace(key + "=" + getParam(key), key + "=" + value)
  } else {
    return params + "&" + key + "=" + value
  }
}

function prepareUrl() {
  return window.location.search.replace("%20", " ")
}

function getParam(key) {
  var value = ''
  var params = prepareUrl().replace("?", "").split("&");
  params.forEach(function (param) {
    tmp = param.split("=")
      if (tmp[0] === key) {
        value = tmp[1]
      }
  })
  return value
}
