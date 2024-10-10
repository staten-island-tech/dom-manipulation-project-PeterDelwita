const DOMSelectors = {
  header: document.querySelector("h1"),
  cardheader: document.querySelector(".card-header"),
  form: document.querySelector("form"),
  item: document.querySelectorAll("li"),
  button: document.querySelector("button"),
  list: document.querySelector("ul"),
  container: document.querySelector("container"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target);
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent refreshing
  console.log(document.querySelector("input").value);
});

let soda = {
  name: "Coca-Cola",
  company: "The Coca-Cola Company",
  rating: 5,
};

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card">
    <h2 class="card-header">${soda.name}</h2>
    <img class="card-img" src="" alt="soda" />
    <ul class="list">
      <li id="company">${soda.company}</li>
      <li id="rating">${soda.rating}</li>
    </ul>
  </div>`
);
