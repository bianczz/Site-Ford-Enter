/* 
Ação->Elemento->Função 
////////////////
Case sensitive ->diferencia maiuscula e minuscula
por tag: getElementsByTagName()
por id: getElementsById()
por nome: getElementsByNome()
por calsses: getElementsByClassName()
por seletor: querySelector()
let preço =Number(document.querySelector('#preco')) para o js entender q é um valor numerico
*/

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto= document.querySelector('#assunto')
let nomeOk= false
let emailOk= false
let assuntoOk= false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width ='100%'

//window.alert("Meu primeiro script")

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length<3 )
    {
        txtNome.innerHTML='Nome inválido'
        txtNome.style.color='red'
    }
    else
    {
        txtNome.innerHTML='Nome válido'
        txtNome.style.color='greenyellow'
        nomeOk=true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@')==-1 ||email.value.indexOf('.')==-1)
    {
        txtEmail.innerHTML='email inválido'
        txtEmail.style.color='red'
    }
    else{
        txtEmail.innerHTML='email válido'
        txtEmail.style.color='greenyellow'
        emailOk=true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length>100)
    {
        txtAssunto.innerHTML="O assunto deve ter 100 caracteres ou menos"
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'
    }
    else if(assunto.value.length<10)
    {
        txtAssunto.innerHTML='O assunto deve ter 10 caracteres ou mais'
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'
    }
    else
    {
       txtAssunto.innerHTML='' 
       txtAssunto.style.display='none'
       assuntoOk=true
    }
}

function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true)
        alert("Formulário enviado com sucesso!")
    else
        alert("Preencha corretamente todos os campos do formulário")
}

function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.height='650px'
}
function mapaNormal(){
    mapa.style.width='500px'
    mapa.style.height='350px'
}