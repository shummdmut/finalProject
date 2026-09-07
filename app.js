const recipes = [
    {
        id: 1,
        title: "Класична паста Карбонара",
        category: "lunch",
        image: "img/1.jpg",
        time: "25 хв",
        difficulty: "Легко",
        calories: "650 ккал",
        baseServings: 2,
        ingredients: [
            { amount: 200, unit: "г", name: "Спагеті" },
            { amount: 150, unit: "г", name: "Гуанчале або бекон" },
            { amount: 3, unit: "шт", name: "Жовтки" },
            { amount: 50, unit: "г", name: "Сир Пекоріно Романо" },
            { amount: 0, unit: "", name: "Чорний перець — за смаком" }
        ],
        steps: ["Відваріть пасту в підсоленій воді до стану аль денте.", "Обсмажте нарізаний бекон на сухому маслі до хрусткої скоринки.", "Збийте жовтки з тертим сиром та меленим перцем.", "Змішайте гарячу пасту з беконом, зніміть з вогню та швидко вмішайте яєчную суміш.", "Додайте трохи води від пасти для кремової текстури."]
    },
    {
        id: 2,
        title: "Панкейки з чорницею та медом",
        category: "breakfast",
        image: "img/2.jpg",
        time: "20 хв",
        difficulty: "Легко",
        calories: "380 ккал",
        baseServings: 2,
        ingredients: [
            { amount: 200, unit: "г", name: "Борошно" },
            { amount: 200, unit: "мл", name: "Молоко" },
            { amount: 1, unit: "шт", name: "Яйце" },
            { amount: 2, unit: "ст.л.", name: "Цукор" },
            { amount: 1, unit: "ч.л.", name: "Розпушувач" },
            { amount: 50, unit: "г", name: "Чорниця" }
        ],
        steps: ["Змішайте сухі інгредієнти у великій мисці.", "Влийте молоко, додайте яйце та ретельно перемішайте вінчиком.", "Додайте свіжу чорницю у готове тісто.", "Випікайте на розігрітій пательні без олії до появи бульбашок, потім переверніть.", "Подавайте гарячими з медом або сиропом."]
    },
    {
        id: 3,
        title: "Лосось на грилі з аспарагусом",
        category: "dinner",
        image: "img/3.jpg",
        time: "30 хв",
        difficulty: "Середня",
        calories: "520 ккал",
        baseServings: 1,
        ingredients: [
            { amount: 200, unit: "г", name: "Філе лосося" },
            { amount: 100, unit: "г", name: "Аспарагус (спаржа)" },
            { amount: 0.5, unit: "шт", name: "Лимон" },
            { amount: 1, unit: "ст.л.", name: "Оливкова олія" },
            { amount: 0, unit: "", name: "Сіль та спеції — за смаком" }
        ],
        steps: ["Промийте філе лосося та обсушіть його паперовим рушником.", "Змастіть рибу оливковою олією, сіллю та спеціями.", "Обсмажуйте лосось на грилі по 4-5 хвилин з кожного боку.", "Поруч обсмажте аспарагус протягом 5 хвилин.", "Подавайте з дольками лимона."]
    },
    {
        id: 4,
        title: "Шоколадний фондан",
        category: "dessert",
        image: "img/4.jpg",
        time: "15 хв",
        difficulty: "Важко",
        calories: "450 ккал",
        baseServings: 2,
        ingredients: [
            { amount: 100, unit: "г", name: "Чорний шоколад" },
            { amount: 60, unit: "г", name: "Вершкове масло" },
            { amount: 2, unit: "шт", name: "Яйця" },
            { amount: 40, unit: "г", name: "Цукор" },
            { amount: 30, unit: "г", name: "Борошно" }
        ],
        steps: ["Розтопіть шоколад разом з вершковим маслом на водяній бані.", "Збийте яйця з цукром до пивної піни.", "З'єднайте шоколадну масу з яйцями, поступово додаючи борошно.", "Розлийте у змащені форми та випікайте 7-8 хвилин при 200 градусах.", "Ріжте обережно, щоб середина залишилась рідкою."]
    },
    {
        id: 5,
        title: "Тости з авокадо та яйцем пашот",
        category: "breakfast",
        image: "img/5.jpg",
        time: "15 хв",
        difficulty: "Легко",
        calories: "320 ккал",
        baseServings: 1,
        ingredients: [
            { amount: 1, unit: "шт", name: "Стигле авокадо" },
            { amount: 1, unit: "шт", name: "Яйце" },
            { amount: 2, unit: "скибочки", name: "Цільнозерновий хліб" },
            { amount: 1, unit: "ч.л.", name: "Лимонний сік" },
            { amount: 0, unit: "", name: "Сіль, перець та насіння кунжуту" }
        ],
        steps: ["Підсушіть скибочки хліба на сухій сковороді або в тостері.", "Розімніть м'якоть авокадо виделкою, додавши лимонний сік, сіль та перець.", "Зваріть яйце пашот у слабо киплячій воді з додаванням оцту протягом 3 хвилин.", "Викладіть авокадо-масу на тости, зверху обережно покладіть яйце пашот.", "Прикрасьте насіння кунжуту."]
    },
    {
        id: 6,
        title: "Крем-суп із печериць",
        category: "lunch",
        image: "img/6.jpg",
        time: "35 хв",
        difficulty: "Середня",
        calories: "280 ккал",
        baseServings: 3,
        ingredients: [
            { amount: 400, unit: "г", name: "Печериці" },
            { amount: 200, unit: "мл", name: "Вершки 20%" },
            { amount: 3, unit: "шт", name: "Картопля" },
            { amount: 1, unit: "шт", name: "Цибуля ріпчаста" },
            { amount: 20, unit: "г", name: "Вершкове масло" }
        ],
        steps: ["Наріжте цибулю та гриби, обсмажте їх на вершковому маслі до золотої скоринки.", "Відваріть нарізану картоплю у невеликій кількості води до готовності.", "Додайте обсмажені гриби з цибулею до картоплі та збийте все блендером до однорідності.", "Влийте теплі вершки, додайте сіль, перець за смаком і прогрійте суп ще 2-3 хвилини.", "Подавайте з сухариками."]
    },
    {
        id: 7,
        title: "Куряче філе в кисло-солодкому соусі",
        category: "dinner",
        image: "img/7.jpg",
        time: "25 хв",
        difficulty: "Середня",
        calories: "410 ккал",
        baseServings: 2,
        ingredients: [
            { amount: 400, unit: "г", name: "Куряче філе" },
            { amount: 1, unit: "шт", name: "Болгарський перець" },
            { amount: 100, unit: "г", name: "Консервовані ананаси" },
            { amount: 2, unit: "ст.л.", name: "Соєвий соус" },
            { amount: 1, unit: "ст.л.", name: "Томатна паста" }
        ],
        steps: ["Наріжте куряче філе кубиками та обсмажте на великому вогні протягом 7 хвилин.", "Додайте нарізаний соломкою болгарський перець та шматочки ананасів.", "Змішайте соєвий соус, томатну пасту та трохи сиропу від ананасів.", "Влийте соус у сковороду до курки та овочів, тушкуйте на середньому вогні ще 10 хвилин.", "Подавайте гарячим, ідеально з вареним рисом."]
    },
    {
        id: 8,
        title: "Ягідний чізкейк без випічки",
        category: "dessert",
        image: "img/8.jpg",
        time: "40 хв",
        difficulty: "Середня",
        calories: "340 ккал",
        baseServings: 4,
        ingredients: [
            { amount: 200, unit: "г", name: "Пісочне печиво" },
            { amount: 80, unit: "г", name: "Вершкове масло" },
            { amount: 400, unit: "г", name: "Кисломолочний сир або крем-сир" },
            { amount: 150, unit: "г", name: "Свіжі або заморожені ягоди" },
            { amount: 15, unit: "г", name: "Желатин" }
        ],
        steps: ["Подрібніть печиво в крихту, змішайте з розтопленим вершковим маслом і утрамбуйте на дно форми.", "Поставте форму в холодильник на 15 хвилин.", "Замочіть желатин за інструкцією. Збийте крем-сир із цукровою пудрою, потім обережно введіть розчинений желатин.", "Викладіть сирну масу на основу з печива та поверніть у холодильник до застигання.", "Прикрасьте зверху ягодами перед подачею."]
    },
    {
        id: 9,
        title: "Грецький салат",
        category: "lunch",
        image: "img/9.jpg",
        time: "10 хв",
        difficulty: "Легко",
        calories: "190 ккал",
        baseServings: 2,
        ingredients: [
            { amount: 2, unit: "шт", name: "Огірки свіжі" },
            { amount: 2, unit: "шт", name: "Стиглі томати" },
            { amount: 0.5, unit: "шт", name: "Синя цибуля" },
            { amount: 100, unit: "г", name: "Сир Фета" },
            { amount: 50, unit: "г", name: "Оливки Каламата" },
            { amount: 2, unit: "ст.л.", name: "Оливкова олія Extra Virgin" }
        ],
        steps: ["Наріжте огірки та томати великими кубиками.", "Синю цибулю наріжте тонкими півкільцями.", "Викладіть овочі у глибоку салатницю, додайте оливки та обережно перемішайте.", "Зверху викладіть цілий пласт сиру Фета або наріжте його великими кубиками.", "Полийте оливковою олією та притрусіть сушеним орегано за смаком."]
    }

];

let favorites = JSON.parse(localStorage.getItem("recipe_favs")) || [];
let reviews = JSON.parse(localStorage.getItem("recipe_reviews")) || {};
let showFavoritesOnly = false;
let currentServings = 2;

const homePage = document.getElementById("home-page");
const detailPage = document.getElementById("detail-page");
const recipesContainer = document.getElementById("recipes-container");
const recipeDetailContainer = document.getElementById("recipe-detail-container");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const navHome = document.getElementById("nav-home");
const navFavorites = document.getElementById("nav-favorites");
const logoBtn = document.getElementById("logo-btn");
const backToHome = document.getElementById("back-to-home");
const favCount = document.getElementById("fav-count");

function init() {
    renderRecipes(recipes);
    updateFavBadge();
    setupEventListeners();
}

function renderRecipes(recipesToRender) {
    if (!recipesContainer) return;
    recipesContainer.innerHTML = "";
    
    if (recipesToRender.length === 0) {
        recipesContainer.innerHTML = "<p class='no-results'>Рецептів не знайдено.</p>";
        return;
    }

    recipesToRender.forEach(recipe => {
        const isFav = favorites.includes(recipe.id);
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
            <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${recipe.id}">❤</button>
            <div class="recipe-info">
                <span class="recipe-tag">${recipe.category}</span>
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱ ${recipe.time}</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
            </div>
        `;

        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("fav-btn")) {
                e.stopPropagation();
                toggleFavorite(recipe.id, e.target);
            } else {
                openRecipeDetail(recipe.id);
            }
        });

        recipesContainer.appendChild(card);
    });
}

function filterRecipes() {
    const query = searchInput ? searchInput.value.toLowerCase() : "";
    const category = categoryFilter ? categoryFilter.value : "all";

    let filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(query) || 
                              recipe.ingredients.some(ing => ing.name.toLowerCase().includes(query));
        const matchesCategory = category === "all" || recipe.category === category;
        const matchesFav = !showFavoritesOnly || favorites.includes(recipe.id);

        return matchesSearch && matchesCategory && matchesFav;
    });

    renderRecipes(filtered);
}

function toggleFavorite(id, button) {
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
        button.classList.add("active");
    } else {
        favorites.splice(index, 1);
        button.classList.remove("active");
        if (showFavoritesOnly) {
            filterRecipes();
        }
    }
    localStorage.setItem("recipe_favs", JSON.stringify(favorites));
    updateFavBadge();
}

function updateFavBadge() {
    if (favCount) favCount.textContent = favorites.length;
}

function openRecipeDetail(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe || !recipeDetailContainer) return;

    currentServings = recipe.baseServings;

    if (homePage) homePage.classList.remove("active");
    if (detailPage) detailPage.classList.add("active");
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const recipeReviews = reviews[id] || [];

    recipeDetailContainer.innerHTML = `
        <div class="detail-header">
            <img src="${recipe.image}" alt="${recipe.title}" class="detail-img">
            <div>
                <h2 class="detail-title">${recipe.title}</h2>
                <div class="detail-meta-box">
                    <div class="meta-item"><span>Час</span><strong>${recipe.time}</strong></div>
                    <div class="meta-item"><span>Складність</span><strong>${recipe.difficulty}</strong></div>
                    <div class="meta-item"><span>Калорії</span><strong>${recipe.calories}</strong></div>
                </div>
                <div class="servings-control">
                    <span>Порцій:</span>
                    <button class="servings-btn" id="decrease-servings">-</button>
                    <span id="servings-count">${currentServings}</span>
                    <button class="servings-btn" id="increase-servings">+</button>
                </div>
            </div>
        </div>

        <div class="ingredients-section">
            <h3 class="section-title">Інгредієнти</h3>
            <ul class="ingredients-list" id="ingredients-list-container">
                ${renderIngredientsList(recipe)}
            </ul>
        </div>

        <div class="steps-section">
            <h3 class="section-title">Кроки приготування</h3>
            <ol class="steps-list">
                ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
            </ol>
        </div>

        <div class="reviews-section">
            <h3 class="section-title">Відгуки кулінарів</h3>
            <div class="reviews-list" id="reviews-list-container">
                ${recipeReviews.length === 0 ? "<p>Відгуків ще немає. Будьте першим!</p>" : 
                    recipeReviews.map((rev, index) => `
                        <div class="review-item">
                            <div class="review-user">${rev.name}</div>
                            <div class="review-text">${rev.text}</div>
                            <button class="delete-review-btn" data-index="${index}">❌</button>
                        </div>
                    `).join("")
                }
            </div>

            <form class="review-form" id="review-form">
                <input type="text" id="review-name" placeholder="Ваше ім'я" required>
                <textarea id="review-text" rows="4" placeholder="Ваш відгук..." required></textarea>
                <button type="submit">Надіслати відгук</button>
            </form>
        </div>
    `;

    const decBtn = document.getElementById("decrease-servings");
    const incBtn = document.getElementById("increase-servings");
    const rForm = document.getElementById("review-form");
    const reviewsListContainer = document.getElementById("reviews-list-container");

    if (decBtn) decBtn.addEventListener("click", () => updateServings(recipe, -1));
    if (incBtn) incBtn.addEventListener("click", () => updateServings(recipe, 1));

    if (rForm) {
        rForm.addEventListener("submit", (e) => {
            e.preventDefault();
            addReview(id);
        });
    }

    if (reviewsListContainer) {
        reviewsListContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-review-btn")) {
                const reviewIndex = parseInt(e.target.getAttribute("data-index"));
                deleteReview(id, reviewIndex);
            }
        });
    }
}

function addReview(recipeId) {
    const nameInput = document.getElementById("review-name");
    const textInput = document.getElementById("review-text");
    if (!nameInput || !textInput) return;

    const newReview = {
        name: nameInput.value,
        text: textInput.value
    };

    if (!reviews[recipeId]) {
        reviews[recipeId] = [];
    }

    reviews[recipeId].push(newReview);
    localStorage.setItem("recipe_reviews", JSON.stringify(reviews));

    nameInput.value = "";
    textInput.value = "";

    openRecipeDetail(recipeId);
}

function deleteReview(recipeId, reviewIndex) {
    if (reviews[recipeId]) {
        reviews[recipeId].splice(reviewIndex, 1);
        localStorage.setItem("recipe_reviews", JSON.stringify(reviews));
        openRecipeDetail(recipeId);
    }
}


function renderIngredientsList(recipe) {
    return recipe.ingredients.map(ing => {
        if (ing.amount === 0) {
            return `<li>${ing.name}</li>`;
        }
        const calculatedAmount = ((ing.amount / recipe.baseServings) * currentServings);
        const formattedAmount = Number(calculatedAmount.toFixed(1));
        return `<li>${formattedAmount}${ing.unit} — ${ing.name}</li>`;
    }).join("");
}

function updateServings(recipe, change) {
    const newServings = currentServings + change;
    if (newServings < 1) return;
    
    currentServings = newServings;
    const sCount = document.getElementById("servings-count");
    const ingContainer = document.getElementById("ingredients-list-container");
    
    if (sCount) sCount.textContent = currentServings;
    if (ingContainer) ingContainer.innerHTML = renderIngredientsList(recipe);
}

function addReview(recipeId) {
    const nameInput = document.getElementById("review-name");
    const textInput = document.getElementById("review-text");
    if (!nameInput || !textInput) return;
    
    const newReview = {
        name: nameInput.value,
        text: textInput.value
    };
    
    if (!reviews[recipeId]) {
        reviews[recipeId] = [];
    }
    
    reviews[recipeId].push(newReview);
    localStorage.setItem("recipe_reviews", JSON.stringify(reviews));
    
    nameInput.value = "";
    textInput.value = "";
    
    openRecipeDetail(recipeId);
}

function setupEventListeners() {
    if (searchInput) searchInput.addEventListener("input", filterRecipes);
    if (categoryFilter) categoryFilter.addEventListener("change", filterRecipes);
    
    if (navHome) {
        navHome.addEventListener("click", () => {
            showFavoritesOnly = false;
            navHome.classList.add("active");
            if (navFavorites) navFavorites.classList.remove("active");
            if (detailPage) detailPage.classList.remove("active");
            if (homePage) homePage.classList.add("active");
            filterRecipes();
        });
    }
    
    if (navFavorites) {
        navFavorites.addEventListener("click", () => {
            showFavoritesOnly = true;
            if (navHome) navHome.classList.remove("active");
            navFavorites.classList.add("active");
            if (detailPage) detailPage.classList.remove("active");
            if (homePage) homePage.classList.add("active");
            filterRecipes();
        });
    }
    
    if (logoBtn) {
        logoBtn.addEventListener("click", () => {
            if (navHome) navHome.click();
        });
    }
    
    if (backToHome) {
        backToHome.addEventListener("click", () => {
            if (detailPage) detailPage.classList.remove("active");
            if (homePage) homePage.classList.add("active");
        });
    }
}

init();
