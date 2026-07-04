/* ==========================================
   ELEMENT
========================================== */

const menuButton = document.getElementById("menuButton");

const sidebar = document.getElementById("sidebar");



/* ==========================================
   OPEN SIDEBAR
========================================== */

menuButton.addEventListener("click", function (event) {

    event.stopPropagation();

    sidebar.classList.toggle("active");

});



/* ==========================================
   CLOSE WHEN CLICK OUTSIDE
========================================== */

document.addEventListener("click", function (event) {

    const clickInsideSidebar = sidebar.contains(event.target);

    const clickMenuButton = menuButton.contains(event.target);

    if (!clickInsideSidebar && !clickMenuButton) {

        sidebar.classList.remove("active");

    }

});



/* ==========================================
   PREVENT SIDEBAR CLICK
========================================== */

sidebar.addEventListener("click", function (event) {

    event.stopPropagation();

});



/* ==========================================
   CLOSE WITH ESC
========================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        sidebar.classList.remove("active");

    }

});



/* ==========================================
   CLOSE WHEN NAVIGATION CLICKED
========================================== */

const navLinks = document.querySelectorAll(".navbar-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        sidebar.classList.remove("active");

    });

});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.padding = "14px 9%";

        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

        navbar.style.background = "rgba(255,255,255,.95)";

    }

    else {

        navbar.style.padding = "18px 9%";

        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

        navbar.style.background = "rgba(255,255,255,.88)";

    }

});



/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

    ".country, .orientasi, .rangkuman, .penutup"

);

const revealObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},

{

    threshold:0.15

}

);



revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all .7s ease";

    revealObserver.observe(element);

});



/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("main section");

const navigationLinks = document.querySelectorAll(".navbar-menu a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const target = link.getAttribute("href").substring(1);

        if (target === currentSection) {

            link.classList.add("active");

        }

    });

});



/* ==========================================
   SMOOTH SCROLL
========================================== */

navigationLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.createElement("button");

backToTop.id = "backToTop";

backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);



/* ==========================================
   BACK TO TOP STYLE
========================================== */

Object.assign(backToTop.style,{

    position:"fixed",

    right:"25px",

    bottom:"25px",

    width:"50px",

    height:"50px",

    border:"none",

    borderRadius:"50%",

    background:"#336B87",

    color:"#fff",

    fontSize:"22px",

    cursor:"pointer",

    boxShadow:"0 8px 20px rgba(0,0,0,.2)",

    opacity:"0",

    visibility:"hidden",

    transition:".3s",

    zIndex:"999"

});



/* ==========================================
   SHOW BUTTON
========================================== */

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.style.opacity="1";

        backToTop.style.visibility="visible";

    }

    else{

        backToTop.style.opacity="0";

        backToTop.style.visibility="hidden";

    }

});



/* ==========================================
   BACK TO TOP CLICK
========================================== */

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/* ==========================================
   IMAGE FALLBACK
========================================== */

const images=document.querySelectorAll("img");

images.forEach(image=>{

    image.loading="lazy";

    image.decoding="async";

    image.addEventListener("error",()=>{

        image.src="images/not-found.jpg";

    });

});



/* ==========================================
   BUTTON HOVER
========================================== */

backToTop.addEventListener("mouseenter",()=>{

    backToTop.style.transform="scale(1.1)";

    backToTop.style.background="#763626";

});



backToTop.addEventListener("mouseleave",()=>{

    backToTop.style.transform="scale(1)";

    backToTop.style.background="#336B87";

});



/* ==========================================
   CURRENT YEAR
========================================== */

const footerText=document.querySelector("footer p");

if(footerText){

    footerText.innerHTML=

    `&copy; ${new Date().getFullYear()} Linkko TM`;

}



/* ==========================================
   PERFORMANCE
========================================== */

let ticking=false;

window.addEventListener("scroll",()=>{

    if(!ticking){

        window.requestAnimationFrame(()=>{

            ticking=false;

        });

        ticking=true;

    }

});



/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});



/* ==========================================
   FINISH
========================================== */

console.log(

    "Website berhasil dimuat."

);

