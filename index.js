const DOMSelectors = {
  header: document.querySelector("h1"),
  cardheader: document.querySelector(".card-header"),
  form: document.querySelector("form"),
  item: document.querySelector("li"),
  button: document.querySelector("button"),
  list: document.querySelector("ul"),
  container: document.querySelector("container"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
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
