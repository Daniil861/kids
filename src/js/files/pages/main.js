//========================================================================================================================================================
// страница детского сада

if (document.querySelector('[data-info-prices]')) {

	const buttons = document.querySelectorAll('[data-info-prices] span');
	buttons.forEach(button => [
		button.addEventListener('click', (e) => {
			button.closest('.item-prices').classList.add('_show-modal');
		})
	])
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.modal-prices-classes') && !e.target.closest('[data-info-prices] span')) {
			document.querySelectorAll('.item-prices').forEach(item => {
				if (item.classList.contains('_show-modal')) item.classList.remove('_show-modal');
			})
			document.querySelector('.modal-prices-classes').classList.remove('_visible');
		}
	})

}

if (document.querySelector('.deposit-box-prices')) {
	convertWords();

	function convertWords() {
		if (document.querySelector('.deposit-box-prices__sub-text-child-2') && innerWidth < 478) {
			document.querySelector('.deposit-box-prices__sub-text-child-2').textContent = 2;
		} else if (document.querySelector('.deposit-box-prices__sub-text-child-2') && innerWidth >= 478) {
			document.querySelector('.deposit-box-prices__sub-text-child-2').textContent = 'второго';
		}
		if (document.querySelector('.deposit-box-prices__sub-text-child-3') && innerWidth < 478) {
			document.querySelector('.deposit-box-prices__sub-text-child-3').textContent = 3;
		} else if (document.querySelector('.deposit-box-prices__sub-text-child-3') && innerWidth >= 478) {
			document.querySelector('.deposit-box-prices__sub-text-child-3').textContent = 'третьего';
		}
	}

	window.addEventListener('resize', () => {
		convertWords();
	})
}

// кнопка - открыть еще, блок - garten-academ
if (document.querySelector('.garten-academ__list')) {
	const button = document.querySelector('.garten-academ__button-more');

	button.addEventListener('click', (e) => {
		const targetElement = e.target;
		const parent = targetElement.closest('.garten-academ__show-more');

		targetElement.closest('.garten-academ__list-box').classList.contains('_visible') ?
			parent.querySelector('span').textContent = 'Открыть ещё' :
			parent.querySelector('span').textContent = 'Закрыть';
		targetElement.closest('.garten-academ__list-box').classList.toggle('_visible');
	})
}
