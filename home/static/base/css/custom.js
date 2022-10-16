function toggleAuthentications() {
  let loginForm = document.querySelector("#login-form");
  let signupForm = document.querySelector("#signup-form");

  let toggleBtn1 = document.querySelector(".toggle-authentication1");
  let toggleBtn2 = document.querySelector(".toggle-authentication2");

  let state = 0;
  let signupDisclaimer = document.querySelector(".signup-disclaimer");
  let loginDisclaimer = document.querySelector(".login-disclaimer");

  toggleBtn1.addEventListener("click", e => {
    signupDisclaimer.style.display = "none";
    loginDisclaimer.style.display = "block";

    signupForm.style.display = "block";
    loginForm.style.display = "none";
  })

  toggleBtn2.addEventListener("click", e => {
    signupDisclaimer.style.display = "block";
    loginDisclaimer.style.display = "none";

    signupForm.style.display = "none";
    loginForm.style.display = "block";
  })
};

toggleAuthentications();