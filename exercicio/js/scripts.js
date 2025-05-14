fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(resposta => resposta.json())
.then(postinho => console.log(postinho))