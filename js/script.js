document.addEventListener('DOMContentLoaded', (event) => {
    const popupOverlay = document.getElementById('popup-overlay');
    const closeButton = document.getElementById('close-popup');

    // Function to show the pop-up
    function showPopup() {
        popupOverlay.classList.add('active');
    }

    // Function to hide the pop-up
    function hidePopup() {
        popupOverlay.classList.remove('active');
    }

    // Show the pop-up after 2 seconds
    setTimeout(showPopup, 2000); // 2000 milliseconds = 2 seconds

    // Close the pop-up when the close button is clicked
    closeButton.addEventListener('click', hidePopup);

    // Close the pop-up when clicking outside the content
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            hidePopup();
        }
    });

    // Optional: Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
            hidePopup();
        }
    });
});