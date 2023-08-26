const checkbox = document.querySelector("#checkbox");
const formBtn = document.querySelector(".form-btn");
const eyeIcon = document.querySelector(".eye-icon");
const eyeIconSlash = document.querySelector(".eye-icon-slash");

checkbox.addEventListener("input", () => {
  if (checkbox.checked) {
    formBtn.classList.remove("disabled");
    formBtn.setAttribute("disabled", false);
  } else {
    formBtn.classList.add("disabled");
    formBtn.setAttribute("disabled", true);
  }
});

eyeIcon.addEventListener("click", (e) => {
  e.target.parentNode.children[0].classList.toggle("show");
  e.target.parentNode.children[0].setAttribute("type", "text");
});

eyeIconSlash.addEventListener("click", (e) => {
  e.target.parentNode.children[0].classList.toggle("show");
  e.target.parentNode.children[0].setAttribute("type", "password");
});
