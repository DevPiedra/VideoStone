var today = new Date();
var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();


function startTime() {

  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  let ap = (hr < 12) ? `☀` : `🌙`;

  document.getElementById("clock").innerHTML = addingZero(hr) + ":" + addingZero(min) + ":" + addingZero(sec) + " " + (ap);

  sec = sec++;

  hr = Math.floor((sec/100)/60);
  min = Math.floor((sec/100) - (hr * 60));

}

// Agregar el Zero al frente de los numeros <9
function addingZero(time) {
  if (time <= 9) {
      time = "0" + time;
  }
  return time;
}

var interval = setInterval(startTime(), 1000);