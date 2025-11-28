// Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Skill Bar Animation
window.addEventListener('load', () => {
  const skillBars = document.querySelectorAll('.skill .bar i');
  skillBars.forEach(bar => {
    bar.style.width = bar.getAttribute('data-width');
  });
});

// Contact Form Message Animation
document.getElementById('sendMsg').addEventListener('click', () => {
  const msgStatus = document.getElementById('msgStatus');
  msgStatus.style.color = '#2575fc';
  msgStatus.textContent = 'Message Sent Successfully!';
  msgStatus.style.opacity = 1;
  setTimeout(() => {
    msgStatus.style.opacity = 0;
  }, 3000);
});
