
<div class="gallery">
  <img src="images/thumb1.jpg" alt="Image 1" class="thumbnail" data-src="images/large1.jpg">
  <img src="images/thumb2.jpg" alt="Image 2" class="thumbnail" data-src="images/large2.jpg">
  <img src="images/thumb3.jpg" alt="Image 3" class="thumbnail" data-src="images/large3.jpg">
</div>

<!-- Lightbox Modal -->
<div id="lightbox" class="lightbox">
  <span class="close">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
</div>
// Select all thumbnail images
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Loop through each thumbnail
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    // Get the full-size image URL from the data-src attribute
    const fullImageUrl = this.getAttribute('data-src');
    lightboxImg.src = fullImageUrl;
    lightbox.style.display = 'block'; // Show the lightbox
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none'; // Hide the lightbox
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
