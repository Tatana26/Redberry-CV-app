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
const clearStorage = document.querySelector(".vector");
const underlineDiv = document.querySelector(".underline");

const nameValue = localStorage.getItem("nameValue") || "";
const surnameValue = localStorage.getItem("surnameValue") || "";
const mailValue = localStorage.getItem("mailValue") || "";
const phoneValue = localStorage.getItem("phoneValue") || "";
const textAreaValue = localStorage.getItem("textAreaValue") || "";

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

inputName.addEventListener("input", function (e) {
  const value = e.target.value;
  log.textContent = value;
  localStorage.setItem("nameValue", e.target.value);
  if (value.length < 2) {
    inputName.classList.add("error");
    inputName.classList.remove("success");
    nameIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    nameLabel.classList.add("error-label");
  } else {
    inputName.classList.remove("error");
    inputName.classList.add("success");
    nameIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    nameLabel.classList.remove("error-label");
  }
});

inputSurname.addEventListener("input", function (e) {
  const value = e.target.value;
  logSecond.textContent = value;
  localStorage.setItem("surnameValue", value);
  if (value.length < 2) {
    inputSurname.classList.add("error");
    inputSurname.classList.remove("success");
    surnameIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    surnameLabel.classList.add("error-label");
  } else {
    inputSurname.classList.remove("error");
    inputSurname.classList.add("success");
    surnameIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    surnameLabel.classList.remove("error-label");
  }
});

inputMail.addEventListener("input", function (e) {
  const value = e.target.value;
  logMail.innerHTML = `<img src="./image/Vector (1).png" alt="" /> <p>${value}</p>`;
  if (value === "") {
    logMail.innerHTML = "";
  }
  localStorage.setItem("mailValue", e.target.value);
  if (!value.endsWith("@redberry.ge")) {
    inputMail.classList.add("error");
    inputMail.classList.remove("success");
    mailIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    mailLabel.classList.add("error-label");
  } else {
    inputMail.classList.remove("error");
    inputMail.classList.add("success");
    mailIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    mailLabel.classList.remove("error-label");
  }
});

window.addEventListener("load", function () {
  const mailValue = localStorage.getItem("mailValue");
  if (mailValue) {
    inputMail.value = mailValue;
    logMail.innerHTML = `<img src="./image/Vector (1).png" alt="" /> <p>${mailValue}</p>`;
    if (!mailValue.endsWith("@redberry.ge")) {
      inputMail.classList.add("error");
      inputMail.classList.remove("success");
      mailIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    } else {
      inputMail.classList.remove("error");
      inputMail.classList.add("success");
      mailIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    }
  }
});

inputPhone.addEventListener("input", function (e) {
  const value = e.target.value;
  logPhone.innerHTML = `<img src="./image/Vector (2).png" alt="" /> <p>${value}</p>`;
  localStorage.setItem("phoneValue", value);
  if (value === "") {
    logPhone.innerHTML = "";
  } else if (!value.startsWith("+995")) {
    inputPhone.classList.add("error");
    inputPhone.classList.remove("success");
    phoneIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    phoneLabel.classList.add("error-label");
  } else if (value.startsWith("+995")) {
    inputPhone.classList.remove("error");
    inputPhone.classList.add("success");
    phoneIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    phoneLabel.classList.remove("error-label");
  }
});

window.addEventListener("load", function () {
  const phoneValue = localStorage.getItem("phoneValue");
  if (phoneValue) {
    inputPhone.value = phoneValue;
    logPhone.innerHTML = `<img src="./image/Vector (2).png" alt="" /> <p>${phoneValue}</p>`;
    if (!phoneValue.startsWith("+995")) {
      inputPhone.classList.add("error");
      inputPhone.classList.remove("success");
      phoneIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    } else {
      inputPhone.classList.remove("error");
      inputPhone.classList.add("success");
      phoneIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    }
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

window.addEventListener("load", function () {
  const imageDataURL = localStorage.getItem("imageDataURL");
  if (imageDataURL) {
    logImage.innerHTML = '<img src="' + imageDataURL + '" />';
  }
});

textArea.addEventListener("input", function (e) {
  const value = e.target.value;
  logTextArea.innerHTML = `<h1>ჩემს შესახებ</h1> <p>${e.target.value}</p>`;
  localStorage.setItem("textAreaValue", value);
  if (value === "") {
    logTextArea.textContent = "";
  } else {
    logTextArea.innerHTML = `<h1>ჩემს შესახებ</h1> <p>${e.target.value}</p>`;
  }
});

window.addEventListener("load", function () {
  const savedValue = localStorage.getItem("textAreaValue");
  if (savedValue) {
    textArea.value = savedValue;
    logTextArea.innerHTML = `<h1>ჩემს შესახებ</h1> <p>${savedValue}</p>`;
  }
});

clearStorage.addEventListener("click", function () {
  localStorage.clear();
});
