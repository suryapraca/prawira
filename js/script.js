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

// Mobile Menu Logic (Global Functions)
function toggleMobileMenu() {
    console.log("Toggle menu called");
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar');

    if (mobileMenu && mobileMenuBtn) {
        mobileMenu.classList.toggle('hidden');

        // Toggle background color when menu opens
        if (!mobileMenu.classList.contains('hidden')) {
            navbar.classList.add('bg-gray-900');
            navbar.classList.remove('bg-transparent');
        } else {
            if (window.scrollY <= 50) {
                navbar.classList.remove('bg-gray-900');
                navbar.classList.add('bg-transparent');
            }
        }

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
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar');

    if (mobileMenu && mobileMenuBtn) {
        mobileMenu.classList.add('hidden');

        // Restore transparent bg if scrolled to top
        if (window.scrollY <= 50) {
            navbar.classList.remove('bg-gray-900');
            navbar.classList.add('bg-transparent');
        }

        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

// Attach Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');

        if (mobileMenu && !mobileMenu.classList.contains('hidden') &&
            !mobileMenu.contains(e.target) &&
            !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
});

// Chat Logic is handled in js/chat.js to avoid variable collisions
