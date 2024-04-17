// Nav and menu controll

const header = document.getElementById("header");
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

// scroll for nav

window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;

	if (scrollPosition > 50) {
		// Change 50 to the scroll position where you want to add the class
		header.classList.add("buttom-line");
	} else {
		header.classList.remove("buttom-line");
	}
});

// height generation for nav

let headerHeight = header.offsetHeight;

// Set the value of the CSS variable
const root = document.documentElement;
root.style.setProperty("--nav-h", headerHeight + "px");

// registration

const signUp = document.querySelector(".sign-up");
const logIn = document.querySelector(".login");
const signUpBtn = document.querySelector("#signUpBtn");
const logInBtn = document.querySelector("#loginBtn");
const resetPasswordBtn = document.querySelector("#resetPasswordBtn");
const passwordReset = document.querySelector(".password-reset");
const passwordResetBtn = document.querySelector("#passwordResetBtn");
const registerBottom = document.querySelector(".register-bottom");

let oldButtom = `
  <p>I accept Tech Multiversity's
	<a href="#" class="text-decoration-underline">Terms of Service</a> and <a href="#" class="text-decoration-underline">Privacy Policy</a>.</p>

	<p>Having troubles logging in?
	<a href="#" class="text-decoration-underline">Contact support</a>
	</p>
	`;

signUpBtn.addEventListener("click", () => {
	if (signUp.classList.contains("d-none")) {
		logIn.classList.add("d-none");
		signUp.classList.toggle("d-none");
		passwordReset.classList.add("d-none");
	}

	if (registerBottom.innerHTML !== oldButtom) {
		registerBottom.innerHTML = oldButtom;
	} else {
		registerBottom.innerHTML = oldButtom;
	}
});

logInBtn.addEventListener("click", () => {
	if (logIn.classList.contains("d-none")) {
		signUp.classList.add("d-none");
		logIn.classList.toggle("d-none");
		passwordReset.classList.add("d-none");
	}

	if (registerBottom.innerHTML !== oldButtom) {
		registerBottom.innerHTML = oldButtom;
	} else {
		registerBottom.innerHTML = oldButtom;
	}
});

resetPasswordBtn.addEventListener("click", () => {
	if (passwordReset.classList.contains("d-none")) {
		logIn.classList.add("d-none");
		signUp.classList.add("d-none");
		passwordReset.classList.toggle("d-none");

		let newButtom = `
		   <p>Back to
			<span class='link-tap' id='backToLogin'>Login</span></p>
			`;

		if (registerBottom.innerHTML !== newButtom) {
			registerBottom.innerHTML = newButtom;
		}
	}

	const backToLogin = document.querySelector("#backToLogin");

	backToLogin.addEventListener("click", () => {
		if (logIn.classList.contains("d-none")) {
			signUp.classList.add("d-none");
			logIn.classList.toggle("d-none");
			passwordReset.classList.add("d-none");
		}

		if (registerBottom.innerHTML !== oldButtom) {
			registerBottom.innerHTML = oldButtom;
		} else {
			registerBottom.innerHTML = oldButtom;
		}
	});
});

//registration pop

let startBtn = document.querySelectorAll(".startBtn");
let returnBtn = document.querySelector(".returnBtn");
const register = document.querySelector(".register");
const registerOverlay = document.querySelector(".register-overlay");
const formBtn = document.querySelector("#formBtn");

startBtn.forEach(function (start) {
	start.addEventListener("click", () => {
		register.classList.toggle("d-none");
		if (signUp.classList.contains("d-none")) {
			logIn.classList.toggle("d-none");
			signUp.classList.toggle("d-none");
		}
	});
});

formBtn.addEventListener("click", () => {
	register.classList.toggle("d-none");
});

registerOverlay.addEventListener("click", () => {
	register.classList.toggle("d-none");
});
returnBtn.addEventListener("click", () => {
	register.classList.toggle("d-none");

	if (logIn.classList.contains("d-none")) {
		signUp.classList.toggle("d-none");
		logIn.classList.toggle("d-none");
	}
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

// Password check match

function checkPasswordMatch() {
	let password = document.getElementById("passWord").value;
	let confirmPassword = document.getElementById("confirmPassword").value;
	let errorBox = document.getElementById("errorBox");

	if (password !== confirmPassword) {
		document.getElementById("errorBox").style.display = "block";
		errorBox.innerHTML = "Passwords do not match";
		errorBox.style.color = "red";
		errorBox.style.fontSize = "0.75rem";
		return false;
	} else {
		document.getElementById("errorBox").style.display = "none";
		return true;
	}
}

// stop form submit
let signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", function (event) {
	if (!checkPasswordMatch()) {
		event.preventDefault();
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
