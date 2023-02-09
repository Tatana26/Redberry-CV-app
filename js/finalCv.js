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
const qualityValue = localStorage.getItem("qualityValue") || "";
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
logQuality.textContent = qualityValue;
logQualityDate.textContent = qualityDateValue;
logThirdArea.textContent = thirdAreaVlue;

window.addEventListener("load", function () {
  if (mailValue) {
    logMail.innerHTML = `<img src="./image/Vector (1).png" alt="" /> <p>${mailValue}</p>`;
  }

  if (phoneValue) {
    logPhone.innerHTML = `<img src="./image/Vector (2).png" alt="" /> <p>${phoneValue}</p>`;
  }

  if (imageDataURL) {
    logImage.innerHTML = '<img src="' + imageDataURL + '" />';
  }

  if (textAreaValue) {
    logTextArea.innerHTML = `<h1>ჩემს შესახებ</h1> <p>${textAreaValue}</p>`;
  }

  if (positionValue) {
    logPositionHeading.innerHTML = `<h1>გამოცდილება</h1>`;
  }

  if (educationPlaceValue) {
    logEducationPlaceHeader.innerHTML = `<h1>განათლება</h1>`;
  }
});
