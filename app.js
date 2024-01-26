function calculateGrade() {
    const percentage = parseFloat(document.getElementById('percentageInput').value);

    if (isNaN(percentage)) {
      alert('Please enter a valid number.');
      return;
    }

    let grade = '';

    if (percentage < 50) {
      grade = 'Fail';
    } else if (percentage >= 50 && percentage < 60) {
      grade = 'Grade B';
    } else if (percentage >= 60 && percentage < 70) {
      grade = 'Grade A';
    } else if (percentage >= 70 && percentage < 80) {
      grade = 'Grade A+';
    } else {
      grade = 'Grade A-one';
    }

    const gradeResult = document.getElementById('gradeResult');
    gradeResult.innerHTML = `<p>Your Percentage: ${percentage}%</p><p>Your Grade: ${grade}</p>`;
  }

  function generateTables() {
    const number = parseInt(document.getElementById('tableInput').value);

    if (isNaN(number)) {
      alert('Please enter a valid number.');
      return;
    }

    const tablesContainer = document.getElementById('tables');
    tablesContainer.innerHTML = '';

    for (let i = number; i <= 20; i++) {
      const tableContainer = document.createElement('div');
      tableContainer.classList.add('table-container');

      const table = document.createElement('table');
      const tableHeader = table.createTHead();
      const headerRow = tableHeader.insertRow();
      headerRow.insertCell().textContent = 'Multiplication Table for ' + i;

      const tableBody = table.createTBody();

      for (let j = 1; j <= 10; j++) {
        const row = tableBody.insertRow();
        row.insertCell().textContent = j;
        row.insertCell().textContent = j * i;
      }

      tableContainer.appendChild(table);
      tablesContainer.appendChild(tableContainer);
    }
  }