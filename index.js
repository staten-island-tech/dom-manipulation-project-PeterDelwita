const DOMSelectors = {
  cardHeader: document.querySelector(".card-header"),
  form: document.querySelector(".form"),
  item: document.querySelectorAll("li"),
  button: document.querySelector(".button"),
  list: document.querySelector("ul"),
  container: document.querySelector(".container"),
  inputName: document.querySelector("#name"),
  inputCompany: document.querySelector("#company"),
  inputRating: document.querySelector("#rating"),
  inputImage: document.querySelector("#image"),
};

// Make or remove the card

function createSodaCard() {
  let soda = {
    // Create the object
    name: DOMSelectors.inputName.value.trim(), // trim removes whitespace
    company: DOMSelectors.inputCompany.value.trim(),
    rating: parseInt(DOMSelectors.inputRating.value, 10), // parseInt converts a string to an integer. It goes as follows: parseInt(string, radix), where the radix is the base of the string (so if the radix is 2, the number will be written in binary)
    image: DOMSelectors.inputImage ? DOMSelectors.inputImage.value.trim() : "", // Uses a ternary operator, which works like this: condition ? valueiftrue : valueiffalse. If an image is submitted, it will put it in the card without the whitespace, but if there is no image submitted, it will assign an empty string
  };
  // Handle HTML as a variable for more efficient code
  const cardHTML = `
    <div class="card">
      <h2 class="card-header">${soda.name}</h2>
      <img class="card-img" src="${
        soda.image || "image/placeholder.jpeg"
      }" alt="${soda.name}" />
      <ul class="list"> 
        <li id="company">Company: ${soda.company}</li>
        <li id="rating">Rating: ${soda.rating} out of 5</li>
      </ul>
      <div class="button container">
        <button class="remove-button" data-action="remove">Remove</button>
      </div> 
    </div>`;
  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
}

function removeSodaCard(event) {
  const card = event.target.closest(".card"); // closest.(".card") searches the DOM tree to check if the element matches the selector; the remove button is inside the card, so it returns that element, allowing the card to be removed
  if (card) {
    card.remove();
  }
}

// Handle buttons
function handleButtonClick(event) {
  console.log("Button clicked:", event.target);
}

// Handling the form

// function submitForm(event) {
//   // Creates a soda card using the inputs
//   event.preventDefault();
//   // const soda = {
//   //   name: DOMSelectors.inputName.value.trim(), // trim removes whitespace
//   //   company: DOMSelectors.inputCompany.value.trim(),
//   //   rating: parseInt(DOMSelectors.inputRating.value, 10), // parseInt converts a string to an integer. It goes as follows: parseInt(string, radix), where the radix is the base of the string (so if the radix is 2, the number will be written in binary)
//   //   image: DOMSelectors.inputImage ? DOMSelectors.inputImage.value.trim() : "", // Uses a ternary operator, which works like this: condition ? valueiftrue : valueiffalse. If an image is submitted, it will put it in the card without the whitespace, but if there is no image submitted, it will assign an empty string
//   // };
//   // createSodaCard(soda);
// }

function logSoda() {
  console.log(
    "Name:",
    DOMSelectors.inputName.value,
    "Company:",
    DOMSelectors.inputCompany.value,
    "Rating:",
    DOMSelectors.inputRating.value
  );
}

// Resets input values after submission; done after card is created and inputs are logged
function clearInputs() {
  DOMSelectors.inputName.value = "";
  DOMSelectors.inputCompany.value = "";
  DOMSelectors.inputRating.value = "";
  if (DOMSelectors.inputImage) {
    DOMSelectors.inputImage.value = "";
  }
}

// Call functions - Handle button
DOMSelectors.button.addEventListener("click", function (event) {
  handleButtonClick(event);
});
// Handle form
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(), createSodaCard(), logSoda(), clearInputs();
});
// Handle remove button
DOMSelectors.container.addEventListener("click", (event) => {
  if (event.target.dataset.action === "remove") {
    removeSodaCard(event);
  }
});

// Log button data
const buttons = document.querySelectorAll("button");
console.log(buttons);
const buttonData = Array.from(buttons);
console.log(buttonData);

buttonData.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);
