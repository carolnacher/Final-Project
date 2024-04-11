fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    const select = document.getElementById('country');
    data.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name.common;
        option.text = country.name.common;
        select.appendChild(option);
    });
});