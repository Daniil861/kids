//========================================================================================================================================================
// menu
function activeHoverLinkMenu() {
	if (window.innerWidth > 992) {
		const spollerItems = document.querySelectorAll('.menu__link_spoller');

		spollerItems.forEach(spollerItem => {
			spollerItem.addEventListener('mouseenter', () => {
				spollerItem.classList.add('_open');
			})
			spollerItem.addEventListener('mouseleave', () => {
				if (spollerItem.classList.contains('_open')) {
					spollerItem.classList.remove('_open');
				}
			})
		})
	}
}
function resizeStates() {
	activeHoverLinkMenu();
}
activeHoverLinkMenu();

window.addEventListener('resize', resizeStates);

document.addEventListener('click', (e) => {
	const targetElement = e.target;

	if (targetElement.closest('.calls-header__phone-box') && innerWidth < 992) {
		targetElement.closest('.calls-header__phone-box').classList.toggle('_active');
	}
	if (document.querySelector('.calls-header__phone-box') && document.querySelector('.calls-header__phone-box').classList.contains('_active') &&
		!targetElement.closest('.calls-header__phone-box') && innerWidth < 992) {
		document.querySelector('.calls-header__phone-box').classList.remove('_active');
	}

})

Inputmask({
	"mask": "+7 (999) 999-99-99",
	showMaskOnHover: false
}).mask(document.querySelectorAll('._tel'));


//========================================================================================================================================================
//main
// валидация формы подписки на рассылку
if (document.getElementById('form-subscribe-main')) {
	const form = document.getElementById('form-subscribe-main');
	form.addEventListener('submit', formSend);

	function formSend(e) {

		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {
			console.log('Ошибок нет, отправляем форму');
			const parent = form.closest('[data-subscribe-form]');
			parent.classList.add('_subscribed');
		} else {
			console.log('Есть ошибки');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = form.querySelectorAll('._req');

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);
			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					error++;
					formAddError(input);
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
}

// валидация формы зявки на экскурсию
if (document.getElementById('form-tour-main')) {
	const form = document.getElementById('form-tour-main');
	form.addEventListener('submit', formSend);
	function formSend(e) {
		e.preventDefault();

		const formData = new FormData(form);
		console.log(formData.get('form[tour]'));

		let error = formValidate(form);

		if (error === 0) {
			console.log('Ошибок нет, отправляем форму');
			form.closest('.modal').classList.add('_completed');
		} else {
			console.log('Есть ошибки');
		}
	}


	function formValidate(form) {
		let error = 0;
		let formReq = form.querySelectorAll('._req');

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);
			if (input.classList.contains('_name') && input.value.length < 2) {
				error++;
				formAddError(input);
			}
			else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				error++;
				formAddError(input);
			}
			else if (input.getAttribute("type") === "tel") {
				if (input.value.length < 10) {
					error++;
					formAddError(input);
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
}

// main 
// кнопка - открыть еще, блок - programs
document.querySelectorAll('.item-tabs-programs__button-more').forEach(button => {
	button.addEventListener('click', (e) => {
		const targetElement = e.target;
		const parent = targetElement.closest('.item-tabs-programs__button-more');

		targetElement.closest('.item-tabs-programs__body').classList.contains('_visible') ?
			parent.querySelector('span').textContent = 'Открыть ещё' :
			parent.querySelector('span').textContent = 'Закрыть';
		targetElement.closest('.item-tabs-programs__body').classList.toggle('_visible');

	})
})

//========================================================================================================================================================

// animate - show title circles
if (document.querySelector('._title-circle')) {

	const items = document.querySelectorAll('._title-circle');

	window.addEventListener('scroll', (e) => {
		checkShowTitleCircles();
	})

	function checkShowTitleCircles() {
		items.forEach(item => {
			if (!item.classList.contains('_active') && ((item.getBoundingClientRect().top - (innerHeight - (innerHeight / 5))) < 0))
				item.classList.add('_active')
		})
	}
	checkShowTitleCircles();
}

if (document.querySelector('.icon-play')) {
	const btnsVideo = document.querySelectorAll('.icon-play');

	btnsVideo.forEach(btn => {
		const btnItem = btn.closest('.video-box');
		const videoBlock = btnItem.querySelector('video');

		btn.addEventListener('click', () => {
			videoBlock.play();
			videoBlock.setAttribute('controls', '');
			btnItem.classList.add('_hide');
		})
	})
}

// animate show cabinet shapes

if (document.querySelector('.circle') || document.querySelector('.shape')) {
	const items = document.querySelectorAll('.circle');
	const shapes = document.querySelectorAll('.shape');

	window.addEventListener('scroll', (e) => {
		checkShowShapes();
	})

	function checkShowShapes() {
		items.forEach(item => {
			if (!item.classList.contains('_active') && ((item.getBoundingClientRect().top - (innerHeight - (innerHeight / 5))) < 0))
				item.classList.add('_visible')
		})
		shapes.forEach(item => {
			if (!item.classList.contains('_active') && ((item.getBoundingClientRect().top - (innerHeight - (innerHeight / 5))) < 0))
				item.classList.add('_visible')
		})
	}
	checkShowShapes();
}
