fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const container = document.querySelector("#container")
    const user = users.map(user =>{
        return `
        <div class="user">
        <img src="https://placehold.co/600x400" alt=${user.name}></img>
        <h2>${user.name}</h2>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Telefone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
        <p>Empresa: ${user.company.name}</p>
        <p>Endereço: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>  
        </div>
        `
    })

    container.innerHTML = user.join("")
})
