document.addEventListener('DOMContentLoaded', (event) => {
    const popupOverlay = document.getElementById('popup-overlay');
    const closeButton = document.getElementById('close-popup');
    // Change this line: target the <button> element instead of the <a>
    const contactButton = document.querySelector('.popup-content .contact-button'); 
    const contactButtonLink = document.querySelector('.popup-content .contact-button a'); // Still need reference to the <a> for its href

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

    // --- Modified logic for the contact button within the pop-up ---
    if (contactButton && contactButtonLink) { // Check if both elements exist
        // Attach the event listener to the <button> itself
        contactButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default if button type="submit" or other default actions

            // 1. Hide the pop-up first
            hidePopup(); // Use your existing hide function

            // 2. Get the target section's ID from the href of the <a> tag
            const targetId = contactButtonLink.getAttribute('href'); // Get href from the <a>
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // 3. Smoothly scroll to the target section
                // Using a short delay ensures the popup has finished hiding before the scroll
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 100); // A small delay (e.g., 100ms) can help
            }
        });
    }
});