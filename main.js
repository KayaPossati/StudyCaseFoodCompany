window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 30) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}
