function loadSales() {
  let sales = JSON.parse(localStorage.getItem("sales")) || [];

  document.getElementById("salesList").innerHTML = sales.map(s => `
    <li>${s.name} - $${s.total}</li>
  `).join("");
}

loadSales();