import {getRandomInt} from './random.js'


const createCardNode = ()=>{
    const imagen = document.createElement("img")
    // debugger
    imagen.src=`https://source.unsplash.com/random/${getRandomInt()}` 
    const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"
    const parrafo = document.createElement("p")
    parrafo.className = "description"
    const text = document.createTextNode('J ai deux amours Mon pays et Paris Par eux toujours Mon coeur est ravi Ma savane est belle Mais à quoi bon le nier Ce qui mensorcelle Cest Paris, Paris tout entier Le voir un jour Cest mon rêve joli Jai deux amours')
    parrafo.appendChild(text)
    const card = document.createElement("div")
    card.className="card"

    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(parrafo)

    return card
}

const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector('button') 

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)
