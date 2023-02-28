//========================================================================================================================================================
//reviews

const configReviews = {
	curentCountTextBlocks: 6,
	curentCountVideoBlocks: 6
}

// Показываем кнопку еще
if (document.querySelector('.reviews-page')) {

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
				if (btn.closest('.reviews-page__text-reviews')) checkLengthItems(items, configReviews.curentCountTextBlocks);
				if (btn.closest('.video-reviews-page__video-items-box')) checkLengthItems(items, configReviews.curentCountVideoBlocks);
			} else {
				btn.querySelector('span').textContent = 'Скрыть';
				if (btn.closest('.reviews-page__text-reviews')) checkLengthItems(items, configReviews.curentCountTextBlocks, true);
				if (btn.closest('.video-reviews-page__video-items-box')) checkLengthItems(items, configReviews.curentCountVideoBlocks, true);
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
		configReviews.curentCountTextBlocks = 4;
		configReviews.curentCountVideoBlocks = 3;
	} else {
		configReviews.curentCountTextBlocks = 6;
		configReviews.curentCountVideoBlocks = 6;
	}


	if (button.closest('.reviews-page__text-reviews')) {
		checkLengthItems(blocks, configReviews.curentCountTextBlocks);
	}
	if (button.closest('.video-reviews-page__video-items-box')) {
		checkLengthItems(blocks, configReviews.curentCountVideoBlocks);
	}
}



