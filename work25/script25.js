let users = []

let send = ( ) =>{
let userName = document.querySelector("#name").value
let userOld = document.getElementById("old").value
let user = {
    name: userName,
    userOld,
}
users.push(user)
console.log(users)

let userslist = document.querySelector(".users")
userslist.insertAdjacentHTML("beforeend", `

    <div class="name">${user.name}<div>
    <div class="old">${user["userOld"]}<div>
    
    `)
    let nameKey
    localStorage.setItem("nameKey", "userName")
}

