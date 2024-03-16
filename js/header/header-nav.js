const burgerButtonContainer = document.querySelector(
	".header-nav__burger-btn-container"
);
const burgerButton = document.querySelector(".header-nav__burger-btn");
const burgerWindow = document.querySelector(".header-nav__burger-window");
const body = document.querySelector("body");

burgerButtonContainer.addEventListener("click", () => {
	burgerButton.classList.toggle("active");
	if (burgerButton.classList.contains("active")) {
		burgerWindow.style.left = 0 + "px";
		body.style.overflow = "hidden";
	} else {
		burgerWindow.style.left = 100 + "%";
		body.style.overflow = "auto";
	}
});
