document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Animate burger lines
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

    // --- Hide/Show Header on Scroll ---
    let prevScrollPos = window.scrollY;
    const header = document.querySelector('header');

    window.onscroll = function() {
        let currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
            // Scrolling Up: Show header
            header.style.top = "0";
        } else {
            // Scrolling Down: Hide header
            header.style.top = `-${header.offsetHeight}px`;
        }

        prevScrollPos = currentScrollPos;
    }

    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check for saved preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        // Toggle the dark-mode class on the body
        document.body.classList.toggle('dark-mode');

        // Save the preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});