let montagnaSphere = document.querySelector('#la-montagna')
let montagnaText = document.querySelector('#la-montagna-text')

montagnaSphere.addEventListener('click', (e) => {
  montagnaSphere.setAttribute('color', 'green')
  montagnaText.setAttribute('visible', true)
  // montagnaSphere.addAttribute('visible', 'true')
  // montagnaSphere.object3D.visible = true;
})
