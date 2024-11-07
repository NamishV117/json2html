// json2html.js
export default function json2html(data) {
  const columns = ["Name", "Age", "Gender"]; // Define table columns

  let table = `<table data-user="namishv117@gmail.com">\n<thead>\n<tr>`;
  // Generate table headers
  table += columns.map(col => `<th>${col}</th>`).join("");
  table += `</tr>\n</thead>\n<tbody>\n`;

  // Generate table rows
  data.forEach(row => {
    table += `<tr>`;
    columns.forEach(col => {
      table += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
    });
    table += `</tr>\n`;
  });

  table += `</tbody>\n</table>`;
  return table;
}
