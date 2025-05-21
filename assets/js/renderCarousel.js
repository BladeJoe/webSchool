const track = document.querySelector('.carousel-track')
const slides = document.querySelectorAll('.carousel-slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const dots = document.querySelectorAll('.pagination div')

let index = 0
const visibleSlides = 4
const maxIndex = slides.length - visibleSlides

function updateCarousel() {
    track.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`
    dots.forEach(dot => dot.classList.remove('active'))
    dots[index]?.classList.add('active')
}

prev.onclick = () => {
    index = Math.max(0, index - 1)
    updateCarousel()
}

next.onclick = () => {
    index = Math.min(maxIndex, index + 1)
    updateCarousel()
}

dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i
        updateCarousel()
    }
})

updateCarousel()
setInterval(() => {
    index = (index >= maxIndex) ? 0 : index + 1
    updateCarousel()
}, 2000)
