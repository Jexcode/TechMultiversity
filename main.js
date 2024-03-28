// Nav and menu controll

const menuIcon = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelector(".navlinks");
const closeNav = document.querySelector(".fa-xmark");
const li = document.querySelectorAll(".navlinks > li");

menuIcon.addEventListener("click", () => {
	nav.classList.toggle("d-none");
});

closeNav.addEventListener("click", () => {
	nav.classList.toggle("d-none");
});

overlay.addEventListener("click", () => {
	nav.classList.toggle("d-none");
});

li.forEach(function (link) {
	link.addEventListener("click", () => {
		nav.classList.toggle("d-none");
	});
});

// faq

const faqList = document.querySelectorAll(".faq-item");
const faqAns = document.querySelectorAll(".faq-ans");
const faqAngle = document.querySelectorAll("fa-angle-down");

faqList.forEach(function (list) {
	const question = list.querySelector(".faq-question");

	question.addEventListener("click", () => {
		faqList.forEach(function (item) {
			if (item !== list) {
				item.classList.remove("show-ans");
			}
		});

		list.classList.toggle("show-ans");
	});
});

// registration

const signUp = document.querySelector(".sign-up");
const logIn = document.querySelector(".login");
const signUpBtn = document.querySelector("#signUpBtn");
const logInBtn = document.querySelector("#loginBtn");

signUpBtn.addEventListener("click", () => {
	if (signUp.classList.contains("d-none")) {
		logIn.classList.toggle("d-none");
		signUp.classList.toggle("d-none");
	}
});

logInBtn.addEventListener("click", () => {
	if (logIn.classList.contains("d-none")) {
		signUp.classList.toggle("d-none");
		logIn.classList.toggle("d-none");
	}
});

// password visibility

function togglePasswordVisibility(inputId) {
	let passwordInput = document.getElementById(inputId);
	let toggleBtn = passwordInput.nextElementSibling;

	if (passwordInput.type === "password") {
		passwordInput.type = "text";
	} else {
		passwordInput.type = "password";
	}
}

let toggleIcons = document.querySelectorAll(".toggle-password");

toggleIcons.forEach((icon) => {
	icon.addEventListener("click", () => {
		if (icon.classList.contains("fa-eye-slash")) {
			icon.classList.remove("fa-eye-slash");
			icon.classList.add("fa-eye");
		} else {
			icon.classList.remove("fa-eye");
			icon.classList.add("fa-eye-slash");
		}
	});
});
