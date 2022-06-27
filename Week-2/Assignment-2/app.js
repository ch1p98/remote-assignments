function avg(data) {
  let items = data.products;
  let prices = 0;

  for (let i = 0; i < items.length; i++) {
    prices += items[i].price;
  }
  return prices / items.length;
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
