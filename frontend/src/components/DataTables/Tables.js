import React from 'react';
import { useTable, usePagination, useSortBy } from "react-table";
import classnames from "classnames";
import Pagination from "./Paginations";
import { Link } from "react-router-dom";
import { deleteUser } from '../../api/auth';


const Tables = ({ columns, data, divided = false, defaultPageSize = 6 }) => {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable( 
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
    },
    useSortBy,
    usePagination
  );
  const handleDelete = (e,id) =>{
    console.log('id',id);
    deleteUser(id).then(
(res) =>{
    window.location.reload()
}
    ).catch( (error)=>{
console.log('error',error);
    }
   )
   }



  return (
    <>
      <table
        {...getTableProps()}
        className={`r-table table ${classnames({
          "table-divided": divided,
        })}`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sorted-desc"
                        : "sorted-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>

          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
                {/* <td>delete</td> */}
                <td>
                <Link to={`/edituser/${row.original._id}`}>
                    <button
                      type="button"
                      className="btn btn-primary mb-1 mr-5"
                    >
                      Edit
                    </button> 
                    </Link>
                
                
                <button
                      type="button"
                      className="btn btn-danger mb-1  mr-5"
                      onClick={(e) => handleDelete(e,row.original._id)}
                    >
                      Delete
                    </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={true}
        showPageJump={true}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
};


export default Tables;