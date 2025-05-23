const courseData = [
    {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Веб разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц",
        "category": "Программирование"
    },
    {
        "school": "Netology",
        "price": "120 000 руб",
        "duration": "6 месяцев",
        "level": "Средний",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Python разработчик с нуля",
        "rating": 4.7,
        "discounted_price": "96 000 руб",
        "availability": "Запуск группы",
        "reviews_count": 120,
        "monthly_payment": "от 8 000 руб./месяц",
        "category": "Контент-маркетинг"
    },
    {
        "school": "GeekBrains",
        "price": "150 000 руб",
        "duration": "9 месяцев",
        "level": "Продвинутый",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Fullstack разработчик",
        "rating": 4.6,
        "discounted_price": "135 000 руб",
        "availability": "В любое время",
        "reviews_count": 95,
        "monthly_payment": "от 15 000 руб./месяц",
        "category": "Управление"
    },
    {
        "school": "SkillFactory",
        "price": "90 000 руб",
        "duration": "4 месяца",
        "level": "Начальный",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Аналитик данных",
        "rating": 4.4,
        "discounted_price": "72 000 руб",
        "availability": "В любое время",
        "reviews_count": 70,
        "monthly_payment": "от 6 000 руб./месяц",
        "category": "Маркетинг"
    },
    {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Веб разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц",
        "category": "Программирование"
    },
    {
        "school": "Contented",
        "price": "110 000 руб",
        "duration": "5 месяцев",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Графический дизайнер",
        "rating": 4.8,
        "discounted_price": "88 000 руб",
        "availability": "Запуск группы",
        "reviews_count": 150,
        "monthly_payment": "от 7 333 руб./месяц",
        "category": "Аналитика"
    },
    {
        "school": "Yandex",
        "price": "180 000 руб",
        "duration": "10 месяцев",
        "level": "Средний",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Специалист по Data Science",
        "rating": 4.9,
        "discounted_price": "162 000 руб",
        "availability": "В любое время",
        "reviews_count": 200,
        "monthly_payment": "от 18 000 руб./месяц",
        "category": "Дизайн"
    },
    {
        "school": "Netology",
        "price": "75 000 руб",
        "duration": "2 месяца",
        "level": "Начальный",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Основы интернет маркетинга",
        "rating": 4.3,
        "discounted_price": "60 000 руб",
        "availability": "В любое время",
        "reviews_count": 80,
        "monthly_payment": "от 5 000 руб./месяц",
        "category": "Дизайн"
    },
    {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Веб разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц",
        "category": "Программирование"
    },
    {
        "school": "Netology",
        "price": "120 000 руб",
        "duration": "6 месяцев",
        "level": "Средний",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Python разработчик с нуля",
        "rating": 4.7,
        "discounted_price": "96 000 руб",
        "availability": "Запуск группы",
        "reviews_count": 120,
        "monthly_payment": "от 8 000 руб./месяц",
        "category": "Контент-маркетинг"
    },
    {
        "school": "GeekBrains",
        "price": "150 000 руб",
        "duration": "9 месяцев",
        "level": "Продвинутый",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Fullstack разработчик",
        "rating": 4.6,
        "discounted_price": "135 000 руб",
        "availability": "В любое время",
        "reviews_count": 95,
        "monthly_payment": "от 15 000 руб./месяц",
        "category": "Управление"
    },
    {
        "school": "SkillFactory",
        "price": "90 000 руб",
        "duration": "4 месяца",
        "level": "Начальный",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Аналитик данных",
        "rating": 4.4,
        "discounted_price": "72 000 руб",
        "availability": "В любое время",
        "reviews_count": 70,
        "monthly_payment": "от 6 000 руб./месяц",
        "category": "Маркетинг"
    },
    {
        "school": "Contented",
        "price": "110 000 руб",
        "duration": "5 месяцев",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Графический дизайнер",
        "rating": 4.8,
        "discounted_price": "88 000 руб",
        "availability": "Запуск группы",
        "reviews_count": 150,
        "monthly_payment": "от 7 333 руб./месяц",
        "category": "Аналитика"
    },
    {
        "school": "Yandex",
        "price": "180 000 руб",
        "duration": "10 месяцев",
        "level": "Средний",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Специалист по Data Science",
        "rating": 4.9,
        "discounted_price": "162 000 руб",
        "availability": "В любое время",
        "reviews_count": 200,
        "monthly_payment": "от 18 000 руб./месяц",
        "category": "Дизайн"
    },
    {
        "school": "Netology",
        "price": "75 000 руб",
        "duration": "2 месяца",
        "level": "Начальный",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Основы интернет маркетинга",
        "rating": 4.3,
        "discounted_price": "60 000 руб",
        "availability": "В любое время",
        "reviews_count": 80,
        "monthly_payment": "от 5 000 руб./месяц",
        "category": "Дизайн"
    }
];



