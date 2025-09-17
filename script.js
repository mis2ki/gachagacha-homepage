function openModal(imageSrc, description) {
  document.getElementById('modal-image').src = imageSrc;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
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
