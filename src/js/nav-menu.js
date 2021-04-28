const
  navbarNavBtn = document.querySelector('.navbar__nav-btn'),
  navbarCollapse = document.querySelector('.navbar__collapse'),
  navbarNav = document.querySelector('.navbar__nav')

const
  navbarNavBtnAriaLabel = navbarNavBtn.dataset.ariaLabelExpanded,
  navbarNavBtnAriaLabelExpanded = navbarNavBtn.ariaLabel

navbarNavBtn.onclick = () => {
  if (navbarNavBtn.classList.contains('expanded')) navClose()
  else navOpen()
}

function navClose() {
  document.body.addEventListener('transitionend', function end() {
    document.body.removeEventListener('transitionend', end)
    navbarNavBtn.ariaExpanded = 'false'
    navbarNavBtn.classList.remove('expanded')
    navbarNavBtn.ariaLabel = navbarNavBtnAriaLabelExpanded
  })

  document.body.style.transform = null
  document.body.style.overflowX = null
}

function navOpen() {
    navbarNavBtn.ariaExpanded = 'true'
    navbarNavBtn.classList.add('expanded')
    navbarNavBtn.ariaLabel = navbarNavBtnAriaLabel

    document.body.style.transform = 
      `translateX(${navbarNav.getBoundingClientRect().width}px)`
    document.body.style.overflowX = 'hidden'
}