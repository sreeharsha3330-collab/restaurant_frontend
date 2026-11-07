const dishes = [
  {name:"Crispy Veg Bites",category:"Starters",price:149,description:"Golden, crunchy bites with a refreshing house dip.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"},
  {name:"Garden Fresh Salad",category:"Starters",price:179,description:"A colourful mix of greens, vegetables and light dressing.",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"},
  {name:"Paneer Butter Masala",category:"Main Course",price:289,description:"Soft paneer in a rich, creamy tomato and spice gravy.",image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80"},
  {name:"Veg Dum Biryani",category:"Main Course",price:249,description:"Fragrant basmati rice layered with vegetables and spices.",image:"https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=80"},
  {name:"Chocolate Brownie",category:"Desserts",price:129,description:"A rich chocolate treat with a soft, fudgy centre.",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"},
  {name:"Fresh Lime Cooler",category:"Drinks",price:89,description:"A refreshing citrus drink, served chilled.",image:"https://images.unsplash.com/photo-1513558161293-c746e7e054a8?auto=format&fit=crop&w=700&q=80"}
];

const menuGrid = document.getElementById("menuGrid");
function renderMenu(category = "All") {
  const visibleDishes = category === "All" ? dishes : dishes.filter(dish => dish.category === category);
  menuGrid.innerHTML = visibleDishes.map(dish => `
    <article class="menu-card">
      <img src="${dish.image}" alt="${dish.name}" loading="lazy">
      <div class="menu-info">
        <div class="menu-top"><h3>${dish.name}</h3><span class="price">₹${dish.price}</span></div>
        <p>${dish.description}</p>
      </div>
    </article>`).join("");
}

document.getElementById("menuFilters").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderMenu(button.dataset.category);
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  document.getElementById("formMessage").textContent = `Thanks, ${name}! Your demo message has been received.`;
  event.target.reset();
});
document.getElementById("year").textContent = new Date().getFullYear();
renderMenu();
