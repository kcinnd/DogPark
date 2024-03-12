const images = document.querySelectorAll('.clickable-image');
const popupScreen = document.getElementById('popup-screen');
const sequence = [5, 2, 1, 4, 3];
let userInput = [];

images.forEach(image => {
    image.addEventListener('click', () => {
        userInput.push(parseInt(image.dataset.sequence));
        image.classList.add('clicked'); // Add the shading effect to clicked images

        if (userInput.length === sequence.length) {
            if (JSON.stringify(userInput) === JSON.stringify(sequence)) {
                popupScreen.classList.remove('hidden');
                popupScreen.classList.add('visible');
            } else {
                userInput = []; // Reset if the sequence is incorrect
                images.forEach(img => img.classList.remove('clicked')); // Remove the shading effect from all images
            }
        }
    });
});

// Optional: Close popup when clicked
popupScreen.addEventListener('click', () => {
    popupScreen.classList.add('hidden');
    popupScreen.classList.remove('visible');
    userInput = []; // Reset the sequence
    images.forEach(img => img.classList.remove('clicked')); // Remove the shading effect from all images
});
