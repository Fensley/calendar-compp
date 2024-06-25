const today = document.getElementById("today");
const thisweek = document.getElementById("thisweek");
const nextweek = document.getElementById("nextweek");
const vinsink = document.getElementById("vinsink");
const dixnev = document.getElementById("dixnev");
const date = document.getElementById("date");
const trant = document.getElementById("trant");
const twa = document.querySelector(".twa");
const circle = document.querySelector(".circle");

today.addEventListener("click", () => {
  today.style.backgroundColor = "#764bfe";
  today.style.color = "white";

  thisweek.style.backgroundColor = "white";
  thisweek.style.color = "black";

  nextweek.style.backgroundColor = "white";
  nextweek.style.color = "black";

  vinsink.style.backgroundColor = "#764bfe";
  vinsink.style.color = "white";

  dixnev.style.backgroundColor = "white";
  dixnev.style.color = "black";
  date.innerHTML = "June 2024";

  trant.style.backgroundColor = "white";
  trant.style.color = "black";

  twa.style.backgroundColor = "white";
  twa.style.color = "black";
});

thisweek.addEventListener("click", () => {
  today.style.backgroundColor = "white";
  today.style.color = "black";

  thisweek.style.backgroundColor = "#fd4a6e";
  thisweek.style.color = "white";

  nextweek.style.backgroundColor = "white";
  nextweek.style.color = "black";

  vinsink.style.backgroundColor = "white";
  vinsink.style.color = "black";

  dixnev.style.backgroundColor = "#fd4a6e";
  dixnev.style.color = "white";
  date.innerHTML = "June 2024";

  trant.style.backgroundColor = "white";
  trant.style.color = "black";

  twa.style.backgroundColor = "white";
  twa.style.color = "black";
});

nextweek.addEventListener("click", () => {
  nextweek.style.backgroundColor = "#fc8c1f";
  nextweek.style.color = "white";

  thisweek.style.backgroundColor = "white";
  thisweek.style.color = "black";

  today.style.backgroundColor = "white";
  today.style.color = "black";

  vinsink.style.backgroundColor = "white";
  vinsink.style.color = "black";

  dixnev.style.backgroundColor = "white";
  dixnev.style.color = "black";

  date.innerHTML = "July 2024";
  trant.style.backgroundColor = "#fc8c1f";
  trant.style.color = "white";

  twa.style.backgroundColor = "#fc8c1f";
  twa.style.color = "white";
});

circle.addEventListener("click", () => {
  alert("you have 21 mores meeting on your calendar");
});
