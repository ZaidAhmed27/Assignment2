// Get references to the featured image, thumbnail list, and caption element
const featuredImage = document.getElementById('featured-image');
const thumbnailList = document.getElementById('thumbnail-list');
const captionElement = document.getElementById('image-caption');

const galleryItems = [
  {
    largeImage: 'images/flowers-pink-large.jpg',
    thumbnail: 'images/flowers-pink-small.jpg',
    caption: 'Market in Münster, North Rhine-Westphalia, Germany '
  },
  {
    largeImage: 'images/flowers-purple-large.jpg',
    thumbnail: 'images/flowers-purple-small.jpg',
    caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany'
  },
  {
    largeImage: 'images/flowers-red-large.jpg',
    thumbnail: 'images/flowers-red-small.jpg',
    caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany'
  },
  {
    largeImage: 'images/flowers-white-large.jpg',
    thumbnail: 'images/flowers-white-small.jpg',
    caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany'
  },
  {
    largeImage: 'images/flowers-yellow-large.jpg',
    thumbnail: 'images/flowers-yellow-small.jpg',
    caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany'
  }
  // Add more gallery items here as needed
];

// Function to update the gallery when a thumbnail is clicked
function updateGallery(item, thumbnailImage) {
    // Remove the 'selected-thumbnail' class from all thumbnails
    const thumbnails = thumbnailList.getElementsByTagName('img');
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove('selected-thumbnail');
      thumbnails[i].style.filter = 'grayscale(100%)'; // Apply grayscale filter to inactive thumbnails
    }
  
    // Update the featured image
    featuredImage.src = item.largeImage;
    featuredImage.style.filter = 'none'; // Remove grayscale filter from the current thumbnail image
  
    // Update the caption
    captionElement.textContent = item.caption;
  
    // Add the 'selected-thumbnail' class to the clicked thumbnail
    thumbnailImage.classList.add('selected-thumbnail');
    thumbnailImage.style.filter = 'none'; // Remove grayscale filter from the clicked thumbnail
  }

// Dynamically build the thumbnail list
galleryItems.forEach(function (item) {
  // Create a new list item
  const listItem = document.createElement('li');

  // Create a new image element
  const thumbnailImage = document.createElement('img');
  thumbnailImage.src = item.thumbnail;
  // Set the width and height attributes of the thumbnail image as needed

  // Add a click event listener to the thumbnail image
  thumbnailImage.addEventListener('click', function () {
    updateGallery(item, thumbnailImage);
  });

  // Append the thumbnail image to the list item
  listItem.appendChild(thumbnailImage);

  // Append the list item to the thumbnail list
  thumbnailList.appendChild(listItem);
});

// Set the initial gallery item as the first one
updateGallery(galleryItems[0], thumbnailList.getElementsByTagName('img')[0]);

