var nome = document.querySelector("#nome")
var nomeOK = false
var email = document.querySelector("#email")
var assunto = document.querySelector("#assunto")

function validarNome () {
    let txtNome = document.querySelector("#txtNome")
if(nome.value.length < 2) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
    nomeOK = false;
}
else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
    nomeOK = true
}
}
function validar () {
    if (nomeOK = true) {
        alert("Mensagem enviada!");
    }
    else {
        alert ("ERRO! Revise os campos.");
    }
}
function validarEmail ()  {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@" ) == -1 || email.value.indexOf(".") == -1)  {
        txtEmail.innerHTML = "Email inválido";
        txtEmail.style.color = "red";
    }
    else {
        txtEmail.innerHTML = "Email válido";
        txtEmail.style.color = "green"
    }
}
function validarAssunto () {
    let txtAssunto = document.querySelector ("#txtAssunto")
    if (assunto.value.length >=100) {
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
    }
    else {
        txtNome.innerHTML = "";
    }
}