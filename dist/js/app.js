// new fullpage('#fullPage', {
//     autoScrolling: true,
//     navigation: true,
//     anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
//     slidesNavigation: true,
//     pageFlip: true,

//     afterLoad: function(origin, destination, direction) {
//         // Запуск видео на section1
//         if (destination.anchor === 'section1') {
//             var video = document.querySelector('.main-video');
//             if (video) {
//                 video.play();
//             }
//         }

//         // Добавление классов "view" элементам с классом "projects__item" на section4
//         if (destination.anchor === 'section4') {
//             var projectItems = document.querySelectorAll('.projects__item');
//             projectItems.forEach(function(item) {
//                 item.classList.add('view');
//             });
//         }
//     }
// });


var swiper = new Swiper('.Slider', {
    autoplay: false,
    speed: 2500,
    loop: true,
    parallax: true,

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    on: {
        slideChange: function() {
            var currentIndex = this.realIndex + 1; // Получаем индекс текущего слайда (начинается с 0, поэтому добавляем 1)
            document.querySelector('.slider-num span').textContent = currentIndex;
        }
    }
});


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.projects__item').forEach(item => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 90%', // когда элемент появится на 80% высоты окна
      toggleActions: 'play none none none', // запускает анимацию при попадании в область видимости
    }
  });
});

// Инициализация начального номера слайда при загрузке
document.querySelector('.slider-num span').textContent = 1;


var swiper = new Swiper('.custom-slider-wrapper', {
    autoplay: false,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
        prevEl: '.retro__navigation-prev',
        nextEl: '.retro__navigation-next',
    },
    on: {
        slideChange: function() {
            var currentIndex = this.realIndex + 1; // Получаем индекс текущего слайда (начинается с 0, поэтому добавляем 1)
            document.querySelector('.slider-number span').textContent = currentIndex;
        }
    }
});

// Инициализация начального номера слайда при загрузке
document.querySelector('.slider-number span').textContent = 1;
