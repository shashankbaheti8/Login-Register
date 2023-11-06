const loginForm = document.querySelector(".login"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form-container"),
  formClose = document.querySelector(".form-close"),
  signup = document.querySelector("#signup"),
  login = document.querySelector("#login"),
  signupForm = document.querySelector(".signup-form")
  passShowHide = document.querySelectorAll(".pass-hide");


//Opening of login form
loginForm.addEventListener("click", () => home.classList.add("show-login"))

// Closing of login form
formClose.addEventListener("click", () => 
    home.classList.remove("show-login")
)


//Show and Hide password
passShowHide.forEach((item) => {
    item.addEventListener("click", () =>{
        let getpass = item.parentElement.querySelector("input");
        if(getpass.type === "password"){
            getpass.type = "text";
            item.classList.replace("fa-eye-slash", "fa-eye");
        }
        
        else{
            getpass.type = "password";
            item.classList.replace("fa-eye", "fa-eye-slash");
        }
    })
})

//Moves to signup
signup.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
  });

//Back to login
login.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
  });