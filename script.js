const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const dropBtns = document.querySelectorAll('.dropbtn');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

dropBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const dropdown = btn.nextElementSibling;
    dropdown.classList.toggle('show');
  });
});
