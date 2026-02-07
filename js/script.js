// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Setup Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-gray-900', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
            navbar.classList.remove('py-6');
            navbar.classList.add('py-4');
        } else {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                navbar.classList.remove('bg-gray-900', 'shadow-lg');
                navbar.classList.add('bg-transparent');
            } else {
                navbar.classList.add('bg-gray-900', 'shadow-lg');
                navbar.classList.remove('bg-transparent');
            }
            navbar.classList.remove('py-4');
            navbar.classList.add('py-6');
        }
    });
}

// Mobile Menu Toggle
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});

// Chat Logic is handled in js/chat.js to avoid variable collisions
