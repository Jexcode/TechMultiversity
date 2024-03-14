// Nav and menu controll

const menuIcon = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelector(".navlinks");
const closeNav = document.querySelector(".fa-xmark");
const li = document.querySelectorAll(".navlinks > li")

menuIcon.addEventListener('click', ()=>{
  nav.classList.toggle("d-none");
});

closeNav.addEventListener('click', ()=>{
  nav.classList.toggle("d-none");
});

overlay.addEventListener('click', ()=>{
  nav.classList.toggle("d-none");
});

li.forEach(function(link){
  link.addEventListener('click', ()=>{
    nav.classList.toggle("d-none");
  })
});



// faq

const faqList = document.querySelectorAll(".faq-item");
const faqAns = document.querySelectorAll(".faq-ans");
const faqAngle = document.querySelectorAll("fa-angle-down");


faqList.forEach(function (list){
  const question = list.querySelector('.faq-question');
  
question.addEventListener('click', ()=>{
  
  faqList.forEach(function (item){
    if (item !== list) {
      item.classList.remove('show-ans');
    }
  });
  
  list.classList.toggle('show-ans');
})
})

