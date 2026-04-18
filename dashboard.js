function loadDashboard() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let sales = JSON.parse(localStorage.getItem("sales")) || [];

  document.getElementById("pCount").innerText = products.length;
  document.getElementById("sCount").innerText = sales.length;

  let revenue = sales.reduce((sum, s) => sum + s.total, 0);
  document.getElementById("revenue").innerText = revenue;

  new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: sales.map(s => s.name),
      datasets: [{
        label: "Sales",
        data: sales.map(s => s.total),
        backgroundColor: "#0d6efd"
      }]
    }
  });
}