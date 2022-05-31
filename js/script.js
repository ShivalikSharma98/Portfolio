// Constants for sections
const nav = document.querySelector('.nav-page-container');
const home = document.querySelector('.home-page-container');
const bio = document.querySelector('.bio-container');
const resume = document.querySelector('.resume-container');
const projects = document.querySelector('.projects-container');
const message = document.querySelector('.message-container');

// Constants for buttons
const navBtn = document.querySelector('.hamburger-icon-link')
const homeBtn = document.querySelector('#home-link')
const bioBtn = document.querySelector('#bio-link');
const resumeBtn = document.querySelector('#resume-link');
const projectsBtn = document.querySelector('#projects-link');
const messageBtn = document.querySelector('#message-link');

// event listeners
navBtn.addEventListener('click', function(event) {
	event.preventDefault();
	nav.classList.remove('hide');
	home.classList.add('hide');
	bio.classList.add('hide');
	resume.classList.add('hide');
	projects.classList.add('hide');
	message.classList.add('hide');
})
homeBtn.addEventListener('click', function (event) {
	event.preventDefault();
	home.classList.remove('hide');
	nav.classList.add('hide');
	bio.classList.add('hide');
	resume.classList.add('hide');
	projects.classList.add('hide');
	message.classList.add('hide');
});
bioBtn.addEventListener('click', function (event) {
	event.preventDefault();
	bio.classList.remove('hide');
	nav.classList.add('hide');
	home.classList.add('hide');
	resume.classList.add('hide');
	projects.classList.add('hide');
	message.classList.add('hide');
});
resumeBtn.addEventListener('click', function (event) {
	event.preventDefault();
	resume.classList.remove('hide');
	nav.classList.add('hide');
	home.classList.add('hide');
	bio.classList.add('hide');
	projects.classList.add('hide');
	message.classList.add('hide');
});
projectsBtn.addEventListener('click', function (event) {
	event.preventDefault();
	projects.classList.remove('hide');
	nav.classList.add('hide');
	home.classList.add('hide');
	bio.classList.add('hide');
	resume.classList.add('hide');
	message.classList.add('hide');
});
messageBtn.addEventListener('click', function (event) {
	event.preventDefault();
	message.classList.remove('hide');
	nav.classList.add('hide');
	home.classList.add('hide');
	bio.classList.add('hide');
	resume.classList.add('hide');
	projects.classList.add('hide');
});

// Submit form
