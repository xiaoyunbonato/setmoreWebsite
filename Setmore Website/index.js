const scrollLine = document.querySelector('.scroll-line');

function fillScrollLine() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight) * 100);
  scrollLine.style.width = percentScrolled + '%';
  scrollLine.style.width = `${percentScrolled}%` ;
  
}


window.addEventListener('scroll', fillScrollLine);








