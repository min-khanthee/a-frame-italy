let montagnaSphere = document.querySelector('#la-montagna')

montagnaSphere.addEventListener('click', (e) => {
  montagnaSphere.setAttribute('color', 'green')
  montagnaSphere.removeAttribute('visible', false)
  // montagnaSphere.addAttribute('visible', 'true')
  // montagnaSphere.object3D.visible = true;
})
console.log(montagnaSphere)
