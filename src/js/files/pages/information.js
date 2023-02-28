// кнопка - открыть еще, блок - content-spollers-information-page
if (document.querySelector('.content-spollers-information-page__text')) {
	const button = document.querySelector('.content-spollers-information-page__button-more');

	button.addEventListener('click', (e) => {
		const targetElement = e.target;
		const parent = targetElement.closest('.content-spollers-information-page__show-more');

		targetElement.closest('.content-spollers-information-page__text-box').classList.contains('_visible') ?
			parent.querySelector('span').textContent = 'Открыть текст' :
			parent.querySelector('span').textContent = 'Закрыть';
		targetElement.closest('.content-spollers-information-page__text-box').classList.toggle('_visible');
	})
}
