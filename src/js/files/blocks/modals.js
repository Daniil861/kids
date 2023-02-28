import { bodyLockToggle } from "../functions.js";
// валидация формы зявки на обратный звонок
if (document.querySelector('[data-modal-call-back]')) {
	const form = document.getElementById('form-callback');
	form.addEventListener('submit', formSend);
	function formSend(e) {
		e.preventDefault();

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
			console.log(input);
			if (input.classList.contains('_name') && input.value.length < 2) {
				error++;
				formAddError(input);
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				error++;
				formAddError(input);
			}
			else if (input.getAttribute("type") === "tel") {
				console.log(input.value.length);
				if (input.value.length < 10) {
					error++;
					formAddError(input);
				}
			}
			else if (input.value === '') {
				error++;
				formAddError(input);
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

// валидация формы обратной связи
if (document.getElementById('form-feedback')) {
	const form = document.getElementById('form-feedback');

	form.addEventListener('submit', formSend);

	function formSend(e) {

		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {
			console.log('Ошибок нет, отправляем форму');
			// убираем форму, показываем текст что форма отправлена
			document.querySelector('.feedback-kid__form-box').classList.add('_completed');
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
			if (input.classList.contains('_name') && input.value.length < 3) {
				error++;
				formAddError(input);
			}
			if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				error++;
				formAddError(input);
			}
			if (input.classList.contains('_text') && input.value.length < 10) {
				error++;
				formAddError(input);
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

// login - после ввода логина и пароля происходит авторизация, 
// у блока login-header__body (находится в хедере) - меняем атрибут data-modal-login-btn на data-modal-login-exit-btn
// валидация формы ввода логина и пароля
if (document.querySelector('[data-modal-login]')) {
	const form = document.getElementById('form-login');
	form.addEventListener('submit', formSend);

	function formSend(e) {

		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {
			console.log('Ошибок нет, отправляем форму');
			document.querySelector('[data-modal-login]').classList.remove('_visible');
			bodyLockToggle(100);
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
			} else if (input.getAttribute("type") === "text") {
				if (input.value.length < 3) {
					error++;
					formAddError(input);
				}
			} else if (input.value === '') {
				error++;
				formAddError(input);
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

// валидация формы зявки на обратный звонок
if (document.querySelector('[data-modal-consultation]')) {
	const form = document.getElementById('form-consultation');
	form.addEventListener('submit', formSend);
	function formSend(e) {
		e.preventDefault();

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
			console.log(input);
			if (input.classList.contains('_name') && input.value.length < 2) {
				error++;
				formAddError(input);
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				error++;
				formAddError(input);
			}
			else if (input.getAttribute("type") === "tel") {
				console.log(input.value.length);
				if (input.value.length < 10) {
					error++;
					formAddError(input);
				}
			}
			else if (input.value === '') {
				error++;
				formAddError(input);
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


// gallery
// функция записывает путь для картинки, по которой кликнули в галерее
function writeDataModalPicture(image) {
	const modalImage = document.querySelector('.modal-image__image');

	if (modalImage.querySelector('img')) {
		const picture = modalImage.querySelector('img');
		picture.setAttribute('src', image);
	} else {
		const picture = document.createElement('img');

		picture.setAttribute('src', image);
		picture.setAttribute('alt', 'Image');

		modalImage.append(picture);
	}
}

function writeDataModalQR(image) {
	const modalQR = document.querySelector('[data-modal-qr]');
	const modalImage = modalQR.querySelector('.modal__image');

	if (modalImage.querySelector('img')) {
		const picture = modalImage.querySelector('img');
		picture.setAttribute('src', image);
	} else {
		const picture = document.createElement('img');

		picture.setAttribute('src', image);
		picture.setAttribute('alt', 'Image');

		modalImage.append(picture);
	}
}

//========================================================================================================================================================

document.addEventListener('click', (e) => {
	const targetElement = e.target;
	//========================================================================================================================================================
	// modals - logic
	if (document.querySelector('[data-modal-call-back]') &&
		document.querySelector('[data-modal-call-back]').classList.contains('_visible') &&
		((!targetElement.closest('.modal__body') && !targetElement.closest('.after-complete-box__body')) || targetElement.closest('.modal__btn-close'))) {

		document.querySelector('[data-modal-call-back]').classList.remove('_visible');
		if (innerWidth < 992) document.body.classList.remove('_lock');
		else bodyLockToggle(100);
	}
	if (targetElement.closest('[data-modal-call-back-btn]')) {
		document.querySelector('[data-modal-call-back]').classList.add('_visible');
		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	//====
	if (document.querySelector('[data-modal-login]') &&
		document.querySelector('[data-modal-login]').classList.contains('_visible') &&
		(!targetElement.closest('.modal__body') || targetElement.closest('.modal__btn-close'))) {
		document.querySelector('[data-modal-login]').classList.remove('_visible');
		if (innerWidth < 992) document.body.classList.remove('_lock');
		else bodyLockToggle(100);
	}
	if (targetElement.closest('[data-modal-login-btn]') && targetElement.closest('.login-header').dataset.auf !== 'on') {
		document.querySelector('[data-modal-login]').classList.add('_visible');
		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	//====
	if (document.querySelector('[data-modal-recover]') &&
		document.querySelector('[data-modal-recover]').classList.contains('_visible') &&
		(!targetElement.closest('.modal__body') || targetElement.closest('.modal__btn-close'))) {
		document.querySelector('[data-modal-recover]').classList.remove('_visible');
		if (innerWidth < 992 && document.body.classList.contains('_lock')) {
			document.body.classList.remove('_lock');
		} else if (document.documentElement.classList.contains('lock')) {
			bodyLockToggle();
		}
	}

	if (targetElement.closest('.modal__recover-btn')) {
		document.querySelector('[data-modal-login]').classList.remove('_visible');
		document.querySelector('[data-modal-recover]').classList.add('_visible');
	}

	//====
	if (document.querySelector('[data-modal-qr]') &&
		document.querySelector('[data-modal-qr]').classList.contains('_visible') &&
		(!targetElement.closest('.modal__body') || targetElement.closest('.modal__btn-close'))) {
		document.querySelector('[data-modal-qr]').classList.remove('_visible');
		if (innerWidth < 992) document.body.classList.remove('_lock');
		else bodyLockToggle(100);
	}
	if (targetElement.closest('[data-modal-qr-btn]')) {

		let imagePath = targetElement.closest('[data-modal-qr-btn]').getAttribute('data-path');

		if (imagePath) writeDataModalQR(imagePath);

		document.querySelector('[data-modal-qr]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	//====
	if (document.querySelector('[data-modal-tour]') &&
		document.querySelector('[data-modal-tour]').classList.contains('_visible') &&
		(!targetElement.closest('.modal__body') || targetElement.closest('.modal__btn-close'))) {
		document.querySelector('[data-modal-tour]').classList.remove('_visible');
		if (innerWidth < 992) document.body.classList.remove('_lock');
		else bodyLockToggle(100);
	}
	if (targetElement.closest('[data-modal-tour-btn]')) {
		document.querySelector('[data-modal-tour]').classList.add('_visible');
		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	//====
	if (document.querySelector('[data-modal-picture]') &&
		document.querySelector('[data-modal-picture]').classList.contains('_visible') &&
		(!targetElement.closest('.modal-image__body') || targetElement.closest('.modal-image__btn-close'))) {
		document.querySelector('[data-modal-picture]').classList.remove('_visible');

		if (innerWidth < 992) document.body.classList.remove('_lock');
		else bodyLockToggle(100);
	}

	// Если не понравится плагин галереи - тогда оставлю увеличение фотки без прокрутки

	if (targetElement.closest('.slider-top-gallery__image span')) {
		const parentBlock = targetElement.closest('.slider-top-gallery__image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source')) imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');
		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	// меняем область клика на разрешениях менее 1200
	if (innerWidth < 1200 && targetElement.closest('.slider-top-gallery__image')) {
		const parentBlock = targetElement.closest('.slider-top-gallery__image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source')) imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	//====
	if (targetElement.closest('.item-achievements__image span')) {
		const parentBlock = targetElement.closest('.item-achievements__image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source')) imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	// меняем область клика на разрешениях менее 1200
	if (innerWidth < 1200 && targetElement.closest('.item-achievements__image')) {
		const parentBlock = targetElement.closest('.item-achievements__image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source')) imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}
	//====
	//====
	if (targetElement.closest('.item-tabs-page-menu__license-image span')) {
		const parentBlock = targetElement.closest('.item-tabs-page-menu__license-image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source')) imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	// меняем область клика на разрешениях менее 1200
	if (innerWidth < 1200 && targetElement.closest('.item-tabs-page-menu__license-image')) {
		const parentBlock = targetElement.closest('.item-tabs-page-menu__license-image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source')) imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}
	//====
	if (targetElement.closest('.photo-gallery__image span')) {
		const parentBlock = targetElement.closest('.photo-gallery__image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source'))
			imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	// меняем область клика на разрешениях менее 1200
	if (innerWidth < 1200 && targetElement.closest('.photo-gallery__image')) {
		const parentBlock = targetElement.closest('.photo-gallery__image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source'))
			imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	//====
	if (targetElement.closest('.item-sertificats-page__image span')) {
		const parentBlock = targetElement.closest('.item-sertificats-page__image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source')) imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	// меняем область клика на разрешениях менее 1200
	if (innerWidth < 1200 && targetElement.closest('.item-sertificats-page__image')) {
		const parentBlock = targetElement.closest('.item-sertificats-page__image');

		let imagePath = null;
		if (document.documentElement.classList.contains('webp') && parentBlock.querySelector('source')) imagePath = parentBlock.querySelector('source').getAttribute('srcset');
		else imagePath = parentBlock.querySelector('img').getAttribute('src');

		writeDataModalPicture(imagePath);

		document.querySelector('[data-modal-picture]').classList.add('_visible');

		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}
	//====
	if (document.querySelector('[data-modal-consultation]') &&
		document.querySelector('[data-modal-consultation]').classList.contains('_visible') &&
		((!targetElement.closest('.modal__body') && !targetElement.closest('.after-complete-box__body')) || targetElement.closest('.modal__btn-close'))) {

		document.querySelector('[data-modal-consultation]').classList.remove('_visible');
		if (innerWidth < 992) document.body.classList.remove('_lock');
		else bodyLockToggle(100);
	}
	if (targetElement.closest('[data-modal-consultation-btn]')) {
		document.querySelector('[data-modal-consultation]').classList.add('_visible');
		if (innerWidth < 992) document.body.classList.add('_lock');
		else bodyLockToggle();
	}

	//========================================================================================================================================================

})
