const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Hapus kelas 'active' dari semua elemen
    navLinks.forEach((nav) => nav.classList.remove('active'));

    // Tambahkan kelas 'active' ke elemen yang diklik
    link.classList.add('active');
  });
});

const navbar = document.querySelector('.navbar');

// Tambahkan event listener saat halaman di-scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled'); // Tambahkan kelas saat scroll > 50px
  } else {
    navbar.classList.remove('navbar-scrolled'); // Hapus kelas jika kembali ke atas
  }
});
