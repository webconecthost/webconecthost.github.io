document.addEventListener('DOMContentLoaded', (event) => {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.querySelector('.popup-content'); // Get a reference to the popup content itself
    const closeButton = document.getElementById('close-popup');
    const body = document.body;

    // Function to show the pop-up
    function showPopup() {
        popupOverlay.classList.add('active');
        body.classList.add('no-scroll'); // Add no-scroll class to body

        // --- NEW: Focus the popup content to enable immediate scrolling ---
        // We'll give it a tabindex if it doesn't have one, to make it focusable
        if (!popupContent.hasAttribute('tabindex')) {
            popupContent.setAttribute('tabindex', '-1'); // -1 makes it focusable programmatically, but not via Tab key
        }
        popupContent.focus(); // Set focus to the popup content
        // --- END NEW ---
    }

    // Function to hide the pop-up
    function hidePopup() {
        popupOverlay.classList.remove('active');
        body.classList.remove('no-scroll');
        // Restore focus to the body or a relevant element on the main page after hiding
        body.focus();
    }

    // Show the pop-up after 2 seconds
    setTimeout(showPopup, 2000);

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