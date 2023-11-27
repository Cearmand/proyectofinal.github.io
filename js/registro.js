let form = document.querySelector("form")
form.addEventListener("submit", validar)
function validar(e){
    e.preventDefault()
    let name = document.querySelector("#nombre").value
    let apelli = document.querySelector("#apellido").value
    let user = document.querySelector("#user").value
    let email = document.querySelector("#email").value
    let adress = document.querySelector("#adress").value
    let tel = document.querySelector("#num").value
    let pass = document.querySelector("#pass").value
    let mostrar=document.getElementById("usuario")
    let guardado=document.getElementById("guardado")
    mostrar.innerText=name+apelli+'\n'+email
    guardado.innerText='Datos guardados con exito.'
}

