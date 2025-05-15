fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(dogs => {
    console.log(dogs)
    const container = document.querySelector("#container")
    container.innerHTML = `<img src=${dogs.message}></img>`
})