/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import 'regenerator-runtime/runtime';

import PropTypes from 'prop-types';

import { FaArrowDown, FaArrowUp, FaGlasses, } from "react-icons/fa";
import { useAsyncDebounce, useBlockLayout, useFilters, useGlobalFilter, usePagination, useResizeColumns, useSortBy, useTable } from 'react-table';

import 'react-tooltip/dist/react-tooltip.css';

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(resp => {
    setGlobalFilter(resp || undefined)
  }, 200)

  return (
    <p className="flex gap-x-2 items-baseline">
      <span className="text-zinc-700">Pesquisar: </span>
      <input
        type="text"
        className="rounded-md border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} linhas...`}
      />
    </p>
  )
}

GlobalFilter.propTypes = {
  preGlobalFilteredRows: PropTypes.array,
  globalFilter: PropTypes.string,
  setGlobalFilter: PropTypes.func,
};

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const optionsAux = new Set()
    preFilteredRows.forEach(row => {
      optionsAux.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <p className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">{render("Header")}: </span>
      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={`is_${options}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </p>
  )
}

SelectColumnFilter.propTypes = {
  column: PropTypes.object
};


function createPlugins(pagination, filter, resizeColumn, sort) {
  const plugins = []
  if (filter) {
    plugins.push(useFilters);
    plugins.push(useGlobalFilter);
  }

  if (sort) {
    plugins.push(useSortBy);
  }

  if (resizeColumn) {
    plugins.push(useBlockLayout);
    plugins.push(useResizeColumns);
  }

  if (pagination) {
    plugins.push(usePagination);
  }
  return plugins


}

export default function Table({ columns, data, pagination, filter, resizeColumn, sort, dense }) {
  const iff = (condition, then, otherwise) => condition ? then : otherwise;

  const [plugins] = useState(createPlugins(pagination, filter, resizeColumn, sort));

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data
  },
    ...plugins
  )

  return (
    <div className="mt-4 flex flex-col">
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-branco-100 sm:rounded-lg">
            <table {...getTableProps()} className="min-w-full divide-y divide-branco-100">
              <thead className="bg-branco-100">
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()} key="headerTable">
                    {headerGroup.headers.map(column => (
                      // Add the sorting props to control sorting. For this example
                      // we can add them into the header props
                      <th
                        scope="col"
                        key={`headerTable_c${column.id}`}
                        className="text-left text-[0.72rem] font-medium text-gray-500 uppercase tracking-wider relative"
                      >
                        <div className='relative h-full w-full group px-6 py-3 '
                          {...column.getHeaderProps(sort ? column.getSortByToggleProps() : undefined)}
                        >
                          <div className="items-center flex justify-between" >
                            {column.render('Header')}
                            {/* Add a sort direction indicator */}
                            {sort && <span>

                              {iff(column.isSorted,
                                iff(column.isSortedDesc, <FaArrowDown className="w-4 h-4 text-gray-400" />, <FaArrowUp className="w-4 h-4 text-zinc-400" />),
                                (<FaGlasses className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />)
                              )}
                            </span>}

                          </div>

                        </div>
                        {resizeColumn && <div
                          {...column.getResizerProps()}
                          className={`  h-full w-0.5 inline-block absolute right-0 top-0 z-10 ${column.isResizing ? ' bg-sky-500 bg-opacity-20' : ' bg-zinc-200'
                            }`}
                        />}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {rows.map((row) => {  // new
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()} key={`r${row.id}`}>
                      {row.cells.map((cell) =>
                        <td
                          {...cell.getCellProps()}
                          className={`whitespace-nowrap overflow-auto text-sm ${dense ? "px-2 py-1" : "px-6 py-1.5"}`}
                          key={`r${row.id}cell${cell.column.id}`}
                        >
                          {
                            cell.column.Cell.name === "defaultRenderer"
                              ? <div className="text-sm text-gray-500">{cell.render('Cell')}</div>
                              : cell.render('Cell')
                          }

                        </td>
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {rows?.length === 0 && 
              <p className="text-center py-2 text-base text-gray-500">Nenhum dado encontrado</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  pagination: PropTypes.bool,
  filter: PropTypes.bool,
  resizeColumn: PropTypes.bool,
  sort: PropTypes.bool,
  edit: PropTypes.bool,
  updatePath: PropTypes.func,
  deletePath: PropTypes.func,
  dense: PropTypes.bool,
  idProperty: PropTypes.string,
  reloadState: PropTypes.func,
  reload: PropTypes.bool,
};

