
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menu-toggle');
            const navOverlay = document.getElementById('nav-overlay');
            const navLinks = document.querySelectorAll('.nav-link');
            const body = document.body;
            const header = document.getElementById('main-header');

            // --- Toggle Navigation Menu ---
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                navOverlay.classList.toggle('active');
                body.classList.toggle('no-scroll');
            });

            // --- Close menu when a link is clicked ---
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    navOverlay.classList.remove('active');
                    body.classList.remove('no-scroll');
                });
            });

            // --- Header scroll effect ---
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // --- Scroll Animation Observer ---
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });

            const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
            elementsToAnimate.forEach(el => {
                observer.observe(el);
            });
        })