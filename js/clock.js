
// Funcion de reloj a 12hrs + Emoji
function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  let ap = (hr < 19) ? `☀` : `🌙`;

  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;

  document.getElementById("clock").innerHTML = addingZero(hr) + ":" + addingZero(min) + ":" + addingZero(sec) + " " + (ap);
  var timeOut = setTimeout(function() {startTime()},1000)
}

// Agregar el Zero al frente de los numeros <9
function addingZero(time) {
  if (time <= 9) {
      time = "0" + time;
  }
  return time;
}
// Ejecucion de la Funcion
startTime()