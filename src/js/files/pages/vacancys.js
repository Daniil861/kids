//========================================================================================================================================================
//vacancys

const configVacancys = {
	curentCountBlocks: 6
}

// Показываем кнопку еще
if (document.querySelector('.vacancy-page')) {

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
				checkLengthItems(items, configVacancys.curentCountBlocks);
			} else {
				btn.querySelector('span').textContent = 'Скрыть';
				checkLengthItems(items, configVacancys.curentCountBlocks, true);
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

	items.forEach((item, idx) => {

		if (!isShow) {
			if (idx < length) {
				item.classList.add('_visible');
			}
			else if (idx >= length && item.classList.contains('_visible')) {
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
		configVacancys.curentCountBlocks = 5;
	} else {
		configVacancys.curentCountBlocks = 6;
	}
	checkLengthItems(blocks, configVacancys.curentCountBlocks);
}


