let montagnaSphere = document.querySelector('#la-montagna')
let montagnaText = document.querySelector('#la-montagna-text')

let casaSphere = document.querySelector('#la-casa')
let casaText = document.querySelector('#la-casa-text')

montagnaSphere.addEventListener('click', (e) => {
  montagnaSphere.setAttribute('color', 'green')
  montagnaText.object3D.visible = true
})

casaSphere.addEventListener('click', (e) => {
  casaSphere.setAttribute('color', 'green')
  casaText.object3D.visible = true
})
