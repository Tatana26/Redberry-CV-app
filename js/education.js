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
const educationPlaceInput = document.querySelector(".education");
const logEducationPlace = document.querySelector(".log-education-place");
const educationPlaceIcon = document.querySelector(".education-place-icon");
const educationPlaceLabel = document.querySelector(".education-label");
const qualityInput = document.querySelector(".select-quality");
const logQuality = document.querySelector(".log-quality");
const qualityDateInput = document.querySelector(".quality-end-date");
const logQualityDate = document.querySelector(".log-quality-date");
const textAreaThirdInput = document.querySelector(".third-area-input");
const logThirdArea = document.querySelector(".log-third-area");
const logEducationPlaceHeader = document.querySelector(
  ".education-place-header"
);
const endBtn = document.querySelector(".end-btn");
const clearStorage = document.querySelector(".chevron-left");
const nextPageBtn = document.querySelector(".next-page-btn");
const previousPage = document.querySelector(".btn-previous-page");
const addMoreInfo = document.querySelector("#more-info");
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
const educationPlaceValue = localStorage.getItem("educationPlaceValue") || "";
const qualityValue = localStorage.getItem("qualityValue") || "";
const qualityDateValue = localStorage.getItem("qualityDateValue") || "";
const thirdAreaVlue = localStorage.getItem("thirdAreaVlue") || "";
const optionValue = localStorage.getItem("optionValue") || "";
const imageDataURL = localStorage.getItem("imageDataURL");

let options = [];

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
educationPlaceInput.value = educationPlaceValue;
logEducationPlace.textContent = educationPlaceValue;
qualityInput.value = qualityValue;
logQuality.textContent = qualityValue;
qualityDateInput.value = qualityDateValue;
logQualityDate.textContent = qualityDateValue;
textAreaThirdInput.value = thirdAreaVlue;
logThirdArea.textContent = thirdAreaVlue;

addMoreInfo.addEventListener("click", function () {
  forms.insertAdjacentHTML(
    "beforeend",
    `<form action=""> <div class="education-place"> <label class="education-label" for="education-place" >სასწავლებელი</label > <div class="education-place-div"> <input type="text" class="education"/> <div class="education-place-icon"></div></div><p>მინიმუმ 2 სიმბოლო</p></div><div class="quality-date"> <div class="quality"> <label for="">ხარისხი</label> <select class="select-quality" name="" id=""> <option value="" disabled selected>აირჩიე ხარისხი</option> </select> </div><div class="end-date"> <label for="">დამთავრების რიცხვი</label> <input type="date" class="quality-end-date"/> </div></div><div class="text-area-third"> <label for="">აღწერა</label> <textarea name="" id="" class="third-area-input"></textarea> </div></form>`
  );
});

const errors = [
  "educationPlaceInput",
  "qualityInput",
  "qualityDateInput",
  "textAreaThirdInput",
];

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
    logTextArea.innerHTML = `<h1>ჩემს შესახებ</h1> <p>${textAreaValue}</p>`;
  }

  if (positionValue) {
    logPositionHeading.innerHTML = `<h1>გამოცდილება</h1>`;
  }

  if (educationPlaceValue) {
    logEducationPlaceHeader.innerHTML = `<h1>განათლება</h1>`;
    if (educationPlaceValue.length > 1) {
      const index = errors.indexOf("educationPlaceInput");
      errors.splice(index, 1);
    }
  }

  if (qualityDateValue) {
    const index = errors.indexOf("qualityDateInput");
    errors.splice(index, 1);
  }

  if (thirdAreaVlue) {
    const index = errors.indexOf("textAreaThirdInput");
    errors.splice(index, 1);
  }

  if (qualityValue) {
    const index = errors.indexOf("qualityInput");
    errors.splice(index, 1);
  }
});

educationPlaceInput.addEventListener("input", function (e) {
  const value = e.target.value;
  logEducationPlace.innerHTML = `${value}${value && ","}`;
  if (value === "") {
    logEducationPlaceHeader.innerHTML = "";
    educationPlaceInput.classList.add("error");
    educationPlaceInput.classList.remove("success");
    educationPlaceIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    educationPlaceLabel.classList.add("error-label");
    const index = errors.indexOf("educationPlaceInput");
    if (index > -1) return;
    errors.push("educationPlaceInput");
  } else {
    logEducationPlaceHeader.innerHTML = `<h1>განათლება</h1>`;
  }
  localStorage.setItem("educationPlaceValue", e.target.value);
  if (value.length < 2) {
    educationPlaceInput.classList.add("error");
    educationPlaceInput.classList.remove("success");
    educationPlaceIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    educationPlaceLabel.classList.add("error-label");
    const index = errors.indexOf("educationPlaceInput");
    if (index > -1) return;
    errors.push("educationPlaceInput");
  } else {
    educationPlaceInput.classList.remove("error");
    educationPlaceInput.classList.add("success");
    educationPlaceIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    educationPlaceLabel.classList.remove("error-label");
    const index = errors.indexOf("educationPlaceInput");
    if (index < 0) return;
    errors.splice(index, 1);
  }
});

qualityDateInput.addEventListener("input", function (e) {
  const value = e.target.value;
  logQualityDate.textContent = value;
  localStorage.setItem("qualityDateValue", value);
  if (value === "") {
    qualityDateInput.classList.add("error");
    qualityDateInput.classList.remove("success");
    const index = errors.indexOf("qualityDateInput");
    if (index > -1) return;
    errors.push("qualityDateInput");
  } else {
    qualityDateInput.classList.remove("error");
    qualityDateInput.classList.add("success");
    const index = errors.indexOf("qualityDateInput");
    if (index < 0) return;
    errors.splice(index, 1);
  }
});

textAreaThirdInput.addEventListener("input", function (e) {
  const value = e.target.value;
  logThirdArea.textContent = value;
  localStorage.setItem("thirdAreaVlue", value);
  if (value === "") {
    textAreaThirdInput.classList.add("error");
    textAreaThirdInput.classList.remove("success");
    const index = errors.indexOf("textAreaThirdInput");
    if (index > -1) return;
    errors.push("textAreaThirdInput");
  } else {
    textAreaThirdInput.classList.remove("error");
    textAreaThirdInput.classList.add("success");
    const index = errors.indexOf("textAreaThirdInput");
    if (index < 0) return;
    errors.splice(index, 1);
  }
});

qualityInput.addEventListener("change", function (e) {
  const value = e.target.value;
  const option = options.find(function (option) {
    if (option.id === +value) {
      return option;
    }
  });
  logQuality.textContent = option.title;
  localStorage.setItem("optionValue", value);
  localStorage.setItem("optionTitle", option.title);
  if (value === "") {
    qualityInput.classList.add("error");
    qualityInput.classList.remove("success");
    const index = errors.indexOf("qualityInput");
    if (index > -1) return;
    errors.push("qualityInput");
  } else {
    qualityInput.classList.remove("error");
    qualityInput.classList.add("success");
    const index = errors.indexOf("qualityInput");
    if (index < 0) return;
    errors.splice(index, 1);
  }
});

previousPage.addEventListener("click", function () {
  window.location.href = "experience.html";
});

clearStorage.addEventListener("click", function () {
  localStorage.clear();
});

endBtn.addEventListener("click", async function () {
  try {
    const data = new FormData();
    data.append("name", nameValue);
    data.append("surname", surnameValue);
    data.append("email", mailValue);
    data.append("phone_number", phoneValue);
    data.append("experiences", [
      {
        position: positionValue,
        employer: employerValue,
        start_date: dateFirstValue,
        due_date: dateSecondValue,
        description: secondTextareaValue,
      },
    ]);
    data.append("educations", [
      {
        institute: educationPlaceValue,
        degree_id: +optionValue,
        due_date: qualityDateValue,
        description: thirdAreaVlue,
      },
    ]);
    data.append("image", imageDataURL);
    data.append("about_me", textAreaValue);
    await fetch("https://resume.redberryinternship.ge/api/cvs", {
      method: "POST",
      body: data,
    });
    if (errors.length > 0 || !localStorage.getItem("imageDataURL")) return;
    window.location.href = "cv.html";
  } catch (error) {}
});

async function getOptions() {
  try {
    const response = await fetch(
      "https://resume.redberryinternship.ge/api/degrees"
    );
    options = await response.json();
    const html = `${options.map(function (option) {
      return `<option value="${option.id}">${option.title}</option>`;
    })}`;
    qualityInput.insertAdjacentHTML("beforeend", html);
    qualityInput.value = optionValue;
    const option = options.find(function (option) {
      if (option.id === +optionValue) {
        return option;
      }
    });
    logQuality.textContent = option.title;
  } catch (error) {}
}

getOptions();
