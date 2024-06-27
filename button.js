const button = document.getElementById("button");

button.addEventListener("click", buttonClick);

export function buttonClick(evt) {
  // Form validation
  if (moniker.value === "") {
    alert("Name must be filled out!"); //second BOM property/method
    moniker.focus;
    return false;
  }

  console.log(evt.target);
  document.getElementById("thanks").textContent =
    "We appreciate your donation!";
}
