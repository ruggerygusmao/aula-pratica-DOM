let form = document.getElementById("btn");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");

form.addEventListener("click", function () {
    let result = (Number(n1.value) + Number(n2.value));
    if ((n1.value >= 2) && (n1.value <= 10) && (n2.value >= 2) && (n2.value <= 10)) {
        document.getElementById("result").innerHTML = "Total: " + result;
    } else {
        document.getElementById("result").innerHTML = "Digite números entre 2 e 10!";
    }
});