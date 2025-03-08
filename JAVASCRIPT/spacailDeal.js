const url = "../DATA/HomeData.json";
const Row = document.getElementById("SpacailGetRow");

const getAllChair = async () => {
  const Data = await fetch(url);
  const Result = await Data.json();

  Result.forEach((Spacail) => {
    Row.innerHTML += `
      <div class="col-xl-2 col-md-4 col-sm-6 col-6 mb-4">
        <div data-aos="fade-up">
          <div class="cards-big p-3" data-id="${Spacail.id}" onclick="showProductDetails(${Spacail.id})">
            <img class="image mb-3" src="${Spacail.image}" alt="">
            <div class="details text-light">
              <h5>${Spacail.title}</h5>
              <del class="mt-1 me-1">${Spacail.price}$</del>
              <span class="me-1">${Spacail.discount}$</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
};

const showProductDetails = (productId) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const product = data.find((item) => item.id === productId);
      if (product) {
        document.getElementById("modalImage").src = product.image;
        document.getElementById("modalTitle").innerText = product.title;
        document.getElementById("modalDescription").innerText = product.description;
        document.getElementById("modalPrice").innerText = `$${product.price}`;
        document.getElementById("modalDiscount").innerText = `$${product.discount}`;

        // Show the modal
        const productModal = new bootstrap.Modal(document.getElementById("productModal"));
        productModal.show();
      }
    });
};

getAllChair();
// ======================================================
const url1 = "../DATA/HomeData01.json";
const Rows = document.getElementById("SpacailGetRows");

const getAll = async () => {
  const Data = await fetch(url1);
  const Result = await Data.json();

  Result.forEach((Temp) => {
    Rows.innerHTML += `
        <div class="col-xl-2 col-md-4 col-sm-6 col-6 mb-4">
          <div data-aos="fade-up">
            <div class="cards-big p-3" data-id="${Temp.id}" onclick="showProductDetailsBig(${Temp.id})">
              <img class="image mb-3" src="${Temp.image}" alt="">
              <div class="details text-light">
                <h5>${Temp.title}</h5>
                <p>${Temp.brands}</p>
                <del class="mt-1 me-1">${Temp.price}$</del>
                <span class="me-1">${Temp.discount}$</span>
              </div>
            </div>
          </div>
        </div>
    `;
  });
};

const showProductDetailsBig = (productId) => {
  fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      const product = data.find((item) => item.id === productId);
      if (product) {
        document.getElementById("modalImageBig").src = product.image;
        document.getElementById("modalTitleBig").innerText = product.title;
        document.getElementById("modalDescriptionBig").innerText = product.detail;
        document.getElementById("modalBrandBig").innerText = product.brands || "N/A"; // Assuming 'brand' is a field in your data
        document.getElementById("modalPriceBig").innerText = `$${product.price}`;
        document.getElementById("modalDiscountBig").innerText = `$${product.discount}`;

        // Show the modal
        const productModalBig = new bootstrap.Modal(document.getElementById("productModalBig"));
        productModalBig.show();
      }
    });
};

getAll();
//================================================================
const url2 = "../DATA/HomeData02.json";
const Rowss = document.getElementById("SpacailGetRowss");

const getAlls = async () => {
  const Data = await fetch(url2);
  const Result = await Data.json();

  Result.forEach((Tempor) => {
    Rowss.innerHTML += `
        <div class="col-xl-4 col-md-6 col-12 mb-4">
          <div data-aos="fade-up">
            <div class="cards d-flex p-3" data-id="${Tempor.id}" onclick="showProductDetailsDown(${Tempor.id})">
              <img class="img" src="${Tempor.image}" alt="" />
              <div class="detail text-light">
                <h5>${Tempor.title}</h5>
                <p class="p small-khmer">${Tempor.other}</p>
                <del class="mt-0">${Tempor.price}$</del>
                <span class="me-1">${Tempor.discount}$</span>
              </div>
            </div>
          </div>
        </div>
    `;
  });
};

const showProductDetailsDown = (productId) => {
  fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      const product = data.find((item) => item.id === productId);
      if (product) {
        document.getElementById("modalImageDown").src = product.image;
        document.getElementById("modalTitleDown").innerText = product.title;
        document.getElementById("modalDescriptionDown").innerText = product.other; // Assuming 'other' is the description field
        document.getElementById("modalPriceDown").innerText = `$${product.price}`;
        document.getElementById("modalDiscountDown").innerText = `$${product.discount}`;

        // Show the modal
        const productModalDown = new bootstrap.Modal(document.getElementById("productModalDown"));
        productModalDown.show();
      }
    });
};

getAlls();