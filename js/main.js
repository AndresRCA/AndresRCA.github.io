// docSlider
docSlider.init();
// jquery text rotator
$(".rotate").textrotator();
// highlight.js
hljs.highlightAll();

/**
 * using the data attributes for el, set css properties for animations
 * @param {Element} el 
 */
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
const animationObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			if (entry.target.classList.contains('invisible')) entry.target.classList.remove('invisible');
			entry.target.classList.add('animate__' + entry.target.dataset.animation);
			observer.unobserve(entry.target); // animate only once
		}
	});
});

// add elements to observer
const animatedElements = document.querySelectorAll('.animate');
animatedElements.forEach((el) => {
	el.classList.add('animate__animated');
	if(el.dataset.animationStartInvisible) el.classList.add('invisible');
	setAnimationProperties(el);
	animationObserver.observe(el);
});