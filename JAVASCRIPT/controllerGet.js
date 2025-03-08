const url = "../DATA/controllerData.json";
const Row = document.getElementById("Controller");

const getAllChair = async () => {
    const Data = await fetch(url);
    const Result = await Data.json();
    console.log(Result); // Check if data is loaded
    Result.forEach((Spacail) => {
      Row.innerHTML += `
        <div class="col-xl-2 col-md-4 col-sm-6 col-6 mb-4" data-aos="fade-right">
            <div >
                <div class="cards-big p-3" data-id="${Spacail.id}" onclick="showProductDetails(${Spacail.id})">
                <img class="image mb-3 img-fluid" src="${Spacail.image}" alt="">
                <div class="details text-light">
                    <h5>${Spacail.title}</h5>
                    <p>${Spacail.detail}</p>
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
          document.getElementById("modalSpecs").innerText = product.detail; // Assuming 'specs' is the field for specifications
          document.getElementById("modalPrice").innerText = `$${product.price}`;
          document.getElementById("modalDiscount").innerText = `$${product.discount}`;
  
          // Show the modal
          const productModal = new bootstrap.Modal(document.getElementById("productModal"));
          productModal.show();
        }
      });
  };

getAllChair();