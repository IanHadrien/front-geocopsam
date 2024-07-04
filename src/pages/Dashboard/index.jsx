import TanStackTable from '@/components/Table2/table'
import { createColumnHelper } from '@tanstack/react-table'

export default function Dashboard() {
  const columnHelper = createColumnHelper()
  const columns = [
    columnHelper.accessor('firstName', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'First Name',
    }),
    columnHelper.accessor('lastName', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Last Name',
    }),
    columnHelper.accessor('age', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Age',
    }),
    columnHelper.accessor('visits', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Visits',
    }),
    columnHelper.accessor('progress', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Progress',
    }),
  ]

  const dataTable = [
    {
      firstName: 'First Name',
      lastName: 'lastName',
      age: 'age',
      visits: 'visits',
      progress: 'progress',
    },
    {
      firstName: 'First Name 2',
      lastName: 'lastName2',
      age: '2',
      visits: 'visits2',
      progress: '24',
    },
  ]

  return (
    <div>
      <div className="pt-4 min-h-screen">
        <p>Desenvolvimento...</p>
        {/* <TanStackTable 
          columns={columns}
          dataTable={dataTable}
        /> */}
      </div>
    </div>
  )
}
