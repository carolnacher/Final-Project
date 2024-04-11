
const baseURL = "https://carolnacher.github.io/wdd230";
const rentalsURL = "https://carolnacher.github.io/wdd230/chamber/data/rentals.json";
const rentalsContainer = document.querySelector('#rentals');

async function getRentals() {
  try {
    const response = await fetch(rentalsURL);
    const data = await response.json();
    displayRentals(data.rentals);
  } catch (error) {
    console.error('Error fetching rentals data:', error);
  }
}

function displayRentals(rentals) {
  rentalsContainer.innerHTML = '';

  rentals.forEach((rental) => {
    const rentalCard = document.createElement('div');
    rentalCard.classList.add('rental-card');

    const title = document.createElement('h2');
    title.textContent = rental.vehicle;
    rentalCard.appendChild(title);

    const detailsList = document.createElement('ul');
    const details = [
      `Max Persons: ${rental.max_persons}`,
      `Reservation Half Day: $${rental.reservation_half_day}`,
      `Reservation Full Day: $${rental.reservation_full_day}`,
      `Walk-in Half Day: $${rental.walk_in_half_day}`,
      `Walk-in Full Day: $${rental.walk_in_full_day}`
    ];

    details.forEach((detail) => {
      const detailItem = document.createElement('li');
      detailItem.textContent = detail;
      detailsList.appendChild(detailItem);
    });

    rentalCard.appendChild(detailsList);
    rentalsContainer.appendChild(rentalCard);
  });
}

getRentals();
