// Cargar el archivo JSON y mostrar la información
fetch('ruta/al/archivo.json')
  .then(response => response.json())
  .then(data => {
    const display = document.querySelector("article");

    // Función para mostrar los datos en formato de lista
    function showList() {
      // Eliminar la clase 'grid' y agregar la clase 'list' al contenedor
      display.classList.remove("grid");
      display.classList.add("list");
    }

    // Función para mostrar los datos en formato de cuadrícula
    function showGrid() {
      // Eliminar la clase 'list' y agregar la clase 'grid' al contenedor
      display.classList.remove("list");
      display.classList.add("grid");
    }

    // Agregar listeners a los botones para cambiar entre vista de lista y cuadrícula
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");

    gridbutton.addEventListener("click", showGrid);
    listbutton.addEventListener("click", showList);

    // Función para mostrar los datos en el formato deseado
    function renderData(format) {
      // Limpiar el contenedor antes de agregar nuevos elementos
      display.innerHTML = '';

      // Iterar sobre los vehículos en el JSON
      data.vehicles.forEach(vehicle => {
        // Crear elementos HTML para mostrar la información de cada vehículo
        const section = document.createElement('section');
        const image = document.createElement('img');
        const heading = document.createElement('h3');
        const paragraph = document.createElement('p');
        const detailsLink = document.createElement('a');

        // Asignar la información del vehículo a los elementos HTML
        image.src = 'ruta/de/la/imagen.jpg'; // Reemplazar con la ruta de la imagen del vehículo
        image.alt = vehicle.vehicle;
        heading.textContent = vehicle.vehicle;
        paragraph.textContent = `Max Persons: ${vehicle.max_persons}`;
        detailsLink.textContent = 'Details';
        detailsLink.href = 'ruta/de/los/detalles.html'; // Reemplazar con la ruta de los detalles del vehículo
        detailsLink.target = '_blank';

        // Agregar los elementos al contenedor
        section.appendChild(image);
        section.appendChild(heading);
        section.appendChild(paragraph);
        section.appendChild(detailsLink);
        display.appendChild(section);
      });

      // Mostrar los datos en el formato deseado
      if (format === 'grid') {
        showGrid();
      } else {
        showList();
      }
    }

    // Mostrar los datos en formato de cuadrícula por defecto al cargar la página
    renderData('grid');
  })
  .catch(error => console.error('Error fetching JSON:', error));
