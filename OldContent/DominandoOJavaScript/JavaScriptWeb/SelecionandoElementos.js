const elementId = document.getElementById('myH1')
const elementClassName = document.getElementsByClassName('paragraph')
const elementGetElementByTagName = document.getElementsByTagName('head')
const elementGetElementByName = document.getElementsByName('myInput')
//console.log(elementId)
//console.log(elementClassName)
//console.log(elementGetElementByTagName)
elementGetElementByName.forEach(element => console.log(element.value))

const qSelectorClass = document.querySelector('.paragraph') //usando um '.' a função localiza o elemento pela classe
const qSelectorId = document.querySelector('#myId') //usando um '#' a função localiza o elemento pelo id
const qSelectorTag = document.querySelector('h1') //encontra o primeiro elemento da pesquisa na página, seja classe/id/tag  
//console.log(qSelector)

const qSelectorAll = document.querySelectorAll('p') //encontra todos os elementos da página, seja classe/tag  
qSelectorAll.forEach(element => console.log(element))