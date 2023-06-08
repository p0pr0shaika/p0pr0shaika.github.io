// Modal
// Ожидаем загрузки страницы
window.addEventListener('load', function() {
    // Получаем модальное окно
    var modal = document.querySelector('.modal');
        
    // Отображаем модальное окно
    modal.style.display = 'flex';
});

// Функция для закрытия модального окна
function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
}
  // Burger menu
function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
    var burgerLines = document.querySelectorAll(".burger-line");
burgerLines.forEach(function(line) {
    line.classList.toggle("active");
});

}

function closeNav() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.remove("active");
}


  // Tabs
function openTab(event, tabId) {
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    tabButtons = document.getElementsByClassName('tab-buttons')[0].getElementsByTagName('button');
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

  // Filter
function filterItems(category) {
    var i, items;
    items = document.getElementsByClassName('item');
    if (category === 'all') {
        for (i = 0; i < items.length; i++) {
        items[i].style.display = 'block';
        }
    } else {
        for (i = 0; i < items.length; i++) {
        if (items[i].classList.contains(category)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
        }
    }
}

// Slider
document.addEventListener('DOMContentLoaded', function() {
    // Ваш код для слайдера
    // Получаем все слайды и текущий индекс
const slides = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;

// Функция для переключения на следующий слайд
function nextSlide() {
    // Скрываем текущий слайд
    slides[currentIndex].style.display = 'none';

    // Увеличиваем индекс на 1
    currentIndex = (currentIndex + 1) % slides.length;

    // Отображаем следующий слайд
    slides[currentIndex].style.display = 'block';
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
    // Скрываем текущий слайд
    slides[currentIndex].style.display = 'none';

    // Уменьшаем индекс на 1
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    // Отображаем предыдущий слайд
    slides[currentIndex].style.display = 'block';
}

// Запускаем слайдер
slides[currentIndex].style.display = 'block';
// Обработчики событий для кнопок следующего и предыдущего слайда
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);
});



  // Accordion
function toggleAccordion(accordion) {
    accordion.classList.toggle('active');
    var content = accordion.nextElementSibling;
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}
