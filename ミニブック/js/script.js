function openModal(imageSrc, description) {
  document.getElementById('modal-image').src = imageSrc;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.querySelector('.overlay').style.display = 'none';
}
