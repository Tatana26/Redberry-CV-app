const log = document.querySelector(".log");
const logSecond = document.querySelector(".surname");
const logMail = document.querySelector(".email");
const logPhone = document.querySelector(".phone-number");
const logImage = document.querySelector(".image-div");
const logTextArea = document.querySelector(".about-div");
const logPosition = document.querySelector(".log-position");
const logEmployer = document.querySelector(".log-employer");
const logDateFirst = document.querySelector(".log-date-first");
const logDateSecond = document.querySelector(".log-date-second");
const logSecondTextarea = document.querySelector(".log-second-about");
const logPositionHeading = document.querySelector(".position-heading");
const logEducationPlace = document.querySelector(".log-education-place");
const logQuality = document.querySelector(".log-quality");
const logQualityDate = document.querySelector(".log-quality-date");
const logThirdArea = document.querySelector(".log-third-area");
const logEducationPlaceHeader = document.querySelector(
  ".education-place-header"
);
const clearStorage = document.querySelector(".chevron-left");
const popUp = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");

const nameValue = localStorage.getItem("nameValue") || "";
const surnameValue = localStorage.getItem("surnameValue") || "";
const mailValue = localStorage.getItem("mailValue") || "";
const phoneValue = localStorage.getItem("phoneValue") || "";
const textAreaValue = localStorage.getItem("textAreaValue") || "";
const positionValue = localStorage.getItem("positionValue") || "";
const employerValue = localStorage.getItem("employerValue") || "";
const dateFirstValue = localStorage.getItem("dateFirstValue") || "";
const dateSecondValue = localStorage.getItem("dateSecondValue") || "";
const secondTextareaValue = localStorage.getItem("secondTextareaValue") || "";
const educationPlaceValue = localStorage.getItem("educationPlaceValue") || "";
const optionValue = localStorage.getItem("optionValue") || "";
const optionTitle = localStorage.getItem("optionTitle") || "";
const qualityDateValue = localStorage.getItem("qualityDateValue") || "";
const thirdAreaVlue = localStorage.getItem("thirdAreaVlue") || "";
const imageDataURL = localStorage.getItem("imageDataURL") || "";

log.textContent = nameValue;
logSecond.textContent = surnameValue;
logMail.textContent = mailValue;
logPhone.textContent = phoneValue;
logTextArea.textContent = textAreaValue;
logPosition.textContent = positionValue;
logEmployer.textContent = employerValue;
logDateFirst.textContent = dateFirstValue;
logDateSecond.textContent = dateSecondValue;
logSecondTextarea.textContent = secondTextareaValue;
logEducationPlace.textContent = educationPlaceValue;
logQuality.textContent = optionTitle;
logQualityDate.textContent = qualityDateValue;
logThirdArea.textContent = thirdAreaVlue;

window.addEventListener("load", function () {
  if (mailValue) {
    logMail.innerHTML = `<img src="./image/mail-icon.png" alt="" /> <p>${mailValue}</p>`;
  }

  if (phoneValue) {
    logPhone.innerHTML = `<img src="./image/phone-icon.png" alt="" /> <p>${phoneValue}</p>`;
  }

  if (imageDataURL) {
    logImage.innerHTML = '<img src="' + imageDataURL + '" />';
  }

  if (textAreaValue) {
    logTextArea.innerHTML = `<h1>???????????? ?????????????????????</h1> <p>${textAreaValue}</p>`;
  }

  if (positionValue) {
    logPositionHeading.innerHTML = `<h1>?????????????????????????????????</h1>`;
  }

  if (educationPlaceValue) {
    logEducationPlaceHeader.innerHTML = `<h1>???????????????????????????</h1>`;
  }
});

window.addEventListener("load", function () {
  popUp.style.visibility = "visible";
});

closeButton.addEventListener("click", function () {
  popUp.style.display = "none";
});

clearStorage.addEventListener("click", function () {
  localStorage.clear();
});
