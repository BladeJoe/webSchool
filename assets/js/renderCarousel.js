const track = document.querySelector('.carousel-track')
const slides = document.querySelectorAll('.carousel-slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const pagination = document.querySelector('.pagination')
const section = document.querySelector('.sponsors')
const noScrollSection = document.querySelector('.carousel-wrapper')

let index = 0
let dots = []
let prevVisibleSlides = 0
let autoSlide

let startX = 0
let endX = 0
const threshold = 50

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
            resetAutoSlide()
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

function resetAutoSlide() {
    clearInterval(autoSlide)
    autoSlide = setInterval(() => {
        const visibleSlides = getVisibleSlides()
        const maxIndex = slides.length - visibleSlides
        index = index >= maxIndex ? 0 : index + 1
        updateCarousel()
    }, 3000)
}

function handleResize() {
    const currentVisibleSlides = getVisibleSlides()
    if (currentVisibleSlides !== prevVisibleSlides) {
        prevVisibleSlides = currentVisibleSlides
        createPagination()
    }
    updateCarousel()
}

function movePrev() {
    index = Math.max(0, index - 1)
    resetAutoSlide()
    updateCarousel()
}

function moveNext() {
    const visibleSlides = getVisibleSlides()
    const maxIndex = slides.length - visibleSlides
    index = Math.min(maxIndex, index + 1)
    resetAutoSlide()
    updateCarousel()
}

prev.onclick = movePrev
next.onclick = moveNext

// Touch and mouse drag handlers
function onDragStart(e) {
    startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
}

function onDragMove(e) {
    endX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
}

function onDragEnd() {
    const diff = endX - startX
    if (Math.abs(diff) > threshold) {
        if (diff > 0) movePrev()
        else moveNext()
    }
}
track.addEventListener('touchstart', onDragStart, { passive: true })
track.addEventListener('touchmove', onDragMove, { passive: true })
track.addEventListener('touchend', onDragEnd)

track.addEventListener('mousedown', onDragStart)
track.addEventListener('mousemove', onDragMove)
track.addEventListener('mouseup', onDragEnd)
track.addEventListener('mouseleave', onDragEnd)

window.addEventListener('resize', handleResize)

noScrollSection.addEventListener('wheel', e => {
    e.preventDefault()
    if (e.deltaY > 0 || e.deltaX > 0) moveNext()
    else if (e.deltaY < 0 || e.deltaX < 0) movePrev()
}, { passive: false })

noScrollSection.addEventListener('touchmove', e => e.preventDefault(), { passive: false })

prevVisibleSlides = getVisibleSlides()
createPagination()
updateCarousel()
resetAutoSlide()
