let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let msg = document.getElementById("msg");

nome.addEventListener("change", function(){
    msg.innerHTML = nome.value.toUpperCase();
});

idade.addEventListener("change", function(){
    let soma = Number(idade.value)+10;
    msg.innerHTML = "Daquei a 10 anos você terá "+ soma +" anos";
});

