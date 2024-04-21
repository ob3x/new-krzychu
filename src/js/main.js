const trailerVideo = document.querySelector('.trailer-box__stop');
const heartsRed = document.querySelectorAll('.news-box__item-heart');

trailerVideo.addEventListener('click', () => {
	trailerVideo.classList.toggle('play');
});

heartsRed.forEach(heart => {
	heart.addEventListener('click', () => {
		heart.classList.toggle('heart-red')
	})
})