if (document.querySelector('.information__title-more768')) {
	if (window.innerWidth < 768) {
		document.querySelector('.information__title-more768').classList.add('_hide');
	}
	window.addEventListener('resize', () => {
		if (window.innerWidth < 768) {
			document.querySelector('.information__title-more768').classList.add('_hide');
		}
	})
}
