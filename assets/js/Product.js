const products = [
  { name: "After glow Tablet", img: "assets/img/iteams/After glow Tablet.jpg" },
{ name: "Ancelin soap", img: "assets/img/iteams/Ancelin soap.jpg" },
{ name: "Avert-NTD-Tablet", img: "assets/img/iteams/Avert-NTD-Tablet.jpg" },
{ name: "Caloap - Soap & lotion", img: "assets/img/iteams/Caloap - Soap & lotion.jpg" },
{ name: "Caloap", img: "assets/img/iteams/Caloap.jpg" },
{ name: "Ceezen", img: "assets/img/iteams/Ceezen.jpg" },
{ name: "Doxyflora Capsule", img: "assets/img/iteams/Doxyflora Capsule.jpg" },
{ name: "Dyad - Capsule", img: "assets/img/iteams/Dyad - Capsule.jpg" },
{ name: "Dyad - P - Tablet", img: "assets/img/iteams/Dyad - P - Tablet.jpg" },
{ name: "Erady Gel", img: "assets/img/iteams/Erady Gel.jpg" },
{ name: "Erady Plus Tablet", img: "assets/img/iteams/Erady Plus Tablet.jpg" },
{ name: "Erady Tablet", img: "assets/img/iteams/Erady Tablet.jpg" },
{ name: "Grismon Ointment", img: "assets/img/iteams/Grisomon Ointment.jpg" },
{ name: "Huchnil - Tablet - Syrup", img: "assets/img/iteams/Huchnil - Tablet - Syrup.jpg" },
{ name: "Huchnil", img: "assets/img/iteams/Huchnil.jpg" },
{ name: "Huchnil-M-Tablet", img: "assets/img/iteams/Huchnil-M-Tablet.jpg" },
{ name: "Konazed - soap - shampoo", img: "assets/img/iteams/Konazed - soap - shampoo.jpg" },
{ name: "Neo - Bc", img: "assets/img/iteams/Neo - Bc.jpg" },
{ name: "Proctonil Capsules - cream", img: "assets/img/iteams/Proctonil Capsules - cream.jpg" },
{ name: "Scalynil - soap", img: "assets/img/iteams/Scalynil - soap.jpg" },
{ name: "Scaynil ointment", img: "assets/img/iteams/Scaynil ointment.jpg" },
{ name: "Sputnik - D-sYRUP", img: "assets/img/iteams/Sputnix - D -sYRUP.jpg" },
{ name: "Sputnik - Tablet - Syrup", img: "assets/img/iteams/Sputnix - Tablet - Syrup.jpg" },
{ name: "Sputnik Lc Syrup", img: "assets/img/iteams/Sputnix Lc Syrup.jpg" },
{ name: "Sputnik LS - Junior syrup", img: "assets/img/iteams/Sputnix LS - Junior syrup.jpg" },
{ name: "Timofex - tablet", img: "assets/img/iteams/Timofex - tablet.jpg" },
{ name: "Timofex 180 - tablet", img: "assets/img/iteams/Timofex 180 - tablet.jpg" },
{ name: "Timovit 5G-Softgel", img: "assets/img/iteams/Timovit 5G-Softgel.jpg" },
{ name: "Timovit Drops - Guava flavour", img: "assets/img/iteams/Timovit Drops -Guava flavour.jpg" },
{ name: "Timovit Syrup Guava Flavour", img: "assets/img/iteams/Timovit Syrup Guava Flavour.jpg" },
{ name: "Timovit Tablet", img: "assets/img/iteams/Timovit Tablet.jpg" },
{ name: "Uniflora - Capsule", img: "assets/img/iteams/Uniflora - Capsule.jpg" },
{ name: "Sputnix Ls Syrup", img: "assets/img/iteams/Sputnix Ls Syrup.jpeg" },
 
];

const searchBar = document.getElementById("searchBar");
const results = document.getElementById("results");
const productList = document.getElementById("productList");

// Render products in cards
function renderProducts(list) {
  productList.innerHTML = "";

  if (list.length === 0) {
    productList.innerHTML = `
      <div class="col-12">
        <div class="card text-center shadow-sm p-4">
          <h5 class="card-title text-danger">Oops! No products found</h5>
          <p class="card-text">Please contact our admin for assistance.</p>
          <div class="d-flex justify-content-center gap-3">
            <a href="tel:+919444131857" class="btn btn-primary">
              <i class="bi bi-telephone-fill me-1"></i> Call Now
            </a>
            <a href="contact.html" class="btn btn-outline-secondary">
              <i class="bi bi-envelope-fill me-1"></i> Contact Us
            </a>
          </div>
        </div>
      </div>
    `;
    return;
  }

  list.forEach(p => {
    productList.innerHTML += `
      <div class="col-md-2 col-6 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${p.img}" class="card-img-top" alt="${p.name}" onerror="this.onerror=null;this.src='assets/img/iteams/1.jpg';">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
          </div>
        </div>
      </div>
    `;
  });
}

// Initial load
renderProducts(products);

// Search autocomplete + filter
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  results.innerHTML = "";

  const filtered = products.filter(p => p.name.toLowerCase().includes(query));

  // Autocomplete dropdown
  if (query && filtered.length > 0) {
    filtered.forEach(p => {
      const item = document.createElement("div");
      item.classList.add("autocomplete-item");
      item.innerHTML = `<img src="${p.img}" alt="" onerror="this.onerror=null;this.src='assets/img/iteams/1.jpg';"> <span>${p.name}</span>`;
      item.addEventListener("click", () => {
        searchBar.value = p.name;
        results.classList.add("d-none");
        renderProducts([p]);
      });
      results.appendChild(item);
    });
    results.classList.remove("d-none");
  } else {
    results.classList.add("d-none");
  }

  // Show filtered cards
  renderProducts(filtered);
});

// Close results when clicking outside
document.addEventListener("click", (e) => {
  if (!results.contains(e.target) && e.target !== searchBar) {
    results.classList.add("d-none");
  }
});