const data = {
    // "Программирование": [
    //     "Все курсы по программированию", "Python-разработка", "Web-разработка", "Мобильная разработка",
    //     "JavaScript-разработка", "Java-разработка", "Разработка игр", "Создание сайтов",
    //     "Системное администрирование", "QA-тестирование", "Android-разработка", "Управление разработкой и IT",
    //     "Frontend-разработка", "Разработка игр на Unity", "Разработка на C#", "PHP-разработка",
    //     "DevOps", "IOS-разработка", "Верстка на HTML/CSS", "Разработка на C++",
    //     "Разработка игр на Unreal Engine", "Разработка на Kotlin", "Информационная безопасность",
    //     "Golang-разработка", "Разработка на Swift", "1C-разработка", "VR/AR разработка", "Фреймворк Laravel"
    // ],
    "Маркетинг": ["Digital маркетинг", "Контекстная реклама", "SEO", "Email маркетинг"],
    "Дизайн": ["UX/UI", "Графический дизайн", "Motion дизайн"],
    "Аналитика": ["Data Science", "Бизнес-аналитика", "Power BI", "SQL"],
    "Финансы": ["Финансовая аналитика", "Бухучет", "Инвестиции"],
    "Управление": ["Проектный менеджмент", "HR", "Agile"],
    "Контент-маркетинг": ["Копирайтинг", "SMM", "Продюсирование"]
};

const categoryList = document.getElementById("categoryList");
const subcategoryList = document.getElementById("subcategoryList");

function renderCategories() {
    const select = document.createElement("select");
    select.classList.add("categories-select");

    Object.keys(data).forEach((category, index) => {
        const btn = document.createElement("button");
        btn.textContent = category;
        if (index === 0) btn.classList.add("active");

        btn.addEventListener("click", () => {
            document.querySelectorAll("#categoryList button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderSubcategories(data[category]);
            select.value = category;
        });

        categoryList.appendChild(btn);

        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });

    select.addEventListener("change", () => {
        document.querySelectorAll("#categoryList button").forEach(b => {
            b.classList.toggle("active", b.textContent === select.value);
        });
        renderSubcategories(data[select.value]);
    });

    categoryList.parentNode.insertBefore(select, categoryList.nextSibling);
}


function renderSubcategories(items) {
    subcategoryList.innerHTML = "";
    items.forEach(item => {
        const el = document.createElement("a");
        el.innerHTML = `${item} <span>&#8250;</span>`;
        subcategoryList.appendChild(el);
    });
}

renderCategories();
renderSubcategories(data[Object.keys(data)[0]]); 
