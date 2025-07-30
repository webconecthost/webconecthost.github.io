document.addEventListener('DOMContentLoaded', (event) => {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.querySelector('.popup-content');
    const closeButton = document.getElementById('close-popup');
    const body = document.body;

    // Function to adjust popup scale for zoom
    function adjustPopupScaleForZoom() {
        const zoomLevel = window.devicePixelRatio || 1;

        if (zoomLevel > 1.1) {
            popupContent.style.transform = 'scale(0.7)';
            popupContent.style.transformOrigin = 'center center';
        } else {
            popupContent.style.transform = 'scale(1)';
            popupContent.style.transformOrigin = 'center center';
        }
    }

    // Function to show the pop-up
    function showPopup() {
        popupOverlay.classList.add('active');
        body.classList.add('no-scroll');

        if (!popupContent.hasAttribute('tabindex')) {
            popupContent.setAttribute('tabindex', '-1');
        }

        popupContent.focus();
        adjustPopupScaleForZoom();
    }

    // Function to hide the pop-up
    function hidePopup() {
        popupOverlay.classList.remove('active');
        body.classList.remove('no-scroll');
        body.focus();
    }

    // Show the pop-up after a short delay
    setTimeout(showPopup, 2000);

    // Event listeners
    closeButton.addEventListener('click', hidePopup);

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            hidePopup();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
            hidePopup();
        }
    });

    // Optional: Respond to zoom/display scale change while popup is open
    window.addEventListener('resize', () => {
        if (popupOverlay.classList.contains('active')) {
            adjustPopupScaleForZoom();
        }
    });
});