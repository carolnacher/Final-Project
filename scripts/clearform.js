document.getElementById('clearForm').addEventListener('click', function() {
    document.getElementById('fname').value = ''; 
    document.getElementById('lname').value = ''; 
    document.getElementById('email').value = '';
    document.getElementById('phone-number').value = ''; 
    document.getElementById('country').selectedIndex = 0; 
    document.getElementById('state').value = ''; 
    document.getElementById('arrival-date').value = ''; 
    document.getElementById('departure-date').value = ''; 
    document.getElementById('rental-period').selectedIndex = 0; 
    document.querySelector('input[name="rentaltype"]:checked').checked = false; 
    document.getElementById('Cruisename').value = ''; 
    document.getElementById('Hname').value = ''; 
    document.getElementById('comments').value = ''; 
});
