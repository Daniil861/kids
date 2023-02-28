//========================================================================================================================================================
//gallery-page

if (document.querySelector('.filter-teachers__images')) {
	const images = document.querySelectorAll('.filter-teachers__image');
	const buttonMore = document.querySelector('.filter-teachers__button');

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
if (document.querySelector('.filter-teachers__body')) {
	const filtr_controls = document.querySelector('.filter-teachers__navigation');
	const filtr_buttons = document.querySelectorAll('.filter-teachers__button');
	const filtr_items = document.querySelectorAll('.filter-teachers__item');
	const load_more_course = document.querySelector('.filter-teachers__button-box');

	const maxItems = {
		count: 9
	};
	const currentButton = {
		path: 'all'
	}

	//Функция проверки количествав карточек отображаемых на странице - если меньше 9 шт - кнопку Load more убираем
	const isLoadMoreNeeded = (selector) => {
		if (selector.length < maxItems.count) {
			load_more_course.classList.add('_hide');
		} else if (selector.length >= maxItems.count && load_more_course.classList.contains('_hide')) {
			load_more_course.classList.remove('_hide');
		}
	}

	const showItems = (path, show = false) => {
		// Получаем все элементы-блоки с видео (каждый помечен атрибутом)
		const items = document.querySelectorAll('[data-target]');

		items.forEach(item => {
			const hashs = item.dataset.target.split(',');
			hashs.forEach(hash => {
				if (hash === path || path === 'all') item.classList.add('_visible');
			})
		})

		if (!show) {
			const visible = Array.from(items).filter(item => {
				if (item.classList.contains('_visible')) return true;
			})

			visible.forEach((item, idx) => {
				if (idx >= maxItems.count) {
					item.classList.remove('_visible');
				}
			})

			// Проверяем - если во вкладке только один блок - добавляем класс по которому указываем конкретные размеры для контейнера
			if (visible.length <= 2) document.querySelector('.filter-teachers__items').classList.add('_one');
			else if (visible.length > 2 && document.querySelector('.filter-teachers__items').classList.contains('_one')) {
				document.querySelector('.filter-teachers__items').classList.remove('_one');
			}
		}

	}

	changeCountVisibleItems();
	showItems('all');

	// кликаем по какой-либо кнопке фильтра
	filtr_controls.addEventListener('click', (e) => {
		// Получаем в константу элемент по которому кликнули
		const target = e.target;
		// Проверяем является ли элемент по которому кликнули нужной кнопкой

		if (target.closest('.filter-teachers__button')) {
			const btn = target.closest('.filter-teachers__button');
			// Получаем в переменную значение атрибута data-path кнопки по которой кликнули
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

	window.addEventListener('resize', changeCountVisibleItems);

	function changeCountVisibleItems() {
		if (innerWidth < 700) {
			maxItems.count = 4;
		} else if (innerWidth < 1200) {
			maxItems.count = 6;
		} else maxItems.count = 9;
		showItems(currentButton.path);
		isLoadMoreNeeded(document.querySelectorAll(`[data-target]._visible`));
	}
}

// Имитируем горизонтальный скрол при клике на кнопки
if (document.querySelector('.filter-teachers__navigation')) {
	const navigation = document.querySelector('.filter-teachers__navigation');
	const arrowLeft = document.querySelector('.filter-teachers__button-prev');
	const arrowRight = document.querySelector('.filter-teachers__button-next');
	const offsetCount = 100;

	arrowLeft.addEventListener('click', () => {
		navigation.scrollLeft -= offsetCount;
	})
	arrowRight.addEventListener('click', () => {
		navigation.scrollLeft += offsetCount;
	})
}
