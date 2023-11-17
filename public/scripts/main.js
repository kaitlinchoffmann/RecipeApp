let postBtn = document.getElementById('post')
postBtn?.addEventListener('click', getPosts) 

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
}

let foodBtn = document.getElementById("food")
if(foodBtn) foodBtn.addEventListener('click', getFood)

let foodList = document.getElementById('foodList')

function getFood() {
    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach(foodItem => {
          foodList.innerHTML+=
            `<li>${foodItem.name}</li>`
        })
      })
}

let noteForm = document.getElementById("noteForm")

if(noteForm) noteForm.addEventListener("submit", addNote)

function addNote(e) {
  e.preventDefault()
  
  let note = document.getElementById('note').value
  let noteList = document.getElementById("noteList")

  noteList.innerHTML += `<li>${note}</li>`
  document.getElementById('note').value=""
}