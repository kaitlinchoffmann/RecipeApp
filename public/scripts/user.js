
import { fetchData, setCurrentUser } from "./main.js"

let loginForm = document.getElementById("login-form")
if(loginForm) loginForm.addEventListener('submit', login)

function login(e){
  e.preventDefault()

  let user = {
    username: document.getElementById("username").value,
    password: document.getElementById("pswd").value
  }

  fetchData("/users/login", user, "POST")
  .then(data => {
    if(!data.message) {
      // add new user to local storage
      console.log(data)
      setCurrentUser(data)
      window.location.href = "index.html"
    }
  })
  .catch(err => {
    let errorSection = document.querySelector("#login-form .error")
    errorSection.innerText = err.message
    document.getElementById("username").value = ""
    document.getElementById("pswd").value = ""
  })
}

// REGISTRATION
let regForm = document.getElementById("register-form")
if(regForm) regForm.addEventListener("submit", register)

function register(e) {
  e.preventDefault()

  let user = {
    username: document.getElementById("username").value,
    password: document.getElementById("pswd").value,
    email: document.getElementById("email").value
  }

  fetchData("/users/register", user, "POST")
  .then(data => {
    if(!data.message) {
      setCurrentUser(data)
      window.location.href = "profile.html"
    }
  })
  .catch(err => {
    console.log(err)
    let errorSection = document.querySelector("#register-form .error")
    errorSection.innerText = err.message
    document.getElementById("username").value = ""
    document.getElementById("email").value = ""
    document.getElementById("pswd").value = ""
  })
  
}

