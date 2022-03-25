document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('github-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        //e.target[0].value
        getUsers(e.target[0].value)

    })
})

function getUsers(username) {
    fetch(` https://api.github.com/search/users?q=${username}`,{
        method: "GET",
        headers: {
            Accept: 'application/vnd.github.v3+json'
        }
    })
    .then(response => response.json())
    .then(response => console.log('response', response))
}
