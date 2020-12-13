const btn = document.querySelector('.switch')
const navLinks = document.querySelector('.nav-links')
AOS.init();

btn.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav')
    btn.classList.toggle('toggle')

})

const tl = gsap.timeline({ defaults: { ease: 'power4' } })
const tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } })

tl.to('.navbar', { opacity: 0, duration: 0 })
tl.to('.text', { y: '0%', duration: 1.2 })
tl.to('.intro', { y: '-100%', duration: 1.2, delay: .7 })
tl.to('.navbar', { opacity: 1, duration: 1 })
tl.to('.hero-head', { opacity: 1, duration: .5 })
tl.from('.hero-pic', { y: '100%', opacity: 0, duration: 1 })
tl2.to('.hero-pic img', { y: 15, repeat: -1, yoyo: true, duration: 2 })