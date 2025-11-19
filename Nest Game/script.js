const pg = [
  "img/add.png",
  "img/Arc.jpg",
  "img/battlefield-6.jpg",
  "img/kingdom-2.png",
  "img/R.E.P.O..jpg",
  "img/Peak.jpg",
];

let num = 0;
function show() {
  document.getElementById("img").src = pg[num];
}
function black() {
  num--;
  if (num < 0) num = pg.length - 1;
  show();
}
function netx() {
  num++;
  if (num >= pg.length) num = 0;
  show();
}

const loginIcon = document.querySelector(".login");
const loginPopup = document.getElementById("loginPopup");
const loginBox = document.getElementById("loginBox");
const closeBtn = document.getElementById("closeBtn");

loginIcon.addEventListener("click", () => {
  loginPopup.style.display = "flex";

  setTimeout(() => {
    loginBox.style.opacity = "1";
    loginBox.style.transform = "translateY(0)";
  }, 10);
});

closeBtn.addEventListener("click", closeLogin);

loginPopup.addEventListener("click", (e) => {
  if (e.target === loginPopup) closeLogin();
});

function closeLogin() {
  loginBox.style.opacity = "0";
  loginBox.style.transform = "translateY(-15px)";

  setTimeout(() => {
    loginPopup.style.display = "none";
  }, 200);
}
