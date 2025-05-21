const track = document.querySelector('.carousel-track')
const slides = document.querySelectorAll('.carousel-slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const dots = document.querySelectorAll('.pagination div')

let index = 0

function getSlideWidth() {
    const width = window.innerWidth
    if (width <= 768) return 315
    return 287
}

function getVisibleSlides() {
    const width = window.innerWidth
    if (width <= 375) return 1
    if (width <= 768) return 3
    return 4
}

function updateCarousel() {
    const slideWidth = getSlideWidth()
    const visibleSlides = getVisibleSlides()
    const maxIndex = slides.length - visibleSlides
    index = Math.min(index, maxIndex)
    track.style.transform = `translateX(-${(index * 16) + index * slideWidth
        }px)`
    dots.forEach(dot => dot.classList.remove('active'))
    dots[index]?.classList.add('active')
}

prev.onclick = () => {
    index = Math.max(0, index - 1)
    updateCarousel()
}

next.onclick = () => {
    const visibleSlides = getVisibleSlides()
    const maxIndex = slides.length - visibleSlides
    index = Math.min(maxIndex, index + 1)
    updateCarousel()
}

dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i
        updateCarousel()
    }
})

window.addEventListener('resize', updateCarousel)

updateCarousel()
setInterval(() => {
    const visibleSlides = getVisibleSlides()
    const maxIndex = slides.length - visibleSlides
    index = index >= maxIndex ? 0 : index + 1
    updateCarousel()
}, 30000)
