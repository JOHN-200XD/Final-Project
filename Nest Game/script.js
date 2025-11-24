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
// login by mon //
const loginIcon = document.querySelector(".login");
const loginPopup = document.getElementById("loginPopup");
const loginBox = document.getElementById("loginBox");
const closeBtn = document.getElementById("closeBtn");

// close popup when clicking "ตกลง" (login submit)
const loginSubmit = document.getElementById("loginSubmit");
if (loginSubmit) {
  loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    closeLogin();
  });
}

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
// sing in phoom
const signinIcon = document.querySelector(".signin");
const signinPopup = document.getElementById("signinPopup");
const signinBox = document.getElementById("signinBox");
const closepop = document.getElementById("closepop");

if (signinSubmit) {
  signinSubmit.addEventListener("click", (f) => {
    f.preventDefault();
    closesignin();
  });
}

signinIcon.addEventListener("click", () => {
  signinPopup.style.display = "flex";
  loginPopup.style.display = "none";

  setTimeout(() => {
    signinBox.style.opacity = "1";
    signinBox.style.transform = "translateY(0)";
  }, 10);
});

closepop.addEventListener("click", closesignin);

signinPopup.addEventListener("click", (f) => {
  if (f.target === signinPopup) closesignin();
});

function closesignin() {
  signinBox.style.opacity = "0";
  signinBox.style.transform = "translateY(-15px)";

  setTimeout(() => {
    signinPopup.style.display = "none";
  }, 200);
}

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", function () {
  const text = searchBar.value.toLowerCase().trim();
  const sections = document.querySelectorAll(".container-1");
  const slideshow = document.querySelector(".contor");
  const navbarHeight = document.querySelector(".nav-bar").offsetHeight;
  let firstMatchSection = null;

  // hide/show slideshow
  slideshow.style.display = text === "" ? "block" : "none";

  sections.forEach((section) => {
    const items = section.querySelectorAll(".wap-in");
    let sectionHasMatch = false;

    items.forEach((item) => {
      const name = item.querySelector("h5").textContent.toLowerCase();
      if (name.includes(text)) {
        item.style.display = "inline-block";
        sectionHasMatch = true;
      } else {
        item.style.display = "none";
      }
    });

    section.style.display = sectionHasMatch ? "block" : "none";

    if (sectionHasMatch && !firstMatchSection) {
      firstMatchSection = section;
    }
  });

  if (firstMatchSection) {
    const sectionPosition =
      firstMatchSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionPosition - navbarHeight - 10,
      behavior: "smooth",
    });
  }
});

function bt() {
  const text = searchBar.value.toLowerCase().trim();
  const items = document.querySelectorAll(".wap-in");

  items.forEach((item) => {
    const name = item.querySelector("h5").textContent.toLowerCase();

    if (name.includes(text)) {
      item.style.display = "inline-block";
    } else {
      item.style.display = "none";
    }
  });
}

const PRODUCTS = {
  123: {
    name: "Age of Mythology: Retold",
    price: 495,
    originalPrice: 990,
    discount: "50%",
  },

  124: {
    name: "Another Game",
    price: 700,
    originalPrice: 1000,
    discount: "30%",
  },
};

let shoppingCart = [];

function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find((i) => i.id === id);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert($, { name }, ถูกเพิ่มลงตะกร้าแล้ว);
}

function goToCart() {
  window.location.href = "cart.html"; // ชื่อไฟล์ตะกร้าสินค้า
}
