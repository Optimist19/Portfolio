const  navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


if(navToggle){
	navToggle.addEventListener('click', ()=>{
		navMenu.classList.add('show-menu')
	})
}


if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}


// typing animation script
let typed = new Typed(".typing", {
	strings: ["Oluwasegun"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
})






const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills(){
	let itemClass = this.parentNode.className

	for(i = 0; i < skillsContent.length; i++){
		skillsContent[i].className = "skills__content skills__close"
	}
	if(itemClass === 'skills__content skills__close'){
		this.parentNode.className = 'skills__content skills__open'
	}
}


skillsHeader.forEach((el) =>{
	el.addEventListener('click', toggleSkills)
})


const educationHandler = document.getElementById("educationHandler");
const workHandler = document.getElementById("workHandler");
const education = document.getElementById("education");
const work = document.getElementById("work");



educationHandler.addEventListener('click', function(){
	education.style.display = 'block';
	work.style.display = 'none'

})
workHandler.addEventListener('click', function(){
	
	education.style.display = "none";
	
	work.style.display = "block";
})
console.log(work)

window.addEventListener('load', function(){
	work.style.display = 'none'
})








// services modal

// const modalViews = document.querySelectorAll('.services__modal'),
// modalBtns = document.querySelectorAll('.services__button'),
// modalCloses = document.querySelectorAll('.services__modal-close')


// let modal = function(modalClick){
// 	modalViews[modalClick].classList.add('active-modal')
// }

// modalBtns.forEach((modalBtn, i) =>{
// 	modalBtn.addEventListener('click', () =>{
// 		modal(i)
// 	})
// })


// modalCloses.forEach((modalClose) =>{
// 	modalClose.addEventListener('click', () =>{
// 		modalViews.forEach((modalView) =>{
// 			modalView.classList.remove('active-modal')
// 		})
// 	})
// })


// portfolio swiper

let swiperPortfolio = new Swiper('.portfolio__container', {
	cssMode: true,
	loop: true,

	navigation: { 
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// mousewheel: true,
	// keyboard: true,
})




// change background color

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// scroll up

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// dark/light theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
