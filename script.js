// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Skills bar animation
const skillBars = document.querySelectorAll('.skill .bar i');
skillBars.forEach(bar => {
  const width = bar.getAttribute('data-width');
  setTimeout(() => {
    bar.style.width = width;
  }, 500);
});

// Contact form button feedback
const sendBtn = document.getElementById('sendMsg');
if(sendBtn){
  sendBtn.addEventListener('click', () => {
    const msgStatus = document.getElementById('msgStatus');
    msgStatus.textContent = 'Message sent! 🎉';
    msgStatus.style.color = '#6e8efb';
  });
}
