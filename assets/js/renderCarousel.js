const track = document.querySelector('.carousel-track')
const slides = document.querySelectorAll('.carousel-slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const pagination = document.querySelector('.pagination')

let index = 0
let dots = []
let prevVisibleSlides = 0

function getSlideWidth() {
    return window.innerWidth <= 928 ? 315 : 287
}

function getVisibleSlides() {
    if (window.innerWidth <= 959) return 1
    if (window.innerWidth <= 1024) return 2
    if (window.innerWidth <= 1280) return 3
    return 4
}

function createPagination() {
    pagination.innerHTML = ''
    const visibleSlides = getVisibleSlides()
    const totalPages = Math.max(1, slides.length - visibleSlides + 1)
    dots = []

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div')
        dot.classList.add(`page-${i + 1}`)
        dot.onclick = () => {
            index = i
            updateCarousel()
        }
        pagination.appendChild(dot)
        dots.push(dot)
    }
}

function updateCarousel() {
    const slideWidth = getSlideWidth()
    const visibleSlides = getVisibleSlides()
    const maxIndex = slides.length - visibleSlides
    index = Math.min(index, maxIndex)
    track.style.transform = `translateX(-${index * (slideWidth + 16)}px)`
    dots.forEach(dot => dot.classList.remove('active'))
    dots[index]?.classList.add('active')
}

function handleResize() {
    const currentVisibleSlides = getVisibleSlides()
    if (currentVisibleSlides !== prevVisibleSlides) {
        prevVisibleSlides = currentVisibleSlides
        createPagination()
    }
    updateCarousel()
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

window.addEventListener('resize', handleResize)

prevVisibleSlides = getVisibleSlides()
createPagination()
updateCarousel()

setInterval(() => {
    const visibleSlides = getVisibleSlides()
    const maxIndex = slides.length - visibleSlides
    index = index >= maxIndex ? 0 : index + 1
    updateCarousel()
}, 30000)
