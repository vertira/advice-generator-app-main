const adviceNumber = document.querySelector("#id");
const adviceText = document.querySelector("#advice");
const dice = document.querySelector(".dice");
const pause = document.querySelector(".pattern");

const fetchAdvice = () => {
	fetch("https://api.adviceslip.com/advice")
		.then((res) => res.json())
		.then((res) => {
			adviceNumber.textContent = res.slip.id;
			adviceText.textContent = res.slip.advice;
		});
};
fetchAdvice();
dice.addEventListener("click", function () {
	const interval = setInterval(fetchAdvice, 500);
	dice.classList.add("rotate");
	pause.addEventListener("click", function () {
		dice.classList.remove("rotate");
		clearInterval(interval);
	});
});
