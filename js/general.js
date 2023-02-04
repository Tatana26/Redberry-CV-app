const form = document.querySelector("#form");
const output = document.querySelector("#general-right");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  output.innerHTML = `Name: ${name} <br> Surname: ${surname} <br> Email: ${email} <br> Phone: ${phone}`;
});