const filterbar = document.querySelector('.filterbar');
const courseCategories = document.querySelector('.course-categories');
const courseWrapper = document.querySelector('.course-wrapper');
let currentPage = 1;
const itemsPerPage = 8;

function renderCourses(coursesToRender) {
    courseWrapper.innerHTML = '';
    const info = document.querySelector('.total-courses-info');
    info.innerHTML = coursesToRender.length
        ? `<h3>Найдено ${coursesToRender.length} курсов</h3>`
        : '<h3>Нет курсов в данной категории.</h3>';
    if (!coursesToRender.length) return;

    const headers = [
        "Курс", "Школа", "Цена", "Длительность", "Особенности", "Ссылка на курс"
    ];
    const courseHeaderWrapper = document.createElement('div');
    courseHeaderWrapper.className = 'course-header-wrapper';
    headers.forEach(header => {
        const btn = document.createElement('button');
        btn.className = 'course-col';
        btn.innerHTML = `${header}<span class="sort-arrow"><span class="up"></span><span class="down"></span></span>`;
        courseHeaderWrapper.appendChild(btn);
    });
    courseWrapper.insertAdjacentElement('afterbegin', courseHeaderWrapper);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedCourses = coursesToRender.slice(start, end);

    paginatedCourses.forEach(course => {
        const div = document.createElement('div');
        div.className = 'course-item';
        div.innerHTML = `
            <h4 class="jobtitle">${course.profession}</h4>
            <div class="square-wrapper">
                <div>
                    <p class="inner-title">${course.school}</p>
                    <p class="rating small">⭐ <span>${course.rating}</span></p>
                    <p class="review">Отзывы о школе<span> ${course.reviews_count}</span></p>
                </div>
                <div>
                    <p class="old-price">(${course.price})</p>
                    <p class="current-price">${course.discounted_price.replace(' руб', '')} <span class="currency">руб</span></p>
                    <p class="monthly-price">от <span class="">${course.monthly_payment.replace('от ', '').replace(' руб./месяц', '')}</span> руб/месяц</p>
                </div>
                <div class="time">
                        <img src="./assets/images/clock.svg" width="17" height="17" alt="clock">
                        ${course.availability}
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
        `;
        courseWrapper.appendChild(div);
    });

    const paginationWrapper = document.createElement('div');
    paginationWrapper.className = 'pagination-wrapper';
    const totalPages = Math.ceil(coursesToRender.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn';
        if (i === currentPage) pageBtn.classList.add('active');
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderCourses(coursesToRender);
        });
        paginationWrapper.appendChild(pageBtn);
    }

    courseWrapper.appendChild(paginationWrapper);
}

function renderCategories() {
    const categoriesList = document.createElement('ul');
    const uniqueCategories = ["Все курсы", ...new Set(courseData.map(course => course.category))];

    uniqueCategories.forEach((cat, i) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = cat;

        if (i === 0) btn.classList.add('active');

        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.course-categories button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterCourses(e.target.textContent);
        });

        li.appendChild(btn);
        categoriesList.appendChild(li);
    });

    courseCategories.appendChild(categoriesList);
}

function renderSchools() {
    const container = document.querySelector('.schools-filter')
    container.innerHTML = ''
    const schools = [...new Set(courseData.map(c => c.school))]
    if (!schools.length) return
    const header = document.createElement('h3')
    header.className = 'filter-header'
    header.textContent = 'Школы'
    container.appendChild(header)

    const ul = document.createElement('ul')
    schools.forEach(school => {
        const li = document.createElement('li')
        const label = document.createElement('label')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add("checkbox-reversed")
        const span = document.createElement('span')
        span.textContent = school
        label.appendChild(checkbox)
        label.appendChild(span)
        li.appendChild(label)
        ul.appendChild(li)
    })
    container.appendChild(ul)
}

function renderLevels() {
    const container = document.querySelector('.level-filter')
    container.innerHTML = ''
    const levels = [...new Set(courseData.map(c => c.level))]
    if (!levels.length) return
    const header = document.createElement('h3')
    header.className = 'filter-header'
    header.textContent = 'Уровень сложности'
    container.appendChild(header)

    const ul = document.createElement('ul')
    levels.forEach(school => {
        const li = document.createElement('li')
        const label = document.createElement('label')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add("checkbox-reversed")
        const span = document.createElement('span')
        span.textContent = school
        label.appendChild(checkbox)
        label.appendChild(span)
        li.appendChild(label)
        ul.appendChild(li)
    })
    container.appendChild(ul)
}

