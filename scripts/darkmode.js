
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#mode');
    const body = document.body; // Cambia #content a body

    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode'); // Agrega la clase 'dark-mode' al cuerpo
        } else {
            body.classList.remove('dark-mode'); // Remueve la clase 'dark-mode' del cuerpo
        }
    });
});
