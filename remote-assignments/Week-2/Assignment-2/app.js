function avg(data) {
  let items = data.products;
  let prices = [];

  for (let i = 0; i < items.length; i++) {
    prices.push(items[i].price);
  }
  let non = 0;
  let res = prices.reduce((cur, next) => cur + next, non);
  res = res / prices.length;
  return res;
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