function setupPriceSliders() {
    const minPriceSlider = document.getElementById('pricemin');
    const maxPriceSlider = document.getElementById('pricemax');
    const minPriceInput = document.getElementById('priceminVal');
    const maxPriceInput = document.getElementById('pricemaxVal');
    const stepPrice = 1000;

    function roundPriceStep(val) {
        return Math.round(val / stepPrice) * stepPrice;
    }

    function syncPriceMin(val) {
        val = roundPriceStep(Math.min(parseInt(val), parseInt(maxPriceSlider.value) - stepPrice));
        minPriceSlider.value = val;
        minPriceInput.value = val;
    }

    function syncPriceMax(val) {
        val = roundPriceStep(Math.max(parseInt(val), parseInt(minPriceSlider.value) + stepPrice));
        maxPriceSlider.value = val;
        maxPriceInput.value = val;
    }

    minPriceSlider.oninput = e => syncPriceMin(e.target.value);
    maxPriceSlider.oninput = e => syncPriceMax(e.target.value);
    minPriceInput.oninput = e => syncPriceMin(e.target.value);
    maxPriceInput.oninput = e => syncPriceMax(e.target.value);

    syncPriceMin(minPriceSlider.value);
    syncPriceMax(maxPriceSlider.value);
}

function setupDurationSliders() {
    const minDurationSlider = document.getElementById('durationMin');
    const maxDurationSlider = document.getElementById('durationMax');
    const minDurationInput = document.getElementById('durationMinVal');
    const maxDurationInput = document.getElementById('durationMaxVal');
    const stepDuration = 1;

    function roundDurationStep(val) {
        return Math.round(val / stepDuration) * stepDuration;
    }

    function syncDurationMin(val) {
        val = roundDurationStep(Math.min(parseInt(val), parseInt(maxDurationSlider.value) - stepDuration));
        minDurationSlider.value = val;
        minDurationInput.value = val;
    }

    function syncDurationMax(val) {
        val = roundDurationStep(Math.max(parseInt(val), parseInt(minDurationSlider.value) + stepDuration));
        maxDurationSlider.value = val;
        maxDurationInput.value = val;
    }

    minDurationSlider.oninput = e => syncDurationMin(e.target.value);
    maxDurationSlider.oninput = e => syncDurationMax(e.target.value);
    minDurationInput.oninput = e => syncDurationMin(e.target.value);
    maxDurationInput.oninput = e => syncDurationMax(e.target.value);

    syncDurationMin(minDurationSlider.value);
    syncDurationMax(maxDurationSlider.value);
}
function filterCourses(category) {
    const minPrice = parseInt(document.getElementById('priceminVal').value.replace(/\s/g, '')) || 0;
    const maxPrice = parseInt(document.getElementById('pricemaxVal').value.replace(/\s/g, '')) || Infinity;
    const minDuration = parseInt(document.getElementById('durationMinVal').value) || 0;
    const maxDuration = parseInt(document.getElementById('durationMaxVal').value) || Infinity;

    const paymentFilter = document.querySelector('input[name="payment"]:checked');
    const payment = paymentFilter ? paymentFilter.value : null;

    const checkedLevels = [...document.querySelectorAll('.level-filter input[type="checkbox"]:checked')].map(i => i.nextElementSibling.textContent);
    const checkedSchools = [...document.querySelectorAll('.schools-filter input[type="checkbox"]:checked')].map(i => i.nextElementSibling.textContent);

    const internshipChecked = document.querySelector('input[type="checkbox"][data-filter="internship"]')?.checked;
    const diplomaChecked = document.querySelector('input[type="checkbox"][data-filter="diploma"]')?.checked;

    let filteredData = category === "Все курсы"
        ? courseData
        : courseData.filter(course => course.category === category);

    filteredData = filteredData.filter(course => {
        const priceNum = parseInt(course.discounted_price.replace(/\D/g, ''));
        if (priceNum < minPrice || priceNum > maxPrice) return false;

        if (payment === "paid" && priceNum === 0) return false;
        if (payment === "free" && priceNum > 0) return false;

        if (checkedLevels.length && !checkedLevels.includes(course.level)) return false;
        if (checkedSchools.length && !checkedSchools.includes(course.school)) return false;

        if (internshipChecked && course.internship.toLowerCase() !== 'стажировка') return false;
        if (diplomaChecked && course.diploma.toLowerCase() !== 'диплом') return false;

        const durationMonths = parseInt(course.duration);
        if (isNaN(durationMonths) || durationMonths < minDuration || durationMonths > maxDuration) return false;

        return true;
    });

    filteredData.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''));
        const priceB = parseInt(b.price.replace(/\D/g, ''));
        return priceA - priceB;
    });
    currentPage = 1;

    renderCourses(filteredData);
}





document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderCourses(courseData);
    setupPriceSliders();
    renderSchools();
    renderLevels()
    setupDurationSliders();
    filterCourses("Все курсы");
});

filterbar.addEventListener('change', () => {
    const activeBtn = document.querySelector('.course-categories button.active');
    const category = activeBtn ? activeBtn.textContent : "Все курсы";
    filterCourses(category);
});
