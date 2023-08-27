const eyeIcon = document.querySelector(".eye-icon");
const eyeIconSlash = document.querySelector(".eye-icon-slash");

eyeIcon.addEventListener("click", (e) => {
  e.target.parentNode.children[0].classList.toggle("show");
  e.target.parentNode.children[0].setAttribute("type", "text");
});

eyeIconSlash.addEventListener("click", (e) => {
  e.target.parentNode.children[0].classList.toggle("show");
  e.target.parentNode.children[0].setAttribute("type", "password");
});
