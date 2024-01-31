/*
Sempre que for necessário realizar uma referência ao documento HTML usamo a expressão 'document'

textContent -> Recupera todo o conteúdo
innerText -> Recupera APENAS o texto
innerHTML -> Permite adicionar HTML e texto

*/

const parag1 = document.querySelector("#paragraph")
parag1.textContent = "Novo texto do primeiro parágrafo"
console.log(parag1.textContent) // Só o texto, ignorando as tags e estilizações.

const parag2 = document.querySelector("#paragraph-2")
console.log(parag2.innerText) // Traz o conteúdo, levando em conta as estilizações no CSS(o que é visto na tela)

const parag3 = document.querySelector("#paragraph-3")
parag3.innerHTML = "Meu terceiro parágrafo alterado por <b>JavaScript</b>"
console.log(parag2.innerHTML) // Traz tudo e permite adicionar html