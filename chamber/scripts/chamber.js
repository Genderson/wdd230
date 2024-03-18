const date = new Date();
let year = date.getFullYear();
document.querySelector('#currentyear').textContent = year;

const lastmodified = document.lastModified;
document.querySelector('#lastmodified').textContent = lastmodified;

const hamButton =  document.querySelector('#hamburger-menu');
const navElement = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navElement.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const msToDays = 84600000;
const visitsDisplay = document.querySelector(".visits");
let lastVisit = Number(window.localStorage.getItem("last-visit")) || null;

const today = Date.now();

if (lastVisit != null) {
	const days = Math.round((today - lastVisit) / msToDays);

	if(days < 1) {
		visitsDisplay.textContent = `Back so soon! Awesome!`;
	}
	else {
		visitsDisplay.textContent = `You last visited ${days} ${days > 1 ? 'days' : 'day'} ago.`;
	}
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

localStorage.setItem("last-visit", today);
