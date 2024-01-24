import React from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";

function Datatableclientep({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
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
        Header: "Teléfono",
        accessor: "telefono",
      },
      {
        Header: "Empresa",
        accessor: "empresa",
      },
      {
        Header: "RUC",
        accessor: "ruc",
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
    <div className="containertablebuscar">
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

Datatableclientep.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Datatableclientep;
