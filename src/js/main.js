import noFollow from './modules/link-blank';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.f-anim');
sections.forEach((section) => {
    gsap.fromTo(
        section.children,
        {
            y: '+=70',
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.4,
            duration: 1.2,
            ease: 'easeInOut',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'center 70%',
                scrub: 0.8,
                // markers: true,
            },
        },
    );
});

const sectionsHero = document.querySelectorAll('.f-anim-hero');
sectionsHero.forEach((sectionHero) => {
    gsap.fromTo(
        sectionHero.children,
        {
            y: '+=70',
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.4,
            duration: 1.2,
            ease: 'easeInOut',
        },
    );
});

const numbers = document.querySelector('.industry__list');
let tlNumbers = gsap.timeline({
    scrollTrigger: {
        trigger: numbers,
        start: 'top 90%',
        // end: "top +=100px",
        // anticipatePin: 1,
        // scrub: 1,
    },
    smoothChildTiming: true,
});

const count1 = document.querySelector('.count1');
const count2 = document.querySelector('.count2');
const count3 = document.querySelector('.count3');
const count4 = document.querySelector('.count4');

let count = { val: 0 };
let newVal1 = 534000;
let newVal2 = 34.5;
let newVal3 = 7.2;
let newVal4 = 7.7;
tlNumbers
    .to(count, {
        duration: 2,
        delay: 0.5,
        ease: 'power1.in',
        val: newVal1,
        roundProps: 'val',
        // snap: { textContent: 0 },
        onUpdate: () => {
            count1.innerHTML = count.val;
        },
        onComplete: () => {
            count1.innerHTML = '534,000';
        },
    })
    .to(
        count,
        {
            duration: 2,
            delay: 0.5,
            ease: 'power1.in',
            // snap: { textContent: 1 },
            val: newVal2,
            roundProps: 'val',
            onUpdate: () => {
                count2.innerHTML = count.val;
            },
            onComplete: () => {
                count2.innerHTML = '34.5';
            },
        },
        '-=3s',
    )
    .to(
        count,
        {
            duration: 2,
            delay: 0.5,
            val: newVal3,
            roundProps: 'val',
            ease: 'power1.in',
            // snap: { textContent: 0 },
            onUpdate: () => {
                count3.innerHTML = count.val;
            },
            onComplete: () => {
                count3.innerHTML = '7.2';
            },
        },
        '-=3s',
    )
    .to(
        count,
        {
            duration: 2,
            delay: 0.5,
            val: newVal3,
            roundProps: 'val',
            ease: 'power1.in',
            // snap: { textContent: 0 },
            onUpdate: () => {
                count4.innerHTML = count.val;
            },
            onComplete: () => {
                count4.innerHTML = '7.7';
            },
        },
        '-=3s',
    );

const initJS = () => {
    console.log('Init from js');
    noFollow();
};

window.addEventListener('load', () => {
    initJS();
});
