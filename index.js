
// tabs
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tab__btn').forEach(function (tabBtn) {
    tabBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab__content').forEach(function (tabContent) {
        tabContent.classList.remove('tab__content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab__content-active')
    })
  })
})

// wrapper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// burger
const menuBurger = document.querySelector('.header__burger');
const navItem = document.querySelectorAll('.header__menu-link');
const menuBody = document.querySelector('.header__menu')

if (menuBurger) {
  menuBurger.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    menuBurger.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })

  if (navItem.length > 0) {
    for (let item of navItem) {
      item.addEventListener("click", function () {
        document.body.classList.remove('_lock');
        menuBurger.classList.remove('_active');
        menuBody.classList.remove('_active');
      })
    }
  }
}

// accordeon

/*всё тоже самое, кроме...*/
let allElems = document.querySelectorAll('.accordion .accordion__elem');

allElems.forEach((elem) => {
  elem.addEventListener('click', function () {
    /*находим все активные элементы*/
    let descActive = document.querySelectorAll('.active');
    /*прогоняем через цикл и удаляем класс active*/
    descActive.forEach((elem) => {
      elem.classList.remove('active');
    })

    let parentElem = this.parentNode;

    let contentBlock = parentElem.querySelector('.accordion__text')

    if (contentBlock.classList.contains("active")) {
      contentBlock.classList.remove('active');
    }
    else {
      contentBlock.classList.add('active');
    }

  })
})



const searchBtn = document.querySelector('.header__search');
const searchForm = document.querySelector('.search');


if (searchBtn) {
    searchBtn.addEventListener("click", function(e) {
    searchForm.classList.toggle('open')
    })
}


