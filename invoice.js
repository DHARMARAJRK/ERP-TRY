function download() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let sales = JSON.parse(localStorage.getItem("sales")) || [];

  doc.text("DMR Sundeep ERP Invoice", 20, 20);

  let y = 40;
  sales.forEach(s => {
    doc.text(`${s.name} - $${s.total}`, 20, y);
    y += 10;
  });

  doc.save("invoice.pdf");
}