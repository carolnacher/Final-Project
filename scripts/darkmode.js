
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#mode');
    const body = document.body; 

    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode'); 
        } else {
            body.classList.remove('dark-mode'); 
        }
    });
});
