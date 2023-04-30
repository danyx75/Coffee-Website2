const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navlist = document.getElementsByClassName('nav-list')[0]

togglebutton.addEventListener('click', () => {
  navlist.classList.toggle('active')
})