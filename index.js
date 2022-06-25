let montagnaSphere = document.querySelector('#la-montagna')
let montagnaText = document.querySelector('#la-montagna-text')

let casaSphere = document.querySelector('#la-casa')
let casaText = document.querySelector('#la-casa-text')

let cagnaSphere = document.querySelector('#la-cagna')
let cagnaText = document.querySelector('#la-cagna-text')

let barcaSphere = document.querySelector('#la-barca')
let barcaText = document.querySelector('#la-barca-text')

montagnaSphere.addEventListener('click', (e) => {
  montagnaSphere.setAttribute('color', 'green')
  montagnaText.object3D.visible = true
})

casaSphere.addEventListener('click', (e) => {
  casaSphere.setAttribute('color', 'green')
  casaText.object3D.visible = true
})

cagnaSphere.addEventListener('click', (e) => {
  cagnaSphere.setAttribute('color', 'green')
  cagnaText.object3D.visible = true
})

barcaSphere.addEventListener('click', (e) => {
  barcaSphere.setAttribute('color', 'green')
  barcaText.object3D.visible = true
})
