function submeter(e) {
    e.preventDefault();
    nome = getIdValue("nome-id");
    email = getIdValue("e-mail-id");
    categoria = getRadioButtonValue("categoria-id");
    telefone = getIdValue("telefone-id");
    assunto = getIdValue("assunto-id");
    mensagem = getIdValue("mensagem-id");
    mensagemCaracteres = getIdValue("mensagem-id").length;
    this.elementsValidation(nome, email, telefone, categoria, assunto, mensagem);
    console.log(mensagemCaracteres);
}

function getIdValue(id) {
    var element = document.getElementById(id);
    return element.value;
}

function getRadioButtonValue(name){
    const rbs = document.getElementsByName(name);
    let selectedRadio;
    for(const rb of rbs){
        if(rb.checked) {
            selectedRadio = rb.value;
            break;
        }
    }
    return selectedRadio;
}

function elementsValidation(nome, email, telefone, categoria, assunto, mensagem, mensagemCaracteres) {
    clearErrorMessage();
    var validou = false;
    nome = (nome == null || nome == "") ? validou = validateInput("nome-id", "red", "nome", "errorMessage-nome") : validatedInput("nome-id", "green");
    email = (email == null || email == "") ? validou = validateInput("e-mail-id", "red", "e-mail", "errorMessage-email") : validatedInput("e-mail-id", "green");
    categoria = (categoria == null || categoria == "") ? validou = validateInput("radio-id", "red", "categoria", "errorMessage-categoria") : validatedInput("radio-id", "green");
    telefone =(telefone == null || telefone == "") ? validou = validateInput("telefone-id", "red", "telefone", "errorMessage-telefone") : validatedInput("telefone-id", "green");
    assunto = (assunto == null || assunto == "") ? validou = validateInput("assunto-id", "red", "assunto", "errorMessage-assunto") : validatedInput("assunto-id", "green");
    mensagem = (mensagem == null || mensagem == "") ? validou = validateInput("mensagem-id", "red", "mensagem", "errorMessage-mensagem")  : validatedInput("mensagem-id", "green");
    
    if (!validou) {
        var errorMessage = document.getElementById("enviado-id");
        errorMessage.innerHTML = "Seu formulário foi enviado com sucesso";
        errorMessage.style.display = "block";
        //clearBorderStyle();
        document.getElementById("contactForm").reset();
    }
}

function validateInput(id, cor, nomeCampo, campoMensagemErro){
    var input = document.getElementById(id);
    input.style.borderColor = cor;
    var errorMessage = document.getElementById(campoMensagemErro);
    errorMessage.innerHTML = errorMessage.innerHTML+ " O campo " + nomeCampo + " é obrigatório";
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    return true;
}

function validatedInput(id, cor){
    var input = document.getElementById(id);
    input.style.borderColor = cor;
    return false;
}

function clearErrorMessage() {
    var errorMessageNome = document.getElementById("errorMessage-nome");
    var errorMessageEmail = document.getElementById("errorMessage-email");
    var errorMessageCategoria = document.getElementById("errorMessage-categoria");
    var errorMessageTelefone = document.getElementById("errorMessage-telefone");
    var errorMessageAssunto = document.getElementById("errorMessage-assunto");
    var errorMessageMensagem = document.getElementById("errorMessage-mensagem");
    errorMessageNome.innerHTML = "";
    errorMessageEmail.innerHTML = "";
    errorMessageCategoria.innerHTML = "";
    errorMessageTelefone.innerHTML = "";
    errorMessageAssunto.innerHTML = "";
    errorMessageMensagem.innerHTML = "";
}

function clearBorderStyle(){
    document.getElementById("nome-id").style.borderColor = "initial";
    document.getElementById("e-mail-id").style.borderColor = "initial";
    document.getElementById("telefone-id").style.borderColor = "initial";
    document.getElementById("radio-id").style.borderColor = "transparent";
    document.getElementById("assunto-id").style.borderColor = "initial";
    document.getElementById("mensagem-id").style.borderColor = "initial";
}