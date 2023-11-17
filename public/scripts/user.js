let loginForm = document.getElementById("login-form")
if(loginForm) loginForm.addEventListener('submit', login)

function login(e){
  e.preventDefault()
// another way
  let userName = document.getElementById("username").value
  let password = document.getElementById("pswd").value

  // one way
  let user = {
    userName: document.getElementById("username").value,
    password: document.getElementById("pswd").value
  }

// at this point, would send info to server...

  let h3 = document.getElementById("greeting")
  h3.innerHTML = `Welcome Back, ${user.userName}!`
  
  window.location.href = "index.html"
}

