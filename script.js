
let elementoSlider = document.querySelector("#slider");
let elementoButton = document.querySelector("#button");

let tamanhoPassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijlmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ@!#&%";
let novaSenha = "";

tamanhoPassword.innerHTML = elementoSlider.value;

slider.oninput = function () {
    tamanhoPassword.innerHTML = this.value;


};

function gerarSenha() {
    let pass = "";

    for (let i = 0, n = charset.length; i < elementoSlider.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function senhaCopiada() {
    alert("Senha copiada com sucesso");
    navigator.clipboard.writeText(novaSenha);
}