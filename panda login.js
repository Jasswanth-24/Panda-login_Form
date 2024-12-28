let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let submitBtn = document.getElementById("submit-btn");

let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
  eyeR.style.cssText = `
    right:0.6em;
    top:0.6em;
  `;
};

let normalHandStyle = () => {
  handL.style.cssText = `
        height: 2.81em;
        top:8.4em;
        left:7.5em;
        transform: rotate(0deg);
    `;
  handR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg)
    `;
};

// When clicked on username input
usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `
    left: 0.75em;
    top: 1.12em;  
  `;
  eyeR.style.cssText = `
    right: 0.75em;
    top: 1.12em;
  `;
  normalHandStyle();
});

// When clicked on password input
passwordRef.addEventListener("focus", () => {
  handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
  handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
  normalEyeStyle();
});

// When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});

// Validate input and save to localStorage
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let username = usernameRef.value.trim();
  let password = passwordRef.value.trim();

  // Username must be alphabets only
  let usernameRegex = /^[A-Za-z]+$/;
  // Password must contain letters and numbers only
  let passwordRegex = /^[A-Za-z0-9]+$/;

  if (!usernameRegex.test(username)) {
    alert("Username must contain alphabets only!");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must contain letters and numbers only!");
    return;
  }

  // Save to localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Data saved successfully!");

  // Redirect to another page
  window.location.href = "panda login submit.html"; // Replace with your target page
});
