//========================================================================================================================================================
//about

// Показываем кнопку еще
if (document.querySelector('.team-about')) {
	document.querySelector('.team-about__button-more').addEventListener('click', (e) => {
		const targetElement = e.target;
		const btn = targetElement.closest('.team-about__button-more');

		targetElement.closest('.team-about__body').classList.contains('_visible') ?
			btn.querySelector('span').textContent = 'Открыть текст' :
			btn.querySelector('span').textContent = 'Закрыть текст';
		targetElement.closest('.team-about__body').classList.toggle('_visible');
	})
}