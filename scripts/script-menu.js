/* Botões */
const etapa1 = document.getElementById("etapa1");
const etapa2 = document.getElementById("etapa2");
const etapa3 = document.getElementById("etapa3");
const etapa4 = document.getElementById("etapa4");
/* Divs */
const div1 = document.getElementById("conteudo-btn1");
const div2 = document.getElementById("conteudo-btn2");
const div3 = document.getElementById("conteudo-btn3");
const div4 = document.getElementById("conteudo-btn4");
/* Campos - Validações - Etapa 1*/
const nome = document.querySelector("#txtNome");
const cpf = document.querySelector("#txtCPF");
const tel = document.querySelector("#txtTel");
const email = document.querySelector("#txtEmail");
/* Campos - Validações - Etapa 2*/
const empresa = document.querySelector("#txtEmpresa");
const setor = document.querySelector("#txtSetor");
const cargo = document.querySelector("#txtCargo");
/* Campos - Validações - Etapa 3*/
const sup = document.querySelector("#txtSup");
const horario = document.querySelector("#txtHorario");
const local = document.querySelector("#txtLocal");
/* Campo - mensagem*/
const msg = document.querySelector(".img-footer");

/* Funções para mudar a Div */
function btnDiv1() {
    limparDiv();
    div1.style.display = "block";
}
etapa1.addEventListener("click", btnDiv1);

function btnDiv2() {
    limparDiv();
    div2.style.display = "block";
    msg.innerHTML = "";
}
etapa2.addEventListener("click", btnDiv2);

function btnDiv3() {
    limparDiv();
    div3.style.display = "block";
    msg.innerHTML = "";
}
etapa3.addEventListener("click", btnDiv3);

function btnDiv4() {
    limparDiv();
    div4.style.display = "block";
    msg.innerHTML = "";
    /* Carrgar todos os dados */
    const _nome = document.querySelector("._nome");
    const _cpf = document.querySelector("._cpf");
    const _tel = document.querySelector("._tel");
    const _email = document.querySelector("._email");
    const _empresa = document.querySelector("._empresa");
    const _setor = document.querySelector("._setor");
    const _cargo = document.querySelector("._cargo");
    const _sup = document.querySelector("._sup");
    const _horario = document.querySelector("._horario");
    const _local = document.querySelector("._local");
    _nome.innerHTML = `${nome.value}`;
    _cpf.innerHTML = `${cpf.value}`;
    _tel.innerHTML = `${tel.value}`;
    _email.innerHTML = `${email.value}`;
    _empresa.innerHTML = `${empresa.value}`;
    _setor.innerHTML = `${setor.value}`;
    _cargo.innerHTML = `${cargo.value}`;
    _sup.innerHTML = `${sup.value}`;
    _horario.innerHTML = `${horario.value}`;
    _local.innerHTML = `${local.value}`;
}
etapa4.addEventListener("click", btnDiv4);

/* Funções para limpar a Div */
function limparDiv() {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
}

/* Botões próximo - Validações */
const prox1 = document.getElementById("btn-proximo-etapa1");
const prox2 = document.getElementById("btn-proximo-etapa2");
const prox3 = document.getElementById("btn-proximo-etapa3");
const prox4 = document.getElementById("btn-proximo-etapa4");
/* Div - Progressbar*/
const progressBar = document.querySelector('.progress');

/* Função progress-Bar */
let progress = 0;

function updateProgressBar() {
    progressBar.style.width = progress + "%";
}

function proximoPasso() {
    progress += 25;
    if (progress > 100) progress = 100;
    updateProgressBar();
}

/* Validação - Etapa 1 */
function btnProx1() {
    if (nome.value == "" || cpf.value == "" || tel.value == ""  || email.value == "") {
        msg.innerHTML = "Todos os campos são de preenchimento obrigatório, verifique se ficou algum sem preencher...";
    } else {
        msg.innerHTML = "Parabéns, pronto para a próxima etapa! Desbloqueada a etapa Nº 2!";
        proximoPasso();
        etapa2.disabled = false;
    }
}
prox1.addEventListener("click", btnProx1);

/* Validação - Etapa 2 */
function btnProx2() {
    if (empresa.value == "" || setor.value == "" || cargo.value == "") {
        msg.innerHTML = "Todos os campos são de preenchimento obrigatório, verifique se ficou algum sem preencher...";
    } else {
        msg.innerHTML = "Parabéns, pronto para a próxima etapa! Desbloqueada a etapa Nº 3!";
        proximoPasso();
        etapa3.disabled = false;
    }
}
prox2.addEventListener("click", btnProx2);

/* Validação - Etapa 3 */
function btnProx3() {
    if (sup.value == "" || horario.value == "" || local.value == "") {
        msg.innerHTML = "Todos os campos são de preenchimento obrigatório, verifique se ficou algum sem preencher...";
    } else {
        msg.innerHTML = "Parabéns, pronto para a próxima etapa! Desbloqueada a etapa Nº 4!";
        proximoPasso();
        etapa4.disabled = false;
    }
}
prox3.addEventListener("click", btnProx3);

/* Validação - Etapa 4 */
function btnProx4() {
    msg.innerHTML = "Parabéns, Cadastro concluído com sucesso!";
    proximoPasso();
}
prox4.addEventListener("click", btnProx4);