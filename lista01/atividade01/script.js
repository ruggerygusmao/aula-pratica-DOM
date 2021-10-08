function myFunction(){
    let capitais = ["São Luís, Piauí, Ceará, Paraíba, Sergipe"];
    capitais.forEach(element => {
        document.getElementById("cap").innerHTML = element;
    });
}