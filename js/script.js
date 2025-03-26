// блок навигации
const noticeEl = document.querySelector('.notice');
const stepperEls = document.querySelectorAll('.stepper');
const burgerEl = document.querySelector('.burger');
const headerListEl = document.querySelector('.header__list');
const filtersBtnEl = document.querySelector('.catalog__mobile-btn');

if (headerListEl) {
	new TransferElements({
		sourceElement: headerListEl,
		breakpoints: {
			767.98: {
				targetElement: document.querySelector('.header__bottom'),
				targetPosition: 1,
			},
		},
	});
}

if (filtersBtnEl) {
	const filtersEl = document.querySelector('.filters');
	filtersBtnEl.addEventListener('click', () => {
		filtersBtnEl.classList.toggle('catalog__mobile-btn--active');
		filtersEl.classList.toggle('filters--active');
	});
}

if (burgerEl) {
	const body = document.body;
	const menuEl = document.querySelector('.header__bottom');
	burgerEl.addEventListener('click', () => {
		burgerEl.classList.toggle('burger--active');
		menuEl.classList.toggle('header__bottom-active');
		body.classList.toggle('stop-scroll');
	});
}

if (noticeEl) {
	const noticeCloseEl = noticeEl.querySelector('.notice__close');
	noticeCloseEl.addEventListener('click', () => {
		noticeEl.classList.add('notice--hidden');
	});
}

// степпер
if (stepperEls) {
	stepperEls.forEach(stepperEl => {
		const stepperInputEl = stepperEl.querySelector('.stepper__input');
		const stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn--minus');
		const stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn--plus');

		const stepperMin = Number(stepperInputEl.getAttribute('min'));
		const stepperMax = Number(stepperInputEl.getAttribute('max'));

		let count = Number(stepperInputEl.value);

		stepperInputEl.addEventListener('change', () => {
			stepperBtnPlusEl.disabled = false;
			stepperBtnMinusEl.disabled = false;

			if (stepperInputEl.value <= stepperMin) {
				stepperInputEl.value = stepperMin;
				stepperBtnMinusEl.disabled = true;
			}
			if (stepperInputEl.value >= stepperMax) {
				stepperInputEl.value = stepperMax;
				stepperBtnPlusEl.disabled = true;
			}
		});

		stepperBtnPlusEl.addEventListener('click', () => {
			count = Number(stepperInputEl.value);

			if (count <= stepperMax) {
				stepperBtnPlusEl.disabled = false;
				stepperBtnMinusEl.disabled = false;
				count++;
				stepperInputEl.value = count;
			}
			if (count === stepperMax) {
				stepperBtnPlusEl.disabled = true;
			}
		});

		stepperBtnMinusEl.addEventListener('click', () => {
			count = Number(stepperInputEl.value);

			if (count > stepperMin) {
				stepperBtnPlusEl.disabled = false;
				stepperBtnMinusEl.disabled = false;
				count--;
				stepperInputEl.value = count;
			}
			if (count === stepperMin) {
				stepperBtnMinusEl.disabled = true;
			}
		});
	});
}

// событие на корзине
document.getElementById('btn-basket').addEventListener('click', () => {
	window.location.href = 'http://127.0.0.1:5500/html/cart.html';
});

// поисковая строка
const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', () => {
	inputSearch.style.display = 'block';
});

document.addEventListener('click', event => {
	if (!btnSearch.contains(event.target) && !inputSearch.contains(event.target)) {
		inputSearch.style.display = 'none';
	}
});
