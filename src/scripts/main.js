'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const tableBody = document.querySelector('tbody');

function updateButtons() {
  const rows = tableBody.querySelectorAll('tr');
  const columns = rows[0].children.length;

  appendRowBtn.disabled = rows.length >= 10;
  removeRowBtn.disabled = rows.length <= 2;
  appendColumnBtn.disabled = columns >= 10;
  removeColumnBtn.disabled = columns <= 2;
}

appendRowBtn.addEventListener('click', function () {
  const rows = tableBody.querySelectorAll('tr');

  if (rows.length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < rows[0].children.length; i++) {
      newRow.appendChild(document.createElement('td'));
    }

    tableBody.append(newRow);
    updateButtons();
  }
});

removeRowBtn.addEventListener('click', function () {
  if (tableBody.children.length > 2) {
    tableBody.lastElementChild.remove();
    updateButtons();
  }
});

appendColumnBtn.addEventListener('click', function () {
  const rows = tableBody.querySelectorAll('tr');

  if (rows[0].children.length < 10) {
    rows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });

    updateButtons();
  }
});

removeColumnBtn.addEventListener('click', function () {
  const rows = tableBody.querySelectorAll('tr');

  if (rows[0].children.length > 2) {
    rows.forEach((row) => {
      row.lastElementChild.remove();
    });

    updateButtons();
  }
});
