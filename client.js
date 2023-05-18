const likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', () => {
  const isActive = likeButton.classList.contains('active');

  if (isActive) {
    unlike();
  } else {
    like();
  }
});

function like() {
  likeButton.classList.add('active');

  // Stuur een verzoek naar de server om de like op te slaan
  fetch('/like', { method: 'POST' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function unlike() {
  likeButton.classList.remove('active');

  // Stuur een verzoek naar de server om de like te verwijderen
  fetch('/unlike', { method: 'POST' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}