const dataList = document.getElementById("data");

function ajax(src, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", src);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      callback(data);
    }
  };
  xhr.send();
}
function render(data) {
  data.map((item) => {
    const div = document.createElement("div");
    dataList.appendChild(div);
    div.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>${item.price}</p>
  `;
  });
}

// your code here
// document.createElement() and appendChild() methods are preferred.

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  (response) => render(response)
); // you should get product information in JSON format and render data in the page
