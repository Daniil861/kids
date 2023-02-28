
const configNews = {
	curentCountTextBlocks: 8
}

// Показываем кнопку еще
if (document.querySelector('.news-page__items-block')) {

	document.querySelectorAll('[data-show-more-button]').forEach(button => {

		initStartVisibleBlocks(button);

		button.addEventListener('click', (e) => {

			const targetElement = e.target;
			const btn = targetElement.closest('[data-show-more-button]');
			const block = targetElement.closest('[data-showmore]');

			const itemsAll = block.querySelector('[data-showmore-block]');
			const items = Array.from(itemsAll.children);

			if (block.classList.contains('_visible')) {
				btn.querySelector('span').textContent = 'Показать ещё';
				checkLengthItems(items, configNews.curentCountTextBlocks);
			} else {
				btn.querySelector('span').textContent = 'Скрыть';
				checkLengthItems(items, configNews.curentCountTextBlocks, true);
			}
			block.classList.toggle('_visible');
		})
	})

	window.addEventListener('resize', () => {
		document.querySelectorAll('[data-show-more-button]').forEach(button => {
			initStartVisibleBlocks(button);
		})
	})
}

function getItem(button) {
	const block = button.closest('[data-showmore]');

	const itemsAll = block.querySelector('[data-showmore-block]');
	const items = Array.from(itemsAll.children);
	return items;
}

function checkLengthItems(items, length, isShow = false) {

	if (items.length <= configNews.curentCountTextBlocks) document.querySelector('[data-show-more-button]').parentElement.classList.add('_hide');
	else if (items.length > configNews.curentCountTextBlocks && document.querySelector('[data-show-more-button]').parentElement.classList.contains('_hide')) {
		document.querySelector('[data-show-more-button]').parentElement.classList.remove('_hide');
	}

	items.forEach((item, idx) => {
		if (!isShow) {
			if (idx < length) {
				item.classList.add('_visible');
			}
			if (idx >= length && item.classList.contains('_visible')) {
				item.classList.remove('_visible');
			}
		} else {
			item.classList.add('_visible');
		}
	})

}

function initStartVisibleBlocks(button) {
	const blocks = getItem(button);
	if (innerWidth < 650) {
		configNews.curentCountTextBlocks = 3;
	} else if (innerWidth < 992) {
		configNews.curentCountTextBlocks = 4;
	} else if (innerWidth < 1550) {
		configNews.curentCountTextBlocks = 6;
	} else {
		configNews.curentCountTextBlocks = 8;
	}
	checkLengthItems(blocks, configNews.curentCountTextBlocks);
}
