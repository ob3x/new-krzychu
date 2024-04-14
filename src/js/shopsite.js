const rangeInput = document.querySelectorAll('.shopsite__price-range input'),
	priceInput = document.querySelectorAll('.shopsite__price-box--item'),
	progress = document.querySelector('.shopsite__price-slider--item');

const colors = document.querySelectorAll('.shopsite-left__colors-item');
const sizesBtn = document.querySelectorAll('.shopsite__sizes-item');
const hearsBtn = document.querySelectorAll('.shopsite-right__item-heart');
let priceGap = 250;

priceInput.forEach((input) => {
	input.addEventListener('input', (e) => {
		let minVal = parseInt(priceInput[0].value),
			maxVal = parseInt(priceInput[1].value);

		if (maxVal - minVal >= priceGap && maxVal <= 2000) {
			if (e.target.classList.contains('min-input')) {
				rangeInput[0].value = minVal;
				progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
			} else {
				rangeInput[1].value = maxVal;
				progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
			}
		}
	});
});

rangeInput.forEach((input) => {
	input.addEventListener('input', (e) => {
		let minVal = parseInt(rangeInput[0].value),
			maxVal = parseInt(rangeInput[1].value);

		if (maxVal - minVal < priceGap) {
			if (e.target.className === 'shopsite__price-range--min') {
				rangeInput[0].value = maxVal - priceGap;
			} else {
				rangeInput[1].value = minVal + priceGap;
			}
		} else {
			priceInput[0].value = minVal;
			priceInput[1].value = maxVal;
			progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
			progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
		}
	});
});

const changeIcon = (e) => {
	sizesBtn.forEach((size) => {
		size.classList.remove('sizes-active');
	});
	e.target.classList.toggle('sizes-active');
};

const changeColor = (e) => {
	colors.forEach((color) => {
		color.classList.remove('color-active');
	});
	e.target.classList.add('color-active');
};

sizesBtn.forEach((btn) => {
	btn.addEventListener('click', changeIcon);
});

colors.forEach((color) => {
	color.addEventListener('click', changeColor);
});

hearsBtn.forEach((heart) => {
	heart.addEventListener('click', () => {
		heart.classList.toggle('heart-red');
	});
});
