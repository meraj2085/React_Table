import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "../columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "../BasicTable.css";

const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable({ columns, data }, usePagination);

  const { pageIndex, pageSize } = state;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>
        <div>
          Page: <strong>{pageIndex + 1}</strong> of{" "}
          <strong>{pageOptions.length}</strong>
        </div>
        <div>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"⏮️"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"◀️"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {"▶️"}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {"⏩"}
        </button>
        <br />
        <br />
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default PaginationTable;
