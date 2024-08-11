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


gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add('(min-width: 769px)', () => {
    const tl = gsap.timeline();

    // Анимация прокрутки по горизонтали
    tl.to('.service__container', {
        x: () => -(document.querySelector('.service__container').scrollWidth - window.innerWidth)
    });
    
    // Создаем ScrollTrigger для основной анимации
    ScrollTrigger.create({
        animation: tl,
        trigger: '.service__buttons',
        start: 'top top',
        end: '+=100%',
        scrub: 0.5,
        ease: 'none',
        pin: '.service',
        invalidateOnRefresh: true,
    });

    // Анимация для увеличения ширины элемента .line span
    gsap.to('.line span', {
        width: '100%', // Увеличение ширины до 100%
        scrollTrigger: {
            trigger: '.service__buttons',
            start: 'top top',
            end: '+=100%',
            scrub: 0.5, // Связь с прокруткой
            ease: 'none',
            invalidateOnRefresh: true,
        }
    });
});


function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Удаляем класс 'active' у всех элементов с классами year1, year2, year3 и т.д.
            document.querySelectorAll('.year1, .year2, .year3, .year4, .year5, .year6').forEach(year => {
                year.classList.remove('active');
            });

            // Проверяем, какой элемент пересек границу, и добавляем соответствующий класс
            if (entry.target.classList.contains('item-year1')) {
                document.querySelector('.year1').classList.add('active');
            } else if (entry.target.classList.contains('item-year2')) {
                document.querySelector('.year2').classList.add('active');
            } else if (entry.target.classList.contains('item-year3')) {
                document.querySelector('.year3').classList.add('active');
            } else if (entry.target.classList.contains('item-year4')) {
                document.querySelector('.year4').classList.add('active');
            } else if (entry.target.classList.contains('item-year5')) {
                document.querySelector('.year5').classList.add('active');
            } else if (entry.target.classList.contains('item-year6')) {
                document.querySelector('.year6').classList.add('active');
            }
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
});

document.querySelectorAll('.item-year1, .item-year2, .item-year3, .item-year4, .item-year5, .item-year6')
    .forEach(item => {
        observer.observe(item);
    });