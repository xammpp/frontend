// Pengaturan tranparan
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      // Ganti 50 dengan jarak scroll yang diinginkan
      navbar.classList.add('navbar-scrolled');
      navbar.classList.remove('navbar-transparent');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('navbar-scrolled');
    }
  });
});

// Pengaturan hamburger button
document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('#navbarNav');

  document.addEventListener('click', function (event) {
    // Jika klik di luar navbar-toggler dan navbar-collapse, tutup navbar-collapse
    if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  });
});

// Pengaturan link active
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function setActiveLink() {
    var scrollPosition = window.scrollY + 50; // Tambahkan offset jika perlu

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        var currentId = section.getAttribute('id');
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // Set active link on page load
});

// Pengaturan menutup hamburger ketikat memilih link
document.addEventListener('DOMContentLoaded', function () {
  // Ambil elemen navbar collapse
  var navbarCollapse = document.getElementById('navbarNav');

  // Jika navbarCollapse tidak ditemukan, keluar dari fungsi
  if (!navbarCollapse) return;

  // Ambil semua link di dalam navbar
  var navLinks = navbarCollapse.querySelectorAll('a.nav-link');

  // Tambahkan event listener untuk setiap link
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Tutup navbar collapse ketika link diklik
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    });
  });
});

// active
document.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const activeLink = document.querySelector('.navbar-nav .nav-link.active-before-scroll');
  const homeLink = document.querySelector('.navbar-nav .nav-link.home-link');

  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
    if (activeLink) {
      activeLink.classList.remove('active-before-scroll');
      activeLink.classList.add('active-after-scroll');
    }
    if (homeLink) {
      homeLink.style.color = '#fff'; // Ubah warna link Home menjadi putih setelah scroll
    }
  } else {
    navbar.classList.remove('navbar-scrolled');
    if (activeLink) {
      activeLink.classList.remove('active-after-scroll');
      activeLink.classList.add('active-before-scroll');
    }
    if (homeLink) {
      homeLink.style.color = '#fff'; // Kembalikan warna link Home ke putih saat tidak discroll
    }
  }
});
