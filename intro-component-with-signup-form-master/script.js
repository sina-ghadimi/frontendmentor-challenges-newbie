const inputs = document.querySelectorAll(".input");
const errorMsg = document.querySelectorAll(".form__error-msg");
const errorIcon = document.querySelectorAll(".form__error-icon");
const email = document.getElementById("email");
const emailPattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

const validateInputs = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", e => {
      if (!e.target.value) {
        errorIcon[i].classList.add("show");
        errorMsg[i].classList.add("show");
      }
      if (e.target.value) {
        errorIcon[i].classList.remove("show");
        errorMsg[i].classList.remove("show");
      }
    });
  }
};

validateInputs();

const validateEmail = () => {
  
};

validateEmail();
