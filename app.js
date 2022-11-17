const handleToggleMenu = () => {
	const menuToggle = document.querySelector(".menu-toggle");
	const menuToggleClose = document.querySelector(".menu-toggle-close");
	const menu = document.querySelector(".header-menu");
	if (!menuToggle || !menu) return;
	menuToggle.addEventListener("click", () => {
		menu.classList.add("is-active");
	});
	document.addEventListener("click", (e) => {
		if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
			menu.classList.remove("is-active");
		}
	});
	menuToggleClose.addEventListener("click", (e) => {
		menu.classList.remove("is-active");
	});
};
handleToggleMenu();

let navbar = document.querySelector(".header");
window.onscroll = () => {
	navbar.classList.remove("active");

	if (window.scrollY > 0) {
		document.querySelector(".header").classList.add("active");
	} else {
		document.querySelector(".header").classList.remove("active");
	}
};

window.onload = () => {
	if (window.scrollY > 0) {
		document.querySelector(".header").classList.add("active");
	} else {
		document.querySelector(".header").classList.remove("active");
	}
};
