// function about
function demo1() {
  const x = document.getElementById("about");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else if ((x.style.display = "block")) {
    x.style.display = "none";
  }
}
// function todolist
function demo2() {
  const x = document.getElementById("todolist");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else if ((x.style.display = "block")) {
    x.style.display = "none";
  }
}
// function tic tac toe
// marking "x" or "o"
var count = 1;
function demo3() {
  const x = document.getElementById("tictactoe");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else if ((x.style.display = "block")) {
    x.style.display = "none";
  }
}
function boxs1() {
  if (count == 1) {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    count = 0;
  } else {
    document.getElementById("b1").value = "O";
    document.getElementById("b1").disabled = true;
    count = 1;
  }
}
function boxs2() {
  if (count == 1) {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    count = 0;
  } else {
    document.getElementById("b2").value = "O";
    document.getElementById("b2").disabled = true;
    count = 1;
  }
}
function boxs3() {
  if (count == 1) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    count = 0;
  } else {
    document.getElementById("b3").value = "O";
    document.getElementById("b3").disabled = true;
    count = 1;
  }
}
function boxs4() {
  if (count == 1) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    count = 0;
  } else {
    document.getElementById("b4").value = "O";
    document.getElementById("b4").disabled = true;
    count = 1;
  }
}
function boxs5() {
  if (count == 1) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    count = 0;
  } else {
    document.getElementById("b5").value = "O";
    document.getElementById("b5").disabled = true;
    count = 1;
  }
}
function boxs6() {
  if (count == 1) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    count = 0;
  } else {
    document.getElementById("b6").value = "O";
    document.getElementById("b6").disabled = true;
    count = 1;
  }
}
function boxs7() {
  if (count == 1) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    count = 0;
  } else {
    document.getElementById("b7").value = "O";
    document.getElementById("b7").disabled = true;
    count = 1;
  }
}
function boxs8() {
  if (count == 1) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    count = 0;
  } else {
    document.getElementById("b8").value = "O";
    document.getElementById("b8").disabled = true;
    count = 1;
  }
}
function boxs9() {
  if (count == 1) {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").disabled = true;
    count = 0;
  } else {
    document.getElementById("b9").value = "O";
    document.getElementById("b9").disabled = true;
    count = 1;
  }
}
// check results
function checkwin() {
  var box1 = document.getElementById("b1").value;
  var box2 = document.getElementById("b2").value;
  var box3 = document.getElementById("b3").value;
  var box4 = document.getElementById("b4").value;
  var box5 = document.getElementById("b5").value;
  var box6 = document.getElementById("b6").value;
  var box7 = document.getElementById("b7").value;
  var box8 = document.getElementById("b8").value;
  var box9 = document.getElementById("b9").value;
  if (
    (box1 == "X" && box2 == "X" && box3 == "X") ||
    (box4 == "X" && box5 == "X" && box6 == "X") ||
    (box7 == "X" && box8 == "X" && box9 == "X") ||
    (box1 == "X" && box4 == "X" && box7 == "X") ||
    (box2 == "X" && box5 == "X" && box8 == "X") ||
    (box3 == "X" && box6 == "X" && box9 == "X") ||
    (box1 == "X" && box5 == "X" && box9 == "X") ||
    (box3 == "X" && box5 == "X" && box7 == "X")
  ) {
    alert("Player X WIN");
  } else if (
    (box1 == "O" && box2 == "O" && box3 == "O") ||
    (box4 == "O" && box5 == "O" && box6 == "O") ||
    (box7 == "O" && box8 == "O" && box9 == "O") ||
    (box1 == "O" && box4 == "O" && box7 == "O") ||
    (box2 == "O" && box5 == "O" && box8 == "O") ||
    (box3 == "O" && box6 == "O" && box9 == "O") ||
    (box1 == "O" && box5 == "O" && box9 == "O") ||
    (box3 == "O" && box5 == "O" && box7 == "O")
  ) {
    alert("Player O WIN");
  } else {
    if (count == 1) {
      document.getElementById("turns").innerHTML = "Player X turns";
    } else {
      document.getElementById("turns").innerHTML = "Player O turns";
    }
  }
}
// reset game function
function reset() {
  document.getElementById("b1").value = "";
  document.getElementById("b1").disabled = false;
  document.getElementById("b2").value = "";
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").value = "";
  document.getElementById("b3").disabled = false;
  document.getElementById("b4").value = "";
  document.getElementById("b4").disabled = false;
  document.getElementById("b5").value = "";
  document.getElementById("b5").disabled = false;
  document.getElementById("b6").value = "";
  document.getElementById("b6").disabled = false;
  document.getElementById("b7").value = "";
  document.getElementById("b7").disabled = false;
  document.getElementById("b8").value = "";
  document.getElementById("b8").disabled = false;
  document.getElementById("b9").value = "";
  document.getElementById("b9").disabled = false;
}

// function showtime
// declare var for today date
function demo4() {
  const x = document.getElementById("showtimes");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else if ((x.style.display = "block")) {
    x.style.display = "none";
  }
}
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
