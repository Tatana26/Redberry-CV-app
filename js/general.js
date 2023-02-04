const input = document.querySelector(".name");
const log = document.querySelector(".log");
const inputSurname = document.getElementById("surname");
const logSecond = document.querySelector(".surname");
const inputMail = document.getElementById("email");
const logMail = document.querySelector(".email");
const inputPhone = document.getElementById("phone");
const logPhone = document.querySelector(".phone-number");

input.addEventListener("change", function (e) {
  log.textContent = e.target.value;
});

inputSurname.addEventListener("change", function (e) {
  logSecond.textContent = e.target.value;
});

inputMail.addEventListener("change", function (e) {
  logMail.textContent = e.target.value;
});

inputPhone.addEventListener("change", function (e) {
  logPhone.textContent = e.target.value;
});
