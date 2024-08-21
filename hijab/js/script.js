document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.custom-navbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarNav');

  // Function to handle scroll event
  function handleScroll() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (window.scrollY >= sectionTop - navbar.offsetHeight && window.scrollY < sectionTop + sectionHeight - navbar.offsetHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href').substring(1);
      link.classList.toggle('active', href === current);
    });

    // Add or remove the 'solid' class based on scroll position
    if (window.scrollY > 50) {
      navbar.classList.add('solid');
    } else {
      navbar.classList.remove('solid');
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbar.offsetHeight,
          behavior: 'smooth',
        });

        // Set active class after smooth scrolling
        setTimeout(() => {
          handleScroll(); // Update active class after scroll
        }, 500); // Delay must match the scroll animation duration
      }
    });
  });

  // Initial call to handle scroll for setting active link on page load
  handleScroll();

  // Toggle navbar-collapse visibility
  navbarToggler.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior if necessary

    // Toggle the 'show' class on the navbar-collapse
    navbarCollapse.classList.toggle('show');

    // Adjust the navbar-toggler state based on visibility
    const isNavbarVisible = navbarCollapse.classList.contains('show');
    navbarToggler.classList.toggle('collapsed', !isNavbarVisible);
    navbarToggler.setAttribute('aria-expanded', isNavbarVisible ? 'true' : 'false');
  });

  // Close the navbar when a nav link is clicked (for smaller screens)
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 767) {
        navbarToggler.classList.add('collapsed');
        navbarToggler.setAttribute('aria-expanded', 'false');
        navbarCollapse.classList.remove('show');
      }
    });
  });
});
