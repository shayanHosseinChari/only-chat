const checkbox = document.querySelector("#checkbox");
const formBtn = document.querySelector(".form-btn");
const eyeIcons = document.querySelectorAll(".eye-icon");
const eyeIconsSlash = document.querySelectorAll(".eye-icon-slash");

checkbox.addEventListener("input", () => {
  if (checkbox.checked) {
    formBtn.classList.remove("disabled");
    formBtn.setAttribute("disabled", false);
  } else {
    formBtn.classList.add("disabled");
    formBtn.setAttribute("disabled", true);
  }
});

eyeIcons.forEach((eye) => {
  eye.addEventListener("click", (e) => {
    e.target.parentNode.children[0].classList.toggle("show");
    e.target.parentNode.children[0].setAttribute("type", "text");
  });
});

eyeIconsSlash.forEach((eye) => {
  eye.addEventListener("click", (e) => {
    e.target.parentNode.children[0].classList.toggle("show");
    e.target.parentNode.children[0].setAttribute("type", "password");
  });
});
