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

console.log(logIn);

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

let passwordInput = document.querySelector(".password");
let toggleIcon = document.querySelectorAll(".toggle-password");

toggleIcon.addEventListener("click", togglePasswordVisibility);

toggleIcon.forEach(function togglePasswordVisibility() {
	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		toggleIcon.classList.remove("fa-eye-slash");
		toggleIcon.classList.add("fa-eye");
	} else {
		passwordInput.type = "password";
		toggleIcon.classList.remove("fa-eye");
		toggleIcon.classList.add("fa-eye-slash");
	}
});
