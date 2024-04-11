document.addEventListener("DOMContentLoaded", function () {
  fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
          const tbody = document.querySelector('tbody');
          data.forEach(rental => {
              const row = document.createElement('tr');
              row.innerHTML = `
              <td class="vehicle-image">
                  <img src="${rental.image}" alt="${rental.type}"></td>
                  <td>${rental.type}</td>
                  <td>${rental.max_persons}</td>
                  <td>${rental.half_day_price.reservation}</td>
                  <td>${rental.full_day_price.reservation}</td>
              `;
              tbody.appendChild(row);
          });
      })
      .catch(error => console.error('Error fetching rental data:', error));
});