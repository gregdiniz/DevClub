const imputByName = document.getElementsByName('myInput')
imputByName.forEach(element => console.log(element.value))

const tagH1 = document.querySelector('h1')
tagH1.innerText = 'Texto do JS'
tagH1.style.color = '#FF0000'

const tagTitle = document.querySelector('title')
tagTitle.textContent ="Selecionando Atributos"

const tagP = document.querySelector('p')
tagP.innerHTML = '<b>Meu primeiro parágrafo(usando JS)</b> <br> Segunda linha (usando JS)'

const tagBody = document.querySelector('body')
tagBody.style.backgroundColor = '#D3D3D3'

const funcAlerta = () => {alert('Fui pressionado')}// -> tambem usado para a função ser chamada na página HTML
const tagButton = document.querySelector('button')
//tagButton.onclick = () => {alert('Fui Pressionado')}
tagButton.addEventListener('click', funcAlerta)

const tagInput = document.querySelector('input')
tagInput.onkeydown = (evento) =>{
    console.log(evento.target.value)
}
tagInput.addEventListener('focus', () => {console.log('Deu foco no input')})

const tagSelect = document.querySelector('select')
for (i=1; i<5; i++){
    tagSelect.innerHTML += `<option>Opção ${i}</option>`
}
tagSelect.addEventListener('change',()=>{console.log(tagSelect.value)})