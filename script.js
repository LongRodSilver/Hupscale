// Basic JavaScript for interactivity (minimal, as original has none; add more if needed)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Teal-themed GROWI website loaded.');

    // Example: Toggle dark mode if you add a button with id="toggle-dark-mode"
    const toggleButton = document.getElementById('toggle-dark-mode');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Add any other JS logic from your downloaded code here
});
