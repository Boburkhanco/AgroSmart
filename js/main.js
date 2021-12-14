searchBtn.addEventListener('click', e => {
    headerMenu.classList.toggle('dNone')
    searchPart.classList.toggle('dBlock')
})
menuToggler.addEventListener('click', e => {
    menuHamburger.classList.toggle('displayBlock')
    desktopMode.classList.toggle('displayNone')
    mobileMode.classList.toggle('displayBlock')
})