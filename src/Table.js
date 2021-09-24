import React from 'react'
function TableHeader() { ... }

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>         
        <td>{row.job}</td>
      </tr>
    );
   }
  );
  return (
      <tbody>
        {rows}
       </tbody>
   );
}


function Table(props) {
    return (
      <table>
        <TableHeader />
        <TableBody characterData={props.characterData} />
      </table>
    )
  }
}

function TableHeader()  {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}
export default Table;