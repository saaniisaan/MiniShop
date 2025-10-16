// ==== Dark Mode Toggle ====
const toggleBtn = document.getElementById("toggle-mode");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// ==== Search Filter ====
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const items = document.querySelectorAll(".gericht");
    items.forEach(item => {
      const text = item.querySelector("h2").innerText.toLowerCase();
      item.style.display = text.includes(filter) ? "" : "none";
    });
  });
}

// ==== Shopping Cart ====
let cartCount = 0;
const cartDisplay = document.getElementById("cart");
const addButtons = document.querySelectorAll(".add-to-cart");

addButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
    cartCount++;
    if (cartDisplay) cartDisplay.innerText = `🛒 ${cartCount}`;
  });
});
