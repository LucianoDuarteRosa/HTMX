document.body.addEventListener("htmx:afterRequest", function(event){
    if(event.target.id === "load-user-data"){
        console.log("chegou aqui")
    }
    console.log(event.detail.xhr.responseText)

    const response = JSON.parse(event.detail.xhr.responseText)

    const userDataDiv = document.querySelector("#result-userData-2")

    userDataDiv.innerHTML = `
    <p>nome: ${response.name}</p>
    <p>Idade: ${response.age}</p>
    <p>Localização: ${response.location}</p>
    `
});