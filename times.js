// declare var for today date
var date = new Date();
var day = date.getDate();
var week = "";
var month = "";
var year = date.getFullYear();
var rank = "";
// switch function to determine the day, week, month
switch (date.getDay()) {
  case 0:
    week = "Sunday";
    break;
  case 1:
    week = "Monday";
    break;
  case 2:
    week = "Tuesday";
    break;
  case 3:
    week = "Wednesday";
    break;
  case 4:
    week = "Thursday";
    break;
  case 5:
    week = "Friday";
    break;
  case 6:
    week = "Saturday";
    break;
  default:
}
switch (date.getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "Jun";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
  default:
}
switch (date.getDate()) {
  case 1:
    rank = "st";
    break;
  case 2:
    rank = "nd";
    break;
  case 3:
    rank = "rd";
    break;
  default:
    rank = "th";
    break;
}
// declaration of today date
document.getElementById("showdate").innerHTML =
  week + " " + day + rank + " " + month + " " + year;

// time 12-hours system
function showTime() {
  var date2 = new Date();
  var h = date2.getHours();
  var m = date2.getMinutes();
  var s = date2.getSeconds();
  var session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;

  // setTimeout is to delay the by 1 sec (1000 = 1 sec)
  setTimeout(showTime, 1000);
}
showTime();
