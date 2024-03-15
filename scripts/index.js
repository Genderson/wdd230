const hamButton = document.querySelector('#hamburger-menu');
const navElement = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navElement.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cardsDarkMode = document.querySelectorAll(".card");
const navigationListItems = document.querySelectorAll('ul.navigation li');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";

		cardsDarkMode.forEach(card => {
			card.classList.toggle('card-dark-mode');
		  });

		navigationListItems.forEach(li => {
			li.classList.toggle('li-dark-mode');
		  });

	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";

		cardsDarkMode.forEach(card => {
			card.classList.toggle('card-dark-mode');
		  });

		navigationListItems.forEach(li => {
			li.classList.toggle('li-dark-mode');
		  });
	}
});

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
