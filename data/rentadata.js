fetch('data\rentatype.json')
  .then(response => response.json())
  .then(data => {
    const display = document.querySelector("article");

    function showList() {
      display.classList.remove("grid");
      display.classList.add("list");
    }

    function showGrid() {
      display.classList.remove("list");
      display.classList.add("grid");
    }

    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");

    gridbutton.addEventListener("click", showGrid);
    listbutton.addEventListener("click", showList);

    function renderData(format) {
      display.innerHTML = '';

      data.vehicles.forEach(vehicle => {
        const section = document.createElement('section');
        const image = document.createElement('img');
        const heading = document.createElement('h3');
        const paragraph = document.createElement('p');
        const detailsLink = document.createElement('a');

        image.src = `images/${vehicle.vehicle.replace(/\s+/g, '-').toLowerCase()}.webp`;
        image.alt = vehicle.vehicle;
        heading.textContent = vehicle.vehicle;
        paragraph.textContent = `Max Persons: ${vehicle.max_persons}`;
        detailsLink.textContent = 'Details';
        detailsLink.href = vehicle.details_link;
        detailsLink.target = '_blank';

        section.appendChild(image);
        section.appendChild(heading);
        section.appendChild(paragraph);
        section.appendChild(detailsLink);
        display.appendChild(section);
      });

      if (format === 'grid') {
        showGrid();
      } else {
        showList();
      }
    }

    renderData('grid');
  })
  .catch(error => console.error('Error fetching JSON:', error));
