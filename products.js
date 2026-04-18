let current = "all";

function loadProducts() {
  if (!localStorage.getItem("products")) {
    const products = [
      { name: "Beer", price: 5, category: "Beer", image: "images/beer.jpg" },
      { name: "Wine", price: 12, category: "Wine", image: "images/wine.jpg" },
      { name: "Whisky", price: 20, category: "Spirits", image: "images/whisky.jpg" },
      { name: "Vodka", price: 15, category: "Spirits", image: "images/vodka.jpg" },
      { name: "Rum", price: 14, category: "Spirits", image: "images/rum.jpg" },
      { name: "Gin", price: 16, category: "Spirits", image: "images/gin.jpg" },
      { name: "Tequila", price: 22, category: "Spirits", image: "images/tequila.jpg" },
      { name: "Mezcal", price: 25, category: "Spirits", image: "images/mezcal.jpg" }
    ];
    localStorage.setItem("products", JSON.stringify(products));
  }

  display();
}

function display() {
  let products = JSON.parse(localStorage.getItem("products"));

  if (current !== "all") {
    products = products.filter(p => p.category === current);
  }

  document.getElementById("grid").innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="sell('${p.name}', ${p.price})">Sell</button>
    </div>
  `).join("");
}

function filter(cat) {
  current = cat;
  display();
}

function sell(name, price) {
  let sales = JSON.parse(localStorage.getItem("sales")) || [];
  sales.push({ name, qty: 1, total: price });
  localStorage.setItem("sales", JSON.stringify(sales));
  alert("Sold " + name);
}

loadProducts();