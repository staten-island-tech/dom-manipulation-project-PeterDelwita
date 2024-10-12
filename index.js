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
  inputImage: document.querySelector("#image"),
};

function createSodaCard(soda) {
  // Handle HTML as a variable for more efficient code
  const cardHTML = `
    <div class="card">
      <h2 class="card-header">${soda.name}</h2>
      <img class="card-img" src="${
        soda.image || "image/placeholder.jpeg"
      }" alt="${soda.name}" />
      <ul class="list"> 
        <li id="company">${soda.company}</li>
        <li id="rating">${soda.rating} out of 5</li>
      </ul>
      <button class="remove-button">Remove</button> 
    </div>`;
  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);

  // Added removeButton to this function because it would allow every card to come with a Remove button (remove cards independently)
  const removeButton = DOMSelectors.container.querySelector(
    ".card:last-child .remove-button" // last-child refers to the last child of the parent element, specifically the last card, so .remove-button targets the last card in the container
  );
  removeButton.addEventListener("click", removeSodaCard); // Ensures that clicking the remove button will call the function below and remove the card
}

function removeSodaCard(event) {
  const card = event.target.closest(".card"); // closest.(".card") searches the DOM tree to check if the element matches the selector; the remove button is inside the card, so it returns that element, allowing the card to be removed
  if (card) {
    card.remove();
  }
}

function handleButtonClick(event) {
  console.log("Button clicked:", event.target);
}

function submitForm(event) {
  // Creates a soda card using the inputs
  event.preventDefault();
  const soda = {
    name: DOMSelectors.inputName.value.trim(), // trim removes whitespace
    company: DOMSelectors.inputCompany.value.trim(),
    rating: parseInt(DOMSelectors.inputRating.value, 10), // parseInt converts a string to an integer. It goes as follows: parseInt(string, radix), where the radix is the base of the string (so if the radix is 2, the number will be written in binary)
    image: DOMSelectors.inputImage ? DOMSelectors.inputImage.value.trim() : "", // Uses a ternary operator, which works like this: condition ? valueiftrue : valueiffalse. If an image is submitted, it will put it in the card without the whitespace, but if there is no image submitted, it will assign an empty string
  };

  createSodaCard(soda);
  console.log(DOMSelectors.input.value);

  // Resets input values after submission; done after card is created and inputs are logged
  DOMSelectors.inputName.value = "";
  DOMSelectors.inputCompany.value = "";
  DOMSelectors.inputRating.value = "";
  if (DOMSelectors.inputImage) {
    DOMSelectors.inputImage.value = "";
  }
}

DOMSelectors.button.addEventListener("click", handleButtonClick);
DOMSelectors.form.addEventListener("submit", submitForm);
