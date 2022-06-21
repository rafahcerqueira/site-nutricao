const burguer = document.getElementsByClassName("menu-burguer");  

function toggleMenu(event){     

    if(event.type === 'touchstart') event.preventDefault();

        const cabecalhoMenu = document.getElementById("menu-burguer");
        nav.classList.toggle('on');     
        const on = cabecalhoMenu.classList.contains('on');     
        event.currentTarget.setAttribute('aria-expanded', on); 
}  
burguer.addEventListener('click', toggleMenu); 
burguer.addEventListener('touchstart', toggleMenu);


function redirecionarWpp(){
    window.open("https://wa.me/5515991097077");
}

function redirecionarInsta(){
    window.open("https://www.instagram.com/rafaael1/");
}

function redirecionarEmail(){
    window.open("https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser");
}

function idadeMostrar(){
    let idade = document.getElementById("idade").value;
    document.getElementById("idade1").innerHTML = Number(idade);
}

function pesoMostrar(){
    let peso = document.getElementById("peso").value;
    document.getElementById("peso1").innerHTML = Number(peso);
}

function alturaMostrar(){
    let altura = document.getElementById("altura").value;
    document.getElementById("altura1").innerHTML = Number(altura);
}

function enviar(){
    let nome1 = document.getElementById("nome").value;

    document.getElementById("result").innerHTML = "Olá " + nome1 + "," + " seu cadastro foi realizado com sucesso!";
}