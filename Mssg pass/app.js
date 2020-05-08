const form = document.querySelector("form");
const response = document.querySelector(".response");
const warning = document.querySelector("#warning");

form.addEventListener("submit", (e) => {
  const text = e.target.input.value;
  e.preventDefault();
  if (!text) {
    //show hidden text
    const interval = setInterval(() => {
      warning.classList.add("show");
      warning.classList.remove("hide");
    }, 30);
    //hide the text
    setTimeout(() => {
      clearInterval(interval);
      warning.className = "hide";
    }, 3000);
  } else {
    response.textContent = text;
    form.reset();
  }
});
