document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('github-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        //e.target[0].value
        getUsers(e.target[0].value)

    })
})

function getUsers(username) {
    fetch(` https://api.github.com/search/users?q=${username}`, {
        method: "GET",
        headers: {
            Accept: 'application/vnd.github.v3+json'
        }
    })
    .then(response => response.json())
    .then(response => response.items.map(item => displayUser(item)))
}


function displayUser(user) {
    const userList = document.querySelector("#user_list")
    const li = document.createElement("li")
    const image = document.createElement("img")
    image.src = user.avatar_url
    image.alt = user.login
    const h3 = document.createElement("h3")
    h3.textContent = user.login
    li.append(image, h3)
    userList.append(li)
}