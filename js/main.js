// docSlider
docSlider.init();
// jquery text rotator
$(".rotate").textrotator();

function setAnimationProperties(el) {
	// get data
	const duration = el.dataset.animationDuration;
	const delay = el.dataset.animationDelay;
	const repeat = el.dataset.animationRepeat;

	// set properties if data exists
	if (duration) el.style.setProperty('--animate-duration', duration);
	if (delay) el.style.setProperty('animation-delay', delay);
	if (repeat) el.style.setProperty('--animate-repeat', repeat);
}

// prepare element animations and observer
const animationObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			if (entry.target.classList.contains('invisible')) entry.target.classList.remove('invisible');
			entry.target.classList.add('animate__' + entry.target.dataset.animation);
		} else {
			if (entry.target.dataset.animationStartInvisible) entry.target.classList.add('invisible');
			entry.target.classList.remove('animate__' + entry.target.dataset.animation);
		}
	});
});
const animatedElements = document.querySelectorAll('.animate');
animatedElements.forEach((el) => {
	el.classList.add('animate__animated');
	if(el.dataset.animationStartInvisible) el.classList.add('invisible');
	setAnimationProperties(el);
	animationObserver.observe(el);
});