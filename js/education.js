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

window.addEventListener("load", function () {
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

  const educationPlaceValue = localStorage.getItem("educationPlaceValue");
  if (educationPlaceValue) {
    logEducationPlaceHeader.innerHTML = `<h1>განათლება</h1>`;
  }
});

educationPlaceInput.addEventListener("input", function (e) {
  const value = e.target.value;
  logEducationPlace.innerHTML = `${value}${value && ","}`;
  if (value === "") {
    logEducationPlaceHeader.innerHTML = "";
  } else {
    logEducationPlaceHeader.innerHTML = `<h1>განათლება</h1>`;
  }
  localStorage.setItem("educationPlaceValue", e.target.value);
  if (value.length < 2) {
    educationPlaceInput.classList.add("error");
    educationPlaceInput.classList.remove("success");
    educationPlaceIcon.innerHTML = `<img src="./image/error-icon.png" alt="" />`;
    educationPlaceLabel.classList.add("error-label");
  } else {
    educationPlaceInput.classList.remove("error");
    educationPlaceInput.classList.add("success");
    educationPlaceIcon.innerHTML = `<img src="./image/success-icon.png" alt="" />`;
    educationPlaceLabel.classList.remove("error-label");
  }
});

qualityInput.addEventListener("input", function (e) {
  const value = e.target.value;
  logQuality.textContent = value;
  localStorage.setItem("qualityValue", value);
});

qualityDateInput.addEventListener("input", function (e) {
  const value = e.target.value;
  logQualityDate.textContent = value;
  localStorage.setItem("qualityDateValue", value);
});

textAreaThirdInput.addEventListener("input", function (e) {
  const value = e.target.value;
  logThirdArea.textContent = value;
  localStorage.setItem("thirdAreaVlue", value);
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
      method: "post",
      body: data,
    });
    window.location.href = "cv.html";
  } catch (error) {
    console.log(error);
  }
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
