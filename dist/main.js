

function updateClock ( )
{
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  document.getElementById("clock").innerHTML = currentTimeString;
}

var n = 0;var g = 0;var b = 0;var f = 150;

function changeColor(){n = n+1;g = g+1;b = b+1;f = f-.8; document.getElementById("clock").style.backgroundColor = "rgb("+g+","+b+","+n+")";document.getElementById("clock").style.fontSize = f+"px";}



updateClock(); setInterval('updateClock()', 1000 );setInterval('changeColor()', 50);
