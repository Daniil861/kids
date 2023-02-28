
const configSingleNews = {
	curentCountTextBlocks: 4
}

// Показываем кнопку еще
if (document.querySelector('.interesting-news__body')) {

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
				checkLengthItems(items, configSingleNews.curentCountTextBlocks);
			} else {
				btn.querySelector('span').textContent = 'Скрыть';
				checkLengthItems(items, configSingleNews.curentCountTextBlocks, true);
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

	if (items.length <= configSingleNews.curentCountTextBlocks) document.querySelector('[data-show-more-button]').parentElement.classList.add('_hide');
	else if (items.length > configSingleNews.curentCountTextBlocks && document.querySelector('[data-show-more-button]').parentElement.classList.contains('_hide')) {
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
	if (innerWidth < 992) {
		configSingleNews.curentCountTextBlocks = 2;
	} else if (innerWidth < 1550) {
		configSingleNews.curentCountTextBlocks = 3;
	} else {
		configSingleNews.curentCountTextBlocks = 4;
	}
	checkLengthItems(blocks, configSingleNews.curentCountTextBlocks);
}
