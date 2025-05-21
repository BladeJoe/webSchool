const courseData = [
    {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Профессия веб-разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц"
    }, {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Профессия веб-разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц"
    }, {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Профессия веб-разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц"
    }, {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Профессия веб-разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц"
    }, {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Профессия веб-разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц"
    }
]
const categories = [
    "Программирование",
    "Маркетинг",
    "Дизайн",
    "Аналитика",
    "Финансы",
    "Управление",
    "Контент-маркетинг"
];
const courseCategories = document.querySelector('.course-categories')
const courseWrapper = document.querySelector('.course-wrapper')

const categoriesList = document.createElement('ul')

categories.forEach((cat, i) => {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.textContent = cat

    if (i === 0) btn.classList.add('active')

    btn.addEventListener('click', () => {
        document.querySelectorAll('.course-categories button').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        // TODO: filter/render courses by category if you ever feel like it
    })

    li.appendChild(btn)
    categoriesList.appendChild(li)
})

courseCategories.appendChild(categoriesList)


courseData.forEach(course => {
    const div = document.createElement('div')
    div.className = 'course-item'
    div.innerHTML = `
        <h4 class="jobtitle"> ${course.profession.split(' ')[0]}
            <div>${course.profession.split(' ').slice(1).join(' ')}</div>
        </h4>
        <div class="square-wrapper">
            <div>
                <p class="title">${course.school}</p>
                <p class="rating small">⭐ <span>${course.rating}</span></p>
                <p class="review">Отзывы о школе<span> ${course.reviews_count}</span></p>
            </div>
            <div>
                <p class="old-price">(${course.price})</p>
                <p class="current-price">${course.discounted_price.replace(' руб', '')} <span class="currency">руб</span></p>
                <p class="monthly-price">от <span class="monthly-price">${course.monthly_payment.replace('от ', '').replace(' руб./месяц', '')}</span> руб/месяц</p>
            </div>
            <div class="time">  
                    <img src="./assets/images/clock.svg" width="17" height="17" alt="clock">
                    В любое время 
            </div>
            <div class="details">
                <p class="small"><img src="./assets/images/calendar.svg" width="12" height="12" alt="calendar"> ${course.level}</p>
                <p class="small"><img src="./assets/images/level.svg" width="12" height="12" alt="level"> ${course.duration}</p>
                <p class="small"><img src="./assets/images/suitcase.svg" width="12" height="12" alt="suitcase"> ${course.internship}</p>
                <p class="small"><img src="./assets/images/diploma.svg" width="12" height="12" alt="diploma"> ${course.diploma}</p>
            </div>
        </div>
        <div class="inner-wrapper">
            <button class="btn active">На сайт курса</button>
            <button class="btn">Подробнее</button>
            <a href="#course" class="compare"><img src="./assets/images/compare.svg" width="12" height="12" alt="compare">Добавить к сравнению</a>
        </div>
    `
    courseWrapper.appendChild(div)
})
