const DOMSelectors = {
  header: document.querySelector("h1"),
  cardHeader: document.querySelector(".card-header"),
  form: document.querySelector(".form"),
  item: document.querySelectorAll("li"),
  button: document.querySelector(".button"),
  list: document.querySelector("ul"),
  container: document.querySelector(".container"),
  input: document.querySelector("input"),
  inputName: document.querySelector("#name"),
  inputCompany: document.querySelector("#company"),
  inputRating: document.querySelector("#rating"),
};

function createSodaCard(soda) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class="card-header">${soda.name}</h2>
      <img class="card-img" src="" alt="${soda.name}" />
      <ul class="list">
        <li id="company">${soda.company}</li>
        <li id="rating">${soda.rating}</li>
      </ul>
    </div>`
  );
}

function buttonClick(event) {
  console.log("Button clicked:", event.target);
}

function submitForm(event) {
  // Creates a soda card using the inputs
  event.preventDefault();
  const soda = {
    name: DOMSelectors.inputName.value,
    company: DOMSelectors.inputCompany.value,
    rating: parseInt(DOMSelectors.inputRating.value, 10), // parseInt converts a string to an integer. It goes as follows: parseInt(string, radix), where the radix is the base of the string (so if the radix is 2, the number will be written in binary)
  };
  createSodaCard(soda);
  console.log(DOMSelectors.input.value);
}

DOMSelectors.button.addEventListener("click", buttonClick);
DOMSelectors.form.addEventListener("submit", submitForm);
