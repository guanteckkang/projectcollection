$(document).ready(function () {
  // about
  $("#demo1").click(function () {
    $("#about").toggle();
  });
  // todolist
  $("#demo2").click(function () {
    $("#todolist").toggle();
  });
  // tictactoe
  $("#demo3").click(function () {
    $("#tictactoe").toggle();
  });
  // showtime
  $("#demo4").click(function () {
    $("#showtime").toggle();
  });
});
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
