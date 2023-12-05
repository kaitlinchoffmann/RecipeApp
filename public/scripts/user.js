
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


// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  if(response.ok) {
    return await response.json(); 
  } else {
    throw await response.json();
  }
} 

