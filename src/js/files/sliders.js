/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {

	if (document.querySelector('#branch-slider')) {
		new Swiper('#branch-slider', {
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 100,
			speed: 1200,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.branch__pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('#main-slider')) {
		// Создаем слайдер
		new Swiper('#main-slider', {
			modules: [Autoplay, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 100,
			speed: 1200,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.branch__arrow-prev',
				nextEl: '.branch__arrow-next',
			},
			on: {
				init: function (swiper) {
					const allSlides = document.querySelector('.fractions-branch__all');
					allSlides.textContent = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;
				},
				slideChange: function (swiper) {
					const currentSlide = document.querySelector('.fractions-branch__current');
					currentSlide.textContent = swiper.activeIndex < 10 ? `0${swiper.activeIndex + 1}` : swiper.activeIndex + 1;
				}
			}

		});
	}

	if (document.querySelector('.item-tabs-programs__slider_1')) {

		// breakpoint where swiper will be destroyed
		// and switches to a dual-column layout
		const breakpoint = window.matchMedia('(min-width:992px)');

		let width = window.innerWidth;
		if (width < 992) {
			document.querySelector('.item-tabs-programs__slider_1').style.width = `${width - 60}px`;
		}
		window.addEventListener('resize', () => {
			width = window.innerWidth;
			if (width < 992) {
				document.querySelector('.item-tabs-programs__slider_1').style.width = `${width - 60}px`;
			} else {
				document.querySelector('.item-tabs-programs__slider_1').style.width = `100%`;
			}
		})

		// keep track of swiper instances to destroy later
		let mySwiper;

		const breakpointChecker = function () {
			// if larger viewport and multi-row layout needed
			if (breakpoint.matches === true) {

				// clean up old instances and inline styles when available
				if (mySwiper !== undefined) mySwiper.destroy(true, true);

				// or/and do nothing
				return;

				// else if a small viewport and single column layout needed
			} else if (breakpoint.matches === false) {

				// fire small viewport version of swiper
				return enableSwiper();

			}

		};

		const enableSwiper = function () {

			mySwiper = new Swiper('.item-tabs-programs__slider_1', {
				modules: [Navigation],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 50,
				speed: 800,
				lazy: true,
				navigation: {
					prevEl: '.item-tabs-programs__button-prev_1',
					nextEl: '.item-tabs-programs__button-next_1',
				},
			});

		};

		// keep an eye on viewport size changes
		breakpoint.addListener(breakpointChecker);

		// kickstart
		breakpointChecker();
	}

	if (document.querySelector('.item-tabs-programs__slider_2')) {

		// breakpoint where swiper will be destroyed
		// and switches to a dual-column layout
		const breakpoint = window.matchMedia('(min-width:992px)');

		let width = window.innerWidth;
		if (width < 992) {
			document.querySelector('.item-tabs-programs__slider_2').style.width = `${width - 60}px`;
		}
		window.addEventListener('resize', () => {
			width = window.innerWidth;
			if (width < 992) {
				document.querySelector('.item-tabs-programs__slider_2').style.width = `${width - 60}px`;
			} else {
				document.querySelector('.item-tabs-programs__slider_2').style.width = `100%`;
			}
		})

		// keep track of swiper instances to destroy later
		let mySwiper;

		const breakpointChecker = function () {
			// if larger viewport and multi-row layout needed
			if (breakpoint.matches === true) {

				// clean up old instances and inline styles when available
				if (mySwiper !== undefined) mySwiper.destroy(true, true);

				// or/and do nothing
				return;

				// else if a small viewport and single column layout needed
			} else if (breakpoint.matches === false) {

				// fire small viewport version of swiper
				return enableSwiper();

			}

		};

		const enableSwiper = function () {

			mySwiper = new Swiper('.item-tabs-programs__slider_2', {
				modules: [Navigation],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 50,
				speed: 800,
				lazy: true,
				navigation: {
					prevEl: '.item-tabs-programs__button-prev_2',
					nextEl: '.item-tabs-programs__button-next_2',
				},
			});

		};

		// keep an eye on viewport size changes
		breakpoint.addListener(breakpointChecker);

		// kickstart
		breakpointChecker();
	}

	if (document.querySelector('.slider-top-gallery')) {
		new Swiper('.slider-top-gallery', {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,

			// Пагинация

			pagination: {
				el: '.slider-top-gallery__pagination',
				clickable: true,
			},
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-top-gallery__button-prev',
				nextEl: '.slider-top-gallery__button-next',
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1550: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		});
	}

	if (document.querySelector('.recomendations__slider')) {
		// Создаем слайдер
		new Swiper('.recomendations__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			autoHeight: true,
			speed: 800,
			lazy: true,
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.recomendations__button-prev',
				nextEl: '.recomendations__button-next',
			},

			// Брейкпоинты

			breakpoints: {
				1200: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},
		});
	}

	if (document.querySelector('#employees__slider-1')) {
		new Swiper('#employees__slider-1', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			lazy: true,
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.employees__button-prev',
				nextEl: '.employees__button-next',
			},

			// Брейкпоинты
			breakpoints: {
				1200: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},
		});
	}

	if (document.querySelector('#employees__slider-2')) {
		new Swiper('#employees__slider-2', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			lazy: true,

			pagination: {
				el: '.employees__pagination',
				clickable: true,
			},
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.employees__button-prev',
				nextEl: '.employees__button-next',
			},

			// Брейкпоинты
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		});
	}

	if (document.querySelector('.achievements__slider')) {
		new Swiper('.achievements__slider', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			lazy: true,
			pagination: {
				el: '.achievements__pagination',
				clickable: true,
			},

			navigation: {
				prevEl: '.achievements__button-prev',
				nextEl: '.achievements__button-next',
			},

			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 30,
					initialSlide: 1,
					centeredSlides: true,
				},
			},
		});
	}

	if (document.querySelector('.news__slider')) {
		new Swiper('.news__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			lazy: true,

			navigation: {
				prevEl: '.news__button-prev',
				nextEl: '.news__button-next',
			},

			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1550: {
					slidesPerView: 4,
					spaceBetween: 30
				},
			},
		});
	}

	if (document.querySelector('.team-about__slider')) {
		new Swiper('.team-about__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,

			navigation: {
				prevEl: '.team-about__button-prev',
				nextEl: '.team-about__button-next',
			},

			breakpoints: {
				1200: {
					spaceBetween: 30,
				},
				1550: {
					spaceBetween: 115
				},
			},
		});
	}

	if (document.querySelector('.videotour__slider')) {
		new Swiper('.videotour__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,

			navigation: {
				prevEl: '.videotour__button-prev',
				nextEl: '.videotour__button-next',
			},
		});
	}
	if (document.querySelector('.other-vacancy__slider')) {
		new Swiper('.other-vacancy__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,

			navigation: {
				prevEl: '.other-vacancy__button-prev',
				nextEl: '.other-vacancy__button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				650: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
			},
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
