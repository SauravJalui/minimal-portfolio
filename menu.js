const burgerMenu = document.getElementById("brand");

const nav = gsap.timeline();
nav
	.to("#navbar", 1.4, {
		width: "100%",
		opacity: 1,
	})
	.staggerTo(
		"#navbar ul li",
		1,
		{
			opacity: 1,
			y: 10,
			ease: Power4.easeOut,
		},
		0.2
	)
	.reverse();

nav.pause();

const navigation = gsap.timeline();

navigation
	.staggerFrom(
		"#navbar ul li",
		2,
		{
			opacity: 0,
			y: -100,
			ease: Power4.easeOut,
		},
		0.2
	)
	.from(
		".header__logo",
		2,
		{
			y: -100,
			opacity: 0,
		},
		0.1
	)
	.from(
		burgerMenu,
		2,
		{
			y: -100,
			opacity: 0,
		},
		0.3
	);

const burgerHandler = () => {
	burgerMenu.classList.toggle("burger--active");
	nav.reversed() ? nav.play() : nav.reverse();
};

burgerMenu.addEventListener("click", burgerHandler);
