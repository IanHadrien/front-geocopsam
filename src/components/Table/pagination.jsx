/* eslint-disable react/prop-types */
export default function Pagination({
  from,
  to,
  page,
  pageSize,
  totalCount,
  hasNextPage,
  hasPreviousPage,
  setPagePagination,
}) {
  return (
    <nav className="pt-6 flex items-center justify-between pb-4">
      <div>
        <p className="text-sm text-gray-700">
          Mostrando
          <span className="font-medium"> {from} </span>
          ao
          <span className="font-medium"> {to} </span>
          de
          <span className="font-medium"> {totalCount} </span>
          resultados
        </p>
      </div>

      <ul className="inline-flex items-center -space-x-px">
        <button
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={() => setPagePagination(1)}
        >
          <span className="sr-only">Primeira</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z" />
          </svg>
        </button>

        <li>
          <button
            className="relative inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            disabled={!(page > 1)}
            onClick={() => setPagePagination(page - 1)}
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
            </svg>
          </button>
        </li>

        {hasPreviousPage && page > 1 && (
          <li>
            <button
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => setPagePagination(page - 1)}
            >
              {page - 1}
            </button>
          </li>
        )}
        <li>
          <button className="z-10 bg-plantar-verde3 bg-opacity-10 border-plantar-verde3 text-verde-texture1 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            {page}
          </button>
        </li>
        {hasNextPage && (
          <li>
            <button
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => setPagePagination(page + 1)}
            >
              {page + 1}
            </button>
          </li>
        )}

        <li>
          <button
            className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            disabled={!hasNextPage}
            onClick={() => setPagePagination(page + 1)}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </button>
        </li>

        <button
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={() => setPagePagination(Math.ceil(totalCount / pageSize))}
        >
          <span className="sr-only">Última</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
            <path d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
          </svg>
        </button>
      </ul>
    </nav>
  )
}
