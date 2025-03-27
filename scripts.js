document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value;
    if (searchTerm) {
        fetchImages(searchTerm);
    }
});

function fetchImages(query) {
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=YOUR_ACCESS_KEY`; // החליפי ב-API KEY שלך
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const images = data.results;
            const gallery = document.querySelector('.image-gallery');
            gallery.innerHTML = ''; // נקה את הגלריה הקודמת

            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.urls.small;
                imgElement.alt = image.alt_description;
                imgElement.addEventListener('click', () => openColoringPage(image.urls.full));
                gallery.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
}

function openColoringPage(imageUrl) {
    window.open(`/coloring.html?image=${encodeURIComponent(imageUrl)}`, '_blank');
}
