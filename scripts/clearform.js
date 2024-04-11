document.getElementById('clearForm').addEventListener('click', function() {
    document.getElementById('fname').value = ''; // Limpiar el campo de nombre
    document.getElementById('lname').value = ''; // Limpiar el campo de apellido
    document.getElementById('email').value = ''; // Limpiar el campo de email
    document.getElementById('phone-number').value = ''; // Limpiar el campo de teléfono
    document.getElementById('country').selectedIndex = 0; // Restablecer la selección del país
    document.getElementById('state').value = ''; // Limpiar el campo de estado
    document.getElementById('arrival-date').value = ''; // Limpiar el campo de fecha de llegada
    document.getElementById('departure-date').value = ''; // Limpiar el campo de fecha de salida
    document.getElementById('rental-period').selectedIndex = 0; // Restablecer la selección del período de alquiler
    document.querySelector('input[name="rentaltype"]:checked').checked = false; // Desmarcar las opciones de tipo de alquiler
    document.getElementById('Cruisename').value = ''; // Limpiar el campo de línea de cruceros
    document.getElementById('Hname').value = ''; // Limpiar el campo de alojamiento
    document.getElementById('comments').value = ''; // Limpiar el campo de comentarios
});
