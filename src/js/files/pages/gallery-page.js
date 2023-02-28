//========================================================================================================================================================
//gallery-page

if (document.querySelector('.photo-gallery__images')) {
	const images = document.querySelectorAll('.photo-gallery__image');
	const buttonMore = document.querySelector('.photo-gallery__button');

	const config = {
		mediaBigger1200: 15,
		mediaBigger992: 14,
		mediaSmaller478: 7,
	}

	if (innerWidth > 1200) {
		if (images.length > config.mediaBigger1200) {
			images.forEach((image, idx) => {
				idx > config.mediaBigger1200 ? image.classList.add('_hide') : null;
			})
		}
	}
	if (innerWidth > 992 && innerWidth <= 1200) {
		if (images.length > config.mediaBigger992) {
			images.forEach((image, idx) => {
				idx > config.mediaBigger992 ? image.classList.add('_hide') : null;
			})
		}
	}
	if (innerWidth <= 992) {
		if (images.length > config.mediaSmaller478) {
			images.forEach((image, idx) => {
				idx > config.mediaSmaller478 ? image.classList.add('_hide') : null;
			})
		}
	}

	buttonMore.addEventListener('click', () => {
		if (buttonMore.classList.contains('_open')) {
			buttonMore.querySelector('span').textContent = 'Показать больше';
			buttonMore.classList.remove('_open');
			if (innerWidth > 1200) {
				if (images.length > config.mediaBigger1200) {
					images.forEach((image, idx) => {
						idx > config.mediaBigger1200 ? image.classList.add('_hide') : null;
					})
				}
			}
			if (innerWidth > 992 && innerWidth <= 1200) {
				if (images.length > config.mediaBigger992) {
					images.forEach((image, idx) => {
						idx > config.mediaBigger992 ? image.classList.add('_hide') : null;
					})
				}
			}
			if (innerWidth <= 992) {
				if (images.length > config.mediaSmaller478) {
					images.forEach((image, idx) => {
						idx > config.mediaSmaller478 ? image.classList.add('_hide') : null;
					})
				}
			}
		} else {
			images.forEach(image => {
				if (image.classList.contains('_hide')) image.classList.remove('_hide');
			})
			buttonMore.querySelector('span').textContent = 'Скрыть лишние';
			buttonMore.classList.add('_open');
		}

	})

}

//========================================================================================================================================================
// Фильтр
if (document.querySelector('.video-gallery__body')) {
	const filtr_controls = document.querySelector('.video-gallery__navigation');
	const filtr_buttons = document.querySelectorAll('.video-gallery__button');
	const filtr_items = document.querySelectorAll('.video-gallery__item');
	const load_more_course = document.querySelector('.video-gallery__button-box');

	const maxItems = 6;
	const currentButton = {
		path: 'celebrations'
	}

	//Функция проверки количествав карточек отображаемых на странице - если меньше 9 шт - кнопку Load more убираем
	const isLoadMoreNeeded = (selector) => {
		if (selector.length < maxItems) {
			load_more_course.classList.add('_hide');
		} else if (selector.length >= maxItems && load_more_course.classList.contains('_hide')) {
			load_more_course.classList.remove('_hide');
		}
	}

	const showItems = (path, show = false) => {
		// Получаем все элементы-блоки с видео (каждый помечен атрибутом)
		const items = document.querySelectorAll('[data-target]');

		items.forEach(item => {
			const hashs = item.dataset.target.split(',');
			hashs.forEach(hash => {
				if (hash === path) item.classList.add('_visible');
			})
		})

		if (!show) {
			const visible = Array.from(items).filter(item => {
				if (item.classList.contains('_visible')) return true;
			})

			visible.forEach((item, idx) => {
				if (idx >= maxItems) {
					item.classList.remove('_visible');
				}
			})

			// Проверяем - если во вкладке только один блок - добавляем класс по которому указываем конкретные размеры для контейнера
			if (visible.length <= 2) document.querySelector('.video-gallery__items').classList.add('_one');
			else if (visible.length > 2 && document.querySelector('.video-gallery__items').classList.contains('_one')) {
				document.querySelector('.video-gallery__items').classList.remove('_one');
			}
		}

	}

	showItems('celebrations');
	isLoadMoreNeeded(document.querySelectorAll(`[data-target]._visible`));

	// кликаем по какой-либо кнопке фильтра
	filtr_controls.addEventListener('click', (e) => {
		// Получаем в константу элемент по которому кликнули
		const target = e.target;
		// Проверяем является ли элемент по которому кликнули нужной кнопкой

		if (target.closest('.video-gallery__button')) {
			const btn = target.closest('.video-gallery__button');
			// Получаем в переменную значение атрибута data-path кнопки по которой кликнули
			// const path = btn.dataset.path;
			currentButton.path = btn.dataset.path;

			// Забираем класс активной кнопки у всех кнопок
			filtr_buttons.forEach(el => el.classList.remove('_is-checked'));
			// Добавляем класс активной кнопки кнопке по которой кликнули
			document.querySelectorAll(`[data-path="${currentButton.path}"]`).forEach(el => {
				el.classList.add('_is-checked');
			});

			// Убираем у всех карточек класс, который отображает карточки
			filtr_items.forEach(el => {
				el.classList.remove('_visible');
			});

			// Отображаем карточки с совпавшим хэшем
			showItems(currentButton.path);

			// Убираем кнопку Load more если карточек меньше
			isLoadMoreNeeded(document.querySelectorAll(`[data-target]._visible`));
		}
	});

	// Вешаем событие клик на кнопку load more
	load_more_course.addEventListener('click', (e) => {
		showItems(currentButton.path, true);
		load_more_course.classList.add('_hide');
	})
}

// Имитируем горизонтальный скрол при клике на кнопки
if (document.querySelector('.video-gallery__navigation')) {
	const navigation = document.querySelector('.video-gallery__navigation');
	const arrowLeft = document.querySelector('.video-gallery__button-prev');
	const arrowRight = document.querySelector('.video-gallery__button-next');
	const offsetCount = 100;

	arrowLeft.addEventListener('click', () => {
		navigation.scrollLeft -= offsetCount;
	})
	arrowRight.addEventListener('click', () => {
		navigation.scrollLeft += offsetCount;
	})
}
