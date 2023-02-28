//========================================================================================================================================================
//menu
// Имитируем горизонтальный скрол при клике на кнопки
if (document.querySelector('.tabs-page-menu__navigation')) {
	const navigation = document.querySelector('.tabs-page-menu__navigation');
	const arrowLeft = document.querySelector('.tabs-page-menu__button-prev');
	const arrowRight = document.querySelector('.tabs-page-menu__button-next');
	const offsetCount = 100;

	arrowLeft.addEventListener('click', () => {
		navigation.scrollLeft -= offsetCount;
	})
	arrowRight.addEventListener('click', () => {
		navigation.scrollLeft += offsetCount;
	})
}

