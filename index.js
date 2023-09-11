const submitBtn = document.querySelector(".submit");
const inputEmail = document.getElementById("email");
const errorTag = document.getElementById("err");
const container = document.querySelector(".container");
const containerTwo = document.querySelector(".container-two");
const dismissBtn = document.querySelector(".dissmiss");
const confirmEmail = document.querySelector(".confirm-email");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail();
});
dismissBtn.addEventListener("click", () => {
  window.location.reload();
});

function reEnter() {
  errorTag.innerHTML = "";
  inputEmail.classList.remove("wrong");
}

function validateEmail() {
  if (inputEmail.value.includes("@")) {
    container.classList.add("hide");
    containerTwo.classList.remove("hide");
    confirmEmail.innerHTML = inputEmail.value;
  } else {
    errorTag.innerHTML = "Enter a valid email";
    inputEmail.classList.add("wrong");
  }
}
