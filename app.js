const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const captcha = document.getElementById("captcha");

// add a submit event listener on the form 
// prevent the default behavior

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    checkInputs()
});

function setError(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkInputs(){
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const captchaValue = captcha.value.trim();
  //    console.log(usernameValue, emailValue, passwordValue, password2Value, captchaValue);

  if ("usernameValue") {
    setError(username, "username is requires");
  } else if (usernameValue.length < 5) {
    setError(username, "minimum username length is 5 ");
  } else {
    setSuccess("username");
  }
  if (!emailValue) {
    setError(email, "email is required");
  } else if (!emailValue.includes("@")) {
    setError(email, "email is not valid");
  } else {
    setSuccess(email);
  }
  //password must not be empty and min password length is 7
  if (!passwordValue) {
    setError(password, "password is required");
  } else if (passwordValue.length <= 7) {
    setError(password, "password is not long enough");
  } else {
    setSuccess(password);
  }
  //password
  if (!password2Value) {
    setError(password2, "password is required");
  } else if (password2Value !== passwordValue) {
    setError(password2, "passwords do not match");
  } else {
    setSuccess(password2);
  }
//   captcha
if (!captchaValue){
    setError(captcha, "captcha is required")
}
}

//  validate the username (empty field , min length is 5 )
// validate email (email must not be empty, email must include @)
// select that button using the class show-btn
const showbtn = document.querySelector(".show-btn");
showbtn.addEventListener("click", (event) => {
event.preventDefault();
const inputType = password.getAttribute("type");
if (inputType === "password"){
    password.setAttribute("type", "text");
    showbtn.value = "hide";
} else {
    password.setAttribute("type", "password");
    showbtn.value = "show"
}
})


captcha.addEventListener("input", (e) => {
    const img = document.querySelector("img");
    const text = e.target.value;
    const blurValue = 20 - text.length 
    img.style.filter = `blur(${blurValue}px)`;

if (blurValue <= 0){
    setSuccess(captcha);
} else {
    setError(captcha, "Text is not long enough");
}
})