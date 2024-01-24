import React from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";

function Historialproformasp({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "ID",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "DNI",
        accessor: "dni",
      },
      {
        Header: "Gmail",
        accessor: "gmail",
      },
      {
        Header: "RUC",
        accessor: "ruc",
      },
      {
        Header: "Empresa",
        accessor: "empresa",
      },

      {
        Header: "Teléfono",
        accessor: "telefono",
      },
      {
        Header: "Ttolva",
        accessor: "ttolva",
      },

      {
        Header: "Dimensiones",
        accessor: "m3",
      },
      {
        Header: "Capacidad",
        accessor: "toneladas",
      },
      {
        Header: "Carroceria",
        accessor: "carroceria",
      },
      {
        Header: "Chasis",
        accessor: "chasis",
      },
      {
        Header: "Estructura",
        accessor: "estructura",
      },
      {
        Header: "Kingpin",
        accessor: "kingpin",
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
    <div className="containertablehistory">
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
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps()} key={index}>
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

Historialproformasp.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Historialproformasp;
