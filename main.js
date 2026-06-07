let card = document.querySelector(".newsletter-card");
let successMessage = document.querySelector("#success-message");
let errorMessage = document.querySelector(".error-em");
let email = document.querySelector("#email");
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let form = document.querySelector(".contactForm");

let toaster = (show) => {
  if (show) {
    successMessage.classList.remove("hidden");
    card.classList.add("hidden");

    setTimeout(() => {
      successMessage.classList.add("hidden");
      card.classList.remove("hidden");
    }, 5000);
  } else {
    successMessage.classList.add("hidden");
  }
};

let ShowErr = (see, errMsg, inputBorder) => {
  if (see) {
    errMsg.classList.remove("hidden");
    inputBorder.style.borderColor = "var(--pink)";
  } else {
    errMsg.classList.add("hidden");
    inputBorder.style.borderColor = "";
  }
};

// form event

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = email.value.trim();
  let isValid = emailPattern.test(value);
  // validators
  // invalid email
  if (!isValid) {
    ShowErr(true, errorMessage, email);
    toaster(false);
    return;
  }
  ShowErr(false, errorMessage, email);
  console.log("form submitted successfully", value);
  toaster(true);
  form.reset();
});

let dismissBtn = document.querySelector(".button");

dismissBtn.addEventListener("click", () => {
  successMessage.classList.add("hidden");
  card.classList.remove("hidden");
});


