const objectPreview = document.getElementById("object-preview");

const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");

const addButton = document.getElementById("add-field");

const object = {
  name: "Igor",
};

function renderObjectData() {
  objectPreview.innerHTML = "{";

  for (const key in object) {
    objectPreview.innerHTML += `
        <p>
            <span class="key">${key}</span>:
            <span class="value">${object[key]}</span>,
            <button class="delete-btn" id="${key}">Delete</button>
        </p>
    `;
  }

  objectPreview.innerHTML += "}";

  const deleteButtons = Array.from(
    document.getElementsByClassName("delete-btn")
  );

  for (const button of deleteButtons) {
    button.onclick = function () {
      const key = button.id;
      delete object[key];

      renderObjectData();
    };
  }

  console.log(deleteButtons, "deletebuttons");
}

renderObjectData();

addButton.onclick = function () {
  const key = keyInput.value;
  const value = valueInput.value;

  object[key] = value;

  console.log(object);

  renderObjectData();

  keyInput.value = "";
  valueInput.value = "";
};
