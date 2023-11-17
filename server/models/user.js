// contain all User entity database stuff
// table creation
const users = [
  {
    username: "cathy123",
    password: "icecream"
  },
  {
    username: "fredfredburger",
    password: "frozenyogurt"
  }
]

// CRUD functions
let getUsers = () => users;

function getUsers2() {
  return users;
}

// export functions so can utilize them in another
// file in application
module.exports = {getUsers, getUsers2}