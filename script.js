const images = document.querySelectorAll('.clickable-image');
const popupScreen = document.getElementById('popup-screen');
const sequence = [5, 2, 1, 4, 3];
let userInput = [];

images.forEach(image => {
    image.addEventListener('click', () => {
        userInput.push(parseInt(image.dataset.sequence));
        if (userInput.length === sequence.length) {
            if (JSON.stringify(userInput) === JSON.stringify(sequence)) {
                popupScreen.classList.remove('hidden');
                popupScreen.classList.add('visible');
            } else {
                userInput = []; // Reset if the sequence is incorrect
            }
        }
    });
});

// Optional: Close popup when clicked
popupScreen.addEventListener('click', () => {
    popupScreen.classList.add('hidden');
    popupScreen.classList.remove('visible');
    userInput = []; // Reset the sequence
});
