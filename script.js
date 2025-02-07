document.addEventListener('DOMContentLoaded', function() {

    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        navItems.forEach((item, index) => {
            item.style.setProperty('--nav-item-delay', index);
        });

        burger.querySelectorAll('div').forEach((line, index) => {
            if (index === 0) {
                line.classList.toggle('line1-active');
            } else if (index === 1) {
                line.classList.toggle('line2-active');
            } else {
                line.classList.toggle('line3-active');
            }
        });
    });

    let prevScrollPos = window.scrollY;
    const header = document.querySelector('header');

    window.onscroll = function() {
        let currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = `-${header.offsetHeight}px`;
        }

        prevScrollPos = currentScrollPos;
    }

    const darkModeToggle = document.getElementById('dark-mode-toggle');

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});