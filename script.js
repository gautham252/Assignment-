fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const tableBody = document.getElementById('employeeTable');
    tableBody.innerHTML = ''; 

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    document.getElementById('employeeTable').innerHTML = `
      <tr><td colspan="3">Error loading data</td></tr>
    `;
    console.error('Error fetching users:', error);
  });
