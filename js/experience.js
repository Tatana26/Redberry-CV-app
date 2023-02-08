const log = document.querySelector(".log");
const logSecond = document.querySelector(".surname");
const logMail = document.querySelector(".email");
const logPhone = document.querySelector(".phone-number");
const logImage = document.querySelector(".image-div");
const logTextArea = document.querySelector(".about-div");
const inputMail = document.getElementById("email");
const textArea = document.getElementById("message");
const positionInput = document.querySelector(".position-input");
const logPosition = document.querySelector(".log-position");
const positionIcon = document.querySelector(".position-input-icon");
const positionLabel = document.querySelector(".position-label");
const employerInput = document.querySelector(".employer-input");
const logEmployer = document.querySelector(".log-employer");
const employerIcon = document.querySelector(".employer-input-icon");
const employerLabel = document.querySelector(".employer-label");
const clearStorage = document.querySelector(".vector");
const inputDateFirst = document.querySelector(".date-first");
const logDateFirst = document.querySelector(".log-date-first");
const inputDateSecond = document.querySelector(".date-second");
const logDateSecond = document.querySelector(".log-date-second");
const inputSecondTextarea = document.querySelector(".about-work");
const logSecondTextarea = document.querySelector(".log-second-about");
const logPositionHeading = document.querySelector(".position-heading");
const leftSide = document.querySelector(".general-left");
const addMoreInfo = document.querySelector("#more-info");
const additionalInfo = document.querySelector(".additional-info");
const forms = document.querySelector(".forms");

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

log.textContent = nameValue;
logSecond.textContent = surnameValue;
logMail.textContent = mailValue;
logPhone.textContent = phoneValue;
logTextArea.textContent = textAreaValue;
positionInput.value = positionValue;
logPosition.textContent = positionValue;
employerInput.value = employerValue;
logEmployer.textContent = employerValue;
inputDateFirst.value = dateFirstValue;
logDateFirst.textContent = dateFirstValue;
inputDateSecond.value = dateSecondValue;
logDateSecond.textContent = dateSecondValue;
inputSecondTextarea.value = secondTextareaValue;
logSecondTextarea.textContent = secondTextareaValue;

// addMoreInfo.addEventListener("click", function () {
//   forms.insertAdjacentHTML(
//     "beforeend",
//     '<form action=""> <div class="position"> <label class="position-label" for="experience" >თანამდებობა</label > <div class="position-input-div"> <input type="text" class="position-input"/> <div class="position-input-icon"></div></div><p>მინიმუმ 2 სიმბოლო</p></div><div class="employer"> <label class="employer-label" for="employer" >დამსაქმებელი</label > <div class="employer-input-div"> <input type="text" class="employer-input"/> <div class="employer-input-icon"></div></div><p>მინიმუმ ორი სიმბოლო</p></div><div class="work-date"> <div class="start-date date-box"> <label for="date">დაწყების რიცხვი</label> <input type="date" class="date-first"/> </div><div class="end-date date-box"> <label for="date">დამთავრების რიცხვი</label> <input type="date" class="date-second"/> </div></div><div class="about-work"> <label for="about">აღწერა</label> <textarea id="about-work"></textarea> </div></form>'
//   );
// });

window.addEventListener("load", function () {
  const mailValue = localStorage.getItem("mailValue");
  if (mailValue) {
    logMail.innerHTML = `<img src="./image/Vector (1).png" alt="" /> <p>${mailValue}</p>`;
  }

  const phoneValue = localStorage.getItem("phoneValue");
  if (phoneValue) {
    logPhone.innerHTML = `<img src="./image/Vector (2).png" alt="" /> <p>${phoneValue}</p>`;
  }

  const imageDataURL = localStorage.getItem("imageDataURL");
  if (imageDataURL) {
    logImage.innerHTML = '<img src="' + imageDataURL + '" />';
  }

  const textAreaValue = localStorage.getItem("textAreaValue");
  if (textAreaValue) {
    logTextArea.innerHTML = `<h1>ჩემს შესახებ</h1> <p>${textAreaValue}</p>`;
  }

  const positionValue = localStorage.getItem("positionValue");
  if (positionValue) {
    logPositionHeading.innerHTML = `<h1>გამოცდილება</h1>`;
  }
});

positionInput.addEventListener("input", function (e) {
  const value = e.target.value;
  logPosition.innerHTML = `${value}${value && ","}`;
  if (value === "") {
    logPositionHeading.innerHTML = "";
  } else {
    logPositionHeading.innerHTML = `<h1>გამოცდილება</h1>`;
  }
  localStorage.setItem("positionValue", e.target.value);
  if (value.length < 2) {
    positionInput.classList.add("error");
    positionInput.classList.remove("success");
    positionIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    positionLabel.classList.add("error-label");
  } else {
    positionInput.classList.remove("error");
    positionInput.classList.add("success");
    positionIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    positionLabel.classList.remove("error-label");
  }
});

employerInput.addEventListener("input", function (e) {
  const value = e.target.value;
  logEmployer.textContent = value;
  localStorage.setItem("employerValue", e.target.value);
  if (value.length < 2) {
    employerInput.classList.add("error");
    employerInput.classList.remove("success");
    employerIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    employerLabel.classList.add("error-label");
  } else {
    employerInput.classList.remove("error");
    employerInput.classList.add("success");
    employerIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    employerLabel.classList.remove("error-label");
  }
});

inputDateFirst.addEventListener("input", function (e) {
  const value = e.target.value;
  logDateFirst.textContent = value;
  localStorage.setItem("dateFirstValue", value);
});

inputDateSecond.addEventListener("input", function (e) {
  const value = e.target.value;
  logDateSecond.textContent = value;
  localStorage.setItem("dateSecondValue", value);
});

inputSecondTextarea.addEventListener("input", function (e) {
  const value = e.target.value;
  logSecondTextarea.textContent = value;
  localStorage.setItem("secondTextareaValue", value);
});

clearStorage.addEventListener("click", function () {
  localStorage.clear();
});
