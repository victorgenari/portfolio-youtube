const mobileNavigation = document.querySelector('.mobileNavigation')

function handleOpenMobileNavigation() {
    mobileNavigation.style.display = "flex"
}

function handleCloseMobileNavigation() {
    mobileNavigation.style.display = "none"
}

/* ---------------------------------------------------- */

const backToTopLink = document.querySelector('.backToTop')

window.addEventListener('scroll', function () {
    if (window.scrollY >= 420) {
        backToTopLink.classList.add('show')
    } else {
        backToTopLink.classList.remove('show')
    }
})