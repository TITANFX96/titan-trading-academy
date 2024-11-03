document.querySelectorAll('.interactive-image').forEach(image => {
    image.addEventListener('click', () => {
      const imageName = image.alt; // Get the alt text for more context
      alert(`You clicked on: ${imageName}`);
      // You can also add more functionality here, like:
      // window.location.href = 'another-page.html'; // Redirect to another page
      // Or show more details about the image in a modal
    });
  });
  