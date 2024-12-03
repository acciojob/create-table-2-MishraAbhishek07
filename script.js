function createTable() {
    // Prompt the user for the number of rows and columns
    const rows = prompt("Input number of rows");
    const cols = prompt("Input number of columns");

    // Get the table element by its id
    const table = document.getElementById('myTable');

    // Clear any existing content in the table
    table.innerHTML = '';

    // Create the table rows and columns
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
