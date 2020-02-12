let body = document.querySelector("body");
let input = document.querySelector(".inp");
let container = document.querySelector(".container");
let isResset = false;
body.addEventListener("click", e => {
  if (e.target.classList.contains("button_gen")) {
    if (isResset) {
      isResset = false;
      e.target.innerText = "Generate";
      input.value = 0;
      input.disabled = false;
      container.innerHTML = "";
    } else {
      e.target.innerText = "Reset";
      isResset = true;
      addList(input.value);
      input.value = 0;
      input.disabled = true;
    }
  }
  if (
    e.target.classList.contains("plus") ||
    e.target.classList.contains("minus")
  ) {
    input.value = parseInt(input.value) + parseInt(e.target.innerText);
  }
});

function addList(count) {
  if (count > 20 || count < 0) {
    alert("Введите число от 0 до 20!");
    return;
  } else {
    const fragment = document.createDocumentFragment();
    for (let n = 1; n <= count; n++) {
      let buttonPlus = document.createElement("button");
      buttonPlus.classList.add("plus");
      buttonPlus.innerText = "+" + n;
      let buttonMinus = document.createElement("button");
      buttonMinus.classList.add("minus");
      buttonMinus.innerText = `-${n}`;
      fragment.appendChild(buttonPlus);
      fragment.appendChild(buttonMinus);
    }
    document.querySelector(".container").appendChild(fragment);
  }
}
