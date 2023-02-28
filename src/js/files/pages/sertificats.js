//========================================================================================================================================================
//sertificats
const configSertificats = {
	curentCountBlocks: 8
}

// Показываем кнопку еще
if (document.querySelector('.sertificats-page')) {

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
				checkLengthItems(items, configSertificats.curentCountBlocks);
			} else {
				btn.querySelector('span').textContent = 'Скрыть';
				checkLengthItems(items, configSertificats.curentCountBlocks, true);
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

	if (innerWidth < 670) {
		configSertificats.curentCountBlocks = 4;
	} else if (innerWidth < 992) {
		configSertificats.curentCountBlocks = 6;
	} else {
		configSertificats.curentCountBlocks = 8;
	}
	checkLengthItems(blocks, configSertificats.curentCountBlocks);
}

