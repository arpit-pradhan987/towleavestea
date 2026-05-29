

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
});

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
        nav.classList.remove("menu-open");
    }
});


const cards = document.querySelector(".cards");

document.querySelector(".right").onclick = () => {
    cards.scrollBy({ left: 400, behavior: "smooth" });
};

document.querySelector(".left").onclick = () => {
    cards.scrollBy({ left: -400, behavior: "smooth" });
};

let isDown = false;
let startX;
let scrollLeft;

cards.addEventListener("mousedown", (e) => {
    isDown = true;
    cards.classList.add("active");
    startX = e.pageX - cards.offsetLeft;
    scrollLeft = cards.scrollLeft;
});

cards.addEventListener("mouseleave", () => { isDown = false; });
cards.addEventListener("mouseup", () => { isDown = false; });

cards.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cards.offsetLeft;
    const walk = (x - startX) * 0.8;
    cards.scrollLeft = scrollLeft - walk;
});


const lenis = new Lenis({
    lerp: 0.06,
    autoRaf: true,
});



const revealTargets = [
    { selector: '.section2 h1', cls: '' },
    { selector: '.best', cls: '' },
    { selector: '.discover-btn', cls: '' },
    { selector: '.sec3-data h1', cls: '' },
    { selector: '.search-box', cls: '' },
    { selector: '.section4 h1', cls: '' },
    { selector: '.section4 h2', cls: '' },
    { selector: '.sec4-logo', cls: '' },
    { selector: '.sec5-logo', cls: '' },
    { selector: '.sec5-title', cls: '' },
    { selector: '.latte-btn', cls: '' },
    { selector: '.section7 h1', cls: '' },
    { selector: '.journal-btn', cls: '' },
    { selector: '.sec8-title', cls: '' },
    { selector: '.sec9-div', cls: 'from-left' },
    { selector: '.footer-title', cls: '' },
    { selector: '.footer-para', cls: '' },
    { selector: '.sec4-cont', cls: '' },
    { selector: '.sec6-div img', cls: 'from-left' },
    { selector: '.sec6-div2', cls: 'from-right' },
    { selector: '.sec7-card1', cls: '' },
    { selector: '.sec7-cardbtn', cls: '' },
    { selector: '.vibe-tags', cls: '' },
];

revealTargets.forEach(({ selector, cls }) => {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal');
        if (cls) el.classList.add(cls);
    });
});

document.querySelector('.sec5-cards')?.classList.add('reveal-stagger');
document.querySelectorAll('.sec5-card').forEach(el => el.classList.add('reveal'));

document.querySelector('.sec8-cards')?.classList.add('reveal-stagger');
document.querySelectorAll('.sec8-card').forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
});


document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.complete) {
        img.classList.add('loaded');
    } else {
        img.addEventListener('load', () => img.classList.add('loaded'));
    }
});