function openModal(imageSrc, description) {
  document.getElementById('modal-image').src = imageSrc;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal').style.display = 'block';
  document.querySelector('.overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.querySelector('.overlay').classList.remove('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});
