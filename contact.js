const form = document.querySelector("#contact-form");
const error = document.querySelector("#form-error");
const fields = form.querySelectorAll("[required]");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  error.textContent = "";

  for (const field of fields) {
    if (field.value.trim() === "") {
      error.textContent = "Please fill in " + field.labels[0].textContent + ".";
      field.focus();
      return;
    }
  }

  const email = document.querySelector("#email");
  if (!email.validity.valid) {
    error.textContent = "Please enter a valid email address.";
    email.focus();
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
});
