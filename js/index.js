const dummyURL = "https://dummyjson.com/products";
const container = document.querySelector(".container");

fetch(dummyURL)
  .then((resp) => resp.json())
  .then((data) => {
    const { products } = data;
    products
      .filter((item, index) => index <= 4)
      .forEach(item => {
        const { thumbnail, price, discountPercentage, description } = item;
        const oldPrice = ( price +(price * discountPercentage) / 100).toFixed(2)
        let html = `
        <div class="item">
        <div class="img-box">
          <img src=${thumbnail} alt="" />
        </div>
        <div class="data-box">
          <div class="price-box">
            <p class="current-price">${price}</p>
            <p class="old-price">${oldPrice}</p>
          </div>
          <p class="desc">${description}</p>
        </div>
        <button class="btn">Sebete at</button>
        <button class="icon-btn"><i class="fa-solid fa-cash-register"></i></button>
        <button class="icon-btn"><i class="fa-solid fa-heart"></i></button>
      </div>`;
        container.insertAdjacentHTML("beforeend", html);
      });
  });
