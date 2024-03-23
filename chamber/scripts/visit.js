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