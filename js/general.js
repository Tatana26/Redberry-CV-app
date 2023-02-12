const inputName = document.querySelector(".name");
const log = document.querySelector(".log");
const inputSurname = document.getElementById("surname");
const logSecond = document.querySelector(".surname");
const inputMail = document.getElementById("email");
const logMail = document.querySelector(".email");
const inputPhone = document.getElementById("phone");
const logPhone = document.querySelector(".phone-number");
const iconImg = document.querySelector(".icon");
const inputImage = document.querySelector(".choose-image");
const logImage = document.querySelector(".image-div");
const textArea = document.getElementById("message");
const logTextArea = document.querySelector(".about-div");
const nameIcon = document.querySelector(".input-icon");
const mailIcon = document.querySelector(".mail-icon");
const surnameIcon = document.querySelector(".surname-icon");
const phoneIcon = document.querySelector(".phone-icon");
const nameLabel = document.querySelector(".name-label");
const surnameLabel = document.querySelector(".surname-label");
const mailLabel = document.querySelector(".mail-label");
const phoneLabel = document.querySelector(".phone-label");
const clearStorage = document.querySelector(".chevron-left");
const underlineDiv = document.querySelector(".underline");
const nextPageBtn = document.querySelector(".next-page-btn");

const nameValue = localStorage.getItem("nameValue") || "";
const surnameValue = localStorage.getItem("surnameValue") || "";
const mailValue = localStorage.getItem("mailValue") || "";
const phoneValue = localStorage.getItem("phoneValue") || "";
const textAreaValue = localStorage.getItem("textAreaValue") || "";
const imageDataURL = localStorage.getItem("imageDataURL") || "";

inputName.value = nameValue;
log.textContent = nameValue;
inputSurname.value = surnameValue;
logSecond.textContent = surnameValue;
inputMail.value = mailValue;
logMail.textContent = mailValue;
inputPhone.value = phoneValue;
logPhone.textContent = phoneValue;
textArea.value = textAreaValue;
logTextArea.textContent = textAreaValue;

const errors = [
  "inputName",
  "inputSurname",
  "inputMail",
  "inputPhone",
  "textArea",
];

inputName.addEventListener("input", function (e) {
  const value = e.target.value;
  log.textContent = value;
  localStorage.setItem("nameValue", e.target.value);
  if (value.length < 2 || !value.match(/^[ა-ჰ]+$/)) {
    inputName.classList.add("error");
    inputName.classList.remove("success");
    nameIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    nameLabel.classList.add("error-label");
    const index = errors.indexOf("inputName");
    if (index > -1) return;
    errors.push("inputName");
  } else {
    inputName.classList.remove("error");
    inputName.classList.add("success");
    nameIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    nameLabel.classList.remove("error-label");
    const index = errors.indexOf("inputName");
    if (index < 0) return;
    errors.splice(index, 1);
  }
});

inputSurname.addEventListener("input", function (e) {
  const value = e.target.value;
  logSecond.textContent = value;
  localStorage.setItem("surnameValue", value);
  if (value.length < 2 || !value.match(/^[ა-ჰ]+$/)) {
    inputSurname.classList.add("error");
    inputSurname.classList.remove("success");
    surnameIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    surnameLabel.classList.add("error-label");
    const index = errors.indexOf("inputSurname");
    if (index > -1) return;
    errors.push("inputSurname");
  } else {
    inputSurname.classList.remove("error");
    inputSurname.classList.add("success");
    surnameIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    surnameLabel.classList.remove("error-label");
    const index = errors.indexOf("inputSurname");
    if (index < 0) return;
    errors.splice(index, 1);
  }
});

inputMail.addEventListener("input", function (e) {
  const value = e.target.value;
  logMail.innerHTML = `<img src="./image/mail-icon.png" alt="" /> <p>${value}</p>`;
  if (value === "") {
    logMail.innerHTML = "";
  }
  localStorage.setItem("mailValue", e.target.value);
  if (!value.endsWith("@redberry.ge")) {
    inputMail.classList.add("error");
    inputMail.classList.remove("success");
    mailIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    mailLabel.classList.add("error-label");
    const index = errors.indexOf("inputMail");
    if (index > -1) return;
    errors.push("inputMail");
  } else {
    inputMail.classList.remove("error");
    inputMail.classList.add("success");
    mailIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    mailLabel.classList.remove("error-label");
    const index = errors.indexOf("inputMail");
    if (index < 0) return;
    errors.splice(index, 1);
  }
});

inputPhone.addEventListener("input", function (e) {
  const value = e.target.value;
  logPhone.innerHTML = `<img src="./image/phone-icon.png" alt="" /> <p>${value}</p>`;
  localStorage.setItem("phoneValue", value);
  if (value === "") {
    logPhone.innerHTML = "";
    inputPhone.classList.add("error");
    inputPhone.classList.remove("success");
    phoneIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    phoneLabel.classList.add("error-label");
    const index = errors.indexOf("inputPhone");
    if (index > -1) return;
    errors.push("inputPhone");
  } else if (!value.startsWith("+995")) {
    inputPhone.classList.add("error");
    inputPhone.classList.remove("success");
    phoneIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    phoneLabel.classList.add("error-label");
    const index = errors.indexOf("inputPhone");
    if (index > -1) return;
    errors.push("inputPhone");
  } else if (value.startsWith("+995")) {
    inputPhone.classList.remove("error");
    inputPhone.classList.add("success");
    phoneIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    phoneLabel.classList.remove("error-label");
    const index = errors.indexOf("inputPhone");
    if (index < 0) return;
    errors.splice(index, 1);
  }
});

inputImage.addEventListener("change", function () {
  const files = inputImage.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      logImage.innerHTML = '<img src="' + this.result + '" />';
      localStorage.setItem("imageDataURL", this.result);
    });
  }
});

textArea.addEventListener("input", function (e) {
  const value = e.target.value;
  logTextArea.innerHTML = `<h1>ჩემს შესახებ</h1> <p>${e.target.value}</p>`;
  localStorage.setItem("textAreaValue", value);
  if (value === "") {
    logTextArea.textContent = "";
    textArea.classList.add("error");
    textArea.classList.remove("success");
    const index = errors.indexOf("textArea");
    if (index > -1) return;
    errors.push("textArea");
  } else {
    logTextArea.innerHTML = `<h1>ჩემს შესახებ</h1> <p>${e.target.value}</p>`;
    textArea.classList.add("success");
    textArea.classList.remove("error");
    const index = errors.indexOf("textArea");
    if (index < 0) return;
    errors.splice(index, 1);
  }
});

window.addEventListener("load", function () {
  if (nameValue) {
    if (nameValue.length > 1 || nameValue.match(/^[ა-ჰ]+$/)) {
      const index = errors.indexOf("inputName");
      errors.splice(index, 1);
    }
  }

  if (surnameValue) {
    if (surnameValue.length > 1 || surnameValue.match(/^[ა-ჰ]+$/)) {
      const index = errors.indexOf("inputSurname");
      errors.splice(index, 1);
    }
  }

  if (mailValue) {
    logMail.innerHTML = `<img src="./image/mail-icon.png" alt="" /> <p>${mailValue}</p>`;
    if (mailValue.endsWith("@redberry.ge")) {
      const index = errors.indexOf("inputMail");
      errors.splice(index, 1);
    }
  }

  if (phoneValue) {
    logPhone.innerHTML = `<img src="./image/phone-icon.png" alt="" /> <p>${phoneValue}</p>`;
    if (phoneValue.startsWith("+995")) {
      const index = errors.indexOf("inputPhone");
      errors.splice(index, 1);
    }
  }

  if (imageDataURL) {
    logImage.innerHTML = '<img src="' + imageDataURL + '" />';
  }

  if (textAreaValue) {
    logTextArea.innerHTML = `<h1>ჩემს შესახებ</h1> <p>${textAreaValue}</p>`;
    const index = errors.indexOf("textArea");
    errors.splice(index, 1);
  }
});

clearStorage.addEventListener("click", function () {
  localStorage.clear();
});

nextPageBtn.addEventListener("click", function () {
  if (errors.length > 0 || !localStorage.getItem("imageDataURL")) return;
  window.location.href = "experience.html";
});
