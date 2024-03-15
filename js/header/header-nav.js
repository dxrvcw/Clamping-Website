const burgerButtonContainer = document.querySelector(
	".header-nav__burger-btn-container"
);
const burgerButton = document.querySelector(".header-nav__burger-btn");
const burgerWindow = document.querySelector(".header-nav__burger-window");

burgerButtonContainer.addEventListener("click", () => {
	burgerButton.classList.toggle("active");
	if (burgerButton.classList.contains("active")) {
		burgerWindow.style.left = 0 + "px";
	} else {
		burgerWindow.style.left = 100 + "%";
	}
});
