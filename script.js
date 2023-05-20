// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
const texts = ["Photo Editor", "Video Editor", "Web devloper", "3d Animator"];
const speed = 2000; // Speed (in milliseconds) at which texts change

const typingText = document.querySelector('.typing-text');
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed / texts[textIndex].length);
    } else {
        setTimeout(erase, speed);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, speed / texts[textIndex].length);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, speed / 2);
    }
}

type();