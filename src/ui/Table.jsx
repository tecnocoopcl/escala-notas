/**
 * Tabla de solo lectura.
 * `columns` — array de encabezados
 * `data`    — array de filas, cada fila un array de celdas
 */
export function Table({ columns, data }) {
  return (
    <table className="ui-table">
      <thead>
        <tr>
          {columns.map((col) => <th key={col}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => <td key={j}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
