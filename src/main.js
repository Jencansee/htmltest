	burger = document.querySelector('.header__burger'),
	modal = document.querySelector('.modal'),
	backdrop = document.querySelector('.backdrop');

const modalToggler = () => {
	if (modal.getAttribute('aria-hidden') === 'true') {
		modal.setAttribute('aria-hidden', 'false');
	}
	else {
		modal.classList.toggle('modal_animation-exit');

		setTimeout(() => {
			modal.setAttribute('aria-hidden', 'true');
			modal.classList.toggle('modal_animation-exit');
		}, 500)
	}

	burger.classList.toggle('toggled');
	
	document.documentElement.classList.toggle('no-scroll');
};

backdrop.addEventListener('click', () => {
	if (!modal.classList.contains('modal_animation-exit')) modalToggler();
});
burger.addEventListener('click', () => modalToggler());
