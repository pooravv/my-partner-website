// Scroll to specific sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Load movie list dynamically
document.addEventListener('DOMContentLoaded', () => {
  fetch('movies.json')
    .then(response => response.json())
    .then(movies => {
      const movieList = document.getElementById('movie-list');
      movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `🎬 ${movie}`;
        movieList.appendChild(li);
      });
    });
});

// Function to load photos for a specific month
function loadPhotos(month) {
  const gallery = document.getElementById('monthly-photos-gallery');
  gallery.innerHTML = ''; // Clear existing photos

  // Simulate fetching images for the selected month
  const images = [
    `images/${month}/photo1.jpg`,
    `images/${month}/photo2.jpg`,
    `images/${month}/photo3.jpg`
  ];

  // Dynamically load the images for the selected month
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
  });
}
