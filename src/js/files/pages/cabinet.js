//========================================================================================================================================================
//cabinet

// валидация формы - заполнение полей в блоке - данные ребенка и документы
if (document.querySelector('.data-kid__input')) {
	const dataInputs = document.querySelectorAll('.data-kid__input');
	const filesInputs = document.querySelectorAll('.item-files-kid__input');

	dataInputs.forEach(input => {
		input.addEventListener('focus', (e) => {
			input.closest('.data-kid__input-box').classList.add('_active');
		})
		input.addEventListener('focusout', (e) => {
			input.closest('.data-kid__input-box').classList.remove('_active');
		})
	})

	filesInputs.forEach(input => {
		input.addEventListener('focus', (e) => {
			input.closest('.item-files-kid__input-box').classList.add('_active');
		})
		input.addEventListener('focusout', (e) => {
			if (input.value === '') {
				input.closest('.item-files-kid__input-box').classList.remove('_active');
			}
		})
	})

	// submit form
	document.addEventListener('DOMContentLoaded', () => {
		const form = document.getElementById('form-files-cabinet');
		form.addEventListener('submit', formSend);

		async function formSend(e) {
			e.preventDefault();

			const formData = new FormData(form);
			console.log(formData.get('kid-adress-title'));
		}
		const formFile = document.querySelectorAll('.input-file__input-file');
		formFile.forEach(file => {
			file.addEventListener('change', () => {
				uploadFile(file.files[0]);
				file.closest('.item-files-kid__box').classList.add('_file-loaded');

				// меняем иконку после загрузки файла
				const inputBox = file.closest('.item-files-kid__box');
				const iconItem = inputBox.querySelector('.input-file__button');

				if (iconItem.classList.contains('_icon-download')) {
					iconItem.classList.remove('_icon-download');
					iconItem.classList.add('_icon-paper');
				}
			})

		})

		function uploadFile(file) {
			console.log(`Файл загружен`);
			console.log(file);
			console.log(file.name);
		}

		const closeIcons = document.querySelectorAll('.item-files-kid__icon-status');
		closeIcons.forEach(icon => {
			icon.addEventListener('click', () => {
				const box = icon.closest('.item-files-kid__box');
				box.classList.remove('_file-loaded');
				const input = box.querySelector('.input-file__input-file');
				input.value = '';

				const iconItem = box.querySelector('.input-file__button');

				if (iconItem.classList.contains('_icon-paper')) {
					iconItem.classList.remove('_icon-paper');
					iconItem.classList.add('_icon-download');
				}
			})
		})
	})

}

// валидация формы отправки документов в лк
if (document.getElementById('form-files-cabinet')) {
	const form = document.getElementById('form-files-cabinet');
	form.addEventListener('submit', formSend);

	function formSend(e) {

		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {
			console.log('Ошибок нет, отправляем форму');
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

//========================================================================================================================================================
// cabinet 
// scroll к блоку с обратной связью
if (document.querySelector('.page-cabinet')) {
	const link = document.querySelector('[data-link-feedback]');

	link.addEventListener('click', function (e) {
		e.preventDefault();

		const scrollTarget = document.querySelector('.documents-cabinet__content');

		const topOffset = 50; // если не нужен отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		// открываем активную вкладку с отзывами
		document.querySelector('.documents-cabinet__title._icon-tab-3').click();

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
	// });
}

//========================================================================================================================================================
//cabinet
// Когда кликаем на кнопку плюс рядом с полем выбора документа
if (document.querySelector('.item-files-kid__plus-btn')) {
	function createInputCabinetBlock(attribute) {
		const itemBox = document.createElement('div');
		itemBox.classList.add('item-files-kid__box');

		const inputBox = document.createElement('div');
		inputBox.classList.add('item-files-kid__input-box');

		const textarea = document.createElement('textarea');
		textarea.classList.add('item-files-kid__input');
		textarea.setAttribute('placeholder', 'Загрузить файл');
		textarea.setAttribute('name', `kid-${attribute}-title`);

		const inputFileBox = document.createElement('div');
		inputFileBox.classList.add('item-files-kid__input-box-file');
		inputFileBox.classList.add('input-file');

		const inputItem = document.createElement('div');
		inputItem.classList.add('input-file__item');

		const inputFile = document.createElement('input');
		inputFile.setAttribute('type', 'file');
		inputFile.setAttribute('name', `kid-${attribute}-document`);
		inputFile.classList.add('input-file__input-file');

		const btnFileItem = document.createElement('div');
		btnFileItem.classList.add('input-file__button');
		btnFileItem.classList.add('_icon-download');

		inputItem.append(inputFile, btnFileItem);

		inputFileBox.append(inputItem);

		const statusBox = document.createElement('div');
		statusBox.classList.add('item-files-kid__status');

		const statusText = document.createElement('p');
		statusText.textContent = 'Загружено';

		const statusIconBox = document.createElement('div');
		statusIconBox.classList.add('item-files-kid__icon-status');

		const statusIcon = document.createElement('img');
		statusIcon.setAttribute('src', './img/icons/close.svg');
		statusIcon.setAttribute('alt', 'Icon');

		statusIconBox.append(statusIcon);

		statusBox.append(statusText, statusIconBox);

		inputBox.append(textarea, inputFileBox, statusBox);

		const emptyBlock = document.createElement('div');
		emptyBlock.classList.add('item-files-kid__empty');

		itemBox.append(inputBox, emptyBlock);

		return itemBox;
	}
	document.querySelectorAll('.item-files-kid__plus-btn').forEach(buttonPlus => {
		buttonPlus.addEventListener('click', () => {

			const parrent = buttonPlus.closest('.item-files-kid__body');
			const attribute = parrent.getAttribute('data-attr');

			const itemBlock = createInputCabinetBlock(attribute);

			parrent.append(itemBlock);
		})
	})
}

//========================================================================================================================================================
// cabinet
// Кнопки показать еще в табе платежных документов

if (document.querySelector('.box-payments__button-more')) {

	const showMoreButtons = document.querySelectorAll('.box-payments__button-more');

	showMoreButtons.forEach(button => {
		const parent = button.closest('.box-payments');

		const items = parent.querySelectorAll('.box-payments__grid');

		if (items.length < 5) {
			parent.querySelector('.box-payments__more-box-button').classList.add('_hide');
		} else {
			items.forEach((item, idx) => {
				if (idx > 5) item.classList.add('_hide');
			})
		}

		button.addEventListener('click', () => {
			const parent = button.closest('.box-payments');

			const items = parent.querySelectorAll('.box-payments__grid');

			items.forEach(item => {
				if (item.classList.contains('_hide')) item.classList.remove('_hide');
			})
			button.parentElement.classList.add('_hide');
		})
	})
}
