window.addEventListener('scroll', function() {
  const pageTwo = document.querySelector('.page-two');
  const pageTwoPosition = pageTwo.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (pageTwoPosition < screenHeight / 2) {
    pageTwo.style.opacity = '1'; /* Faire apparaître la deuxième page */
  } else {
    pageTwo.style.opacity = '0'; /* Masquer la deuxième page */
  }
});
