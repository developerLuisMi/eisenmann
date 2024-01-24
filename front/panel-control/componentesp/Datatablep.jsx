import React from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";

function Datatablep({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "ID",
      },
      {
        Header: "Nombre",
        accessor: "nombre_2",
      },
      {
        Header: "DNI",
        accessor: "dni_2",
      },
      {
        Header: "Teléfono",
        accessor: "telefono_2",
      },
      {
        Header: "Ttolva",
        accessor: "ttolva_2",
      },
      {
        Header: "Fecha de Inicio",
        accessor: "fechainicio",
      },
      {
        Header: "Fecha de Entrega",
        accessor: "fechaentrega",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data, // Asegúrate de que data sea el arreglo que contiene tus datos
    });

  return (
    <div className="containertablecliente">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} key={cell.column.id}>
                      {cell.column.id === "fechainicio" ||
                      cell.column.id === "fechaentrega"
                        ? new Date(cell.value).toLocaleDateString()
                        : cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

Datatablep.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Datatablep;
