// ----------------------------------------------------
//  SECTION 1: Slide Show Function
// ----------------------------------------------------
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

setInterval(netx, 5000);
show();

// ----------------------------------------------------
//  SECTION 2: Login Popup (Mon)
// ----------------------------------------------------
const loginIcon = document.querySelector(".login");
const loginPopup = document.getElementById("loginPopup");
const loginBox = document.getElementById("loginBox");
const closeBtn = document.getElementById("closeBtn");

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

// ----------------------------------------------------
//  SECTION 3: Signin Popup (Phoom)
// ----------------------------------------------------
const signinIcon = document.querySelector(".signin");
const signinPopup = document.getElementById("signinPopup");
const signinBox = document.getElementById("signinBox");
const closepop = document.getElementById("closepop");
const signinSubmit = document.getElementById("signinSubmit");

signinSubmit.addEventListener("click", (f) => {
  f.preventDefault();
  closesignin();
});

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

// ----------------------------------------------------
//  SECTION 4: Search System
// ----------------------------------------------------
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", function () {
  const text = searchBar.value.toLowerCase().trim();
  const sections = document.querySelectorAll(".container-1");
  const slideshow = document.querySelector(".contor");
  const navbarHeight = document.querySelector(".nav-bar").offsetHeight;
  let firstMatchSection = null;

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

    section.style.display = sectionHasMatch ? "" : "none";
    if (sectionHasMatch && !firstMatchSection) firstMatchSection = section;
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
    item.style.display = name.includes(text) ? "inline-block" : "none";
  });
}

// ----------------------------------------------------
//  SECTION 5: Product List (Hardcoded)
// ----------------------------------------------------
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

// ----------------------------------------------------
//  SECTION 6: Cart System (Open, Close, Save, Load)
// ----------------------------------------------------
let shoppingCart = [];

const cartIcon = document.querySelector(".market");
const cartOverlay = document.getElementById("cartOverlay");
const cartPopup = document.getElementById("cartPopup");
const cartClose = document.getElementById("cartClose");
const clearCartBtn = document.getElementById("clearCart");

function openCart() {
  cartOverlay.classList.add("active");
  cartPopup.classList.add("active");
  updateCartUI();
}
function closeCart() {
  cartOverlay.classList.remove("active");
  cartPopup.classList.remove("active");
}

cartIcon.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

clearCartBtn.addEventListener("click", () => {
  shoppingCart = [];
  saveCart();
  updateCartUI();
});

function addToCart(id, name, price) {
  shoppingCart.push({ id, name, price });
  saveCart();
  openCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(shoppingCart));
}

function loadCart() {
  const saved = localStorage.getItem("cart");
  if (saved) shoppingCart = JSON.parse(saved);
}

loadCart();
updateCartUI();

function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";
  let total = 0;

  shoppingCart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <div>${item.name}<br><small>${item.price} บาท</small></div>
        <button onclick="removeCartItem(${index})">ลบ</button>
      </div>
    `;
  });

  cartTotal.textContent = total;
}

function removeCartItem(index) {
  shoppingCart.splice(index, 1);
  saveCart();
  updateCartUI();
}

// ----------------------------------------------------
//  SECTION 7: Scroll To Contact / Scroll Menu
// ----------------------------------------------------
const contactLink = document.querySelector('a[href="#end"]');

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("end").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

document.querySelectorAll("#navgame a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 120;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// ----------------------------------------------------
//  SECTION 8: Duplicate addToCart + User System
// ----------------------------------------------------
function addToCart(id, name, price) {
  shoppingCart.push({ id, name, price });
  localStorage.setItem("cart", JSON.stringify(shoppingCart));
  alert(name + " ถูกเพิ่มเข้าตะกร้าแล้ว!");
}

function loadCart() {
  const saved = localStorage.getItem("cart");
  if (saved) shoppingCart = JSON.parse(saved);
}

loadCart();

// ----------------------------------------------------
//  SECTION 9: User Registration
// ----------------------------------------------------
function registerUser() {
  const username = document.querySelector('input[name="usrnamesignin"]').value;
  const password = document.querySelector('input[name="urspwdsingin"]').value;

  if (!username || !password) {
    alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[username]) {
    alert("ชื่อผู้ใช้นี้ถูกใช้แล้ว");
    return;
  }

  users[username] = { password };
  localStorage.setItem("users", JSON.stringify(users));

  alert("สมัครสมาชิกเรียบร้อย!");
  closesignin();

  signinSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    registerUser();
  });
}

// ----------------------------------------------------
//  SECTION 10: Checkout
// ----------------------------------------------------
const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", () => {
  if (shoppingCart.length === 0) {
    alert("ตะกร้าว่าง!");
    return;
  }

  const total = shoppingCart.reduce((sum, item) => sum + item.price, 0);
  alert(
    `ยืนยันการสั่งซื้อทั้งหมด จำนวน ${shoppingCart.length} ชิ้น รวม ${total} บาท`
  );

  shoppingCart = [];
  saveCart();
  updateCartUI();
  closeCart();
});
