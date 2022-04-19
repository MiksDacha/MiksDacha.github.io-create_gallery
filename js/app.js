const sliderMain = new Swiper('.slider_main', {
   freeMode: true,
   centeredSlides: true, // центральный слайд по центру
   mousewheel: true, // прокрутка на скролл мыши
   parallax: true,
   breakpoints: {
      0: {
         slidesPerView: 2.5, // отображение кол-ва слайдов
         spaceBetween: 20, // расстояние м\у слайдами
      },
      680: {
         slidesPerView: 3.5, // отображение кол-ва слайдов
         spaceBetween: 60,
      }
   } // определение различного поеведния слайдов на различных экранах 
})

const sliderBg = new Swiper('.slider_bg', {
   centeredSlides: true,
   parallax: true,
   spaceBetween: 60,
   slidesPerView: 3.5,
})

sliderMain.controller.control = sliderBg // связывание 2х слайдеров//

document.querySelectorAll('.slider__item').forEach(item => {
   item.addEventListener('click', event => {
      item.classList.toggle('opened')
   })
})

/*Тригер slideChange*/
let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
   sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')

})


