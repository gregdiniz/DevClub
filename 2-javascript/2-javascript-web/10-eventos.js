/*
Chamada de evendos vindos do HTML


*/

function cliquei(){
    const texto = document.querySelector("#myInput")
    const parag2 = document.querySelector("#paragraph-2")
    texto.value !== '' ? parag2.innerHTML = `<b>${texto.value}</b> clicou no botão` : parag2.innerText = "O botão foi clicado."
}