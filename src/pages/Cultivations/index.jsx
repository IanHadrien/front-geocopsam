import { Link, useNavigate } from 'react-router-dom'
import ActionsColumn from '../../components/Table/ActionsColumn'
import Table from '../../components/Table/TableReact'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { InputWithLabel } from '@/components/ui/InputWithLabel'
import { HiOutlinePlus } from 'react-icons/hi'
import { PiPlantDuotone } from 'react-icons/pi'
import { useQuery } from 'react-query'
import CultivationsApi from '@/api/cultivations'
import DeleteModal from './Partials/deleteModal'
import Pagination from '@/components/Table/pagination'

function ActionsModel(
  cell,
  setIsOpenModalEdit,
  setIsOpenModalDelete,
  setIsOpenModalView,
  setData
) {
  return (
    <ActionsColumn
      cell={cell}
      setIsOpenModalEdit={setIsOpenModalEdit}
      setIsOpenModalDelete={setIsOpenModalDelete}
      setIsOpenModalView={setIsOpenModalView}
      setData={setData}
      permissionEdit="CultivationEdit"
      permissionDelete="CultivationDelete"
      permissionView="ViewCultivations"
      deleteButton
    />
  )
}

export default function Cultivations() {
  const navigate = useNavigate()

  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [dataForm, setForm] = useState(null)
  const [search, setSearch] = useState('')
  const [pagePagination, setPagePagination] = useState(1)

  const { isLoading, data } = useQuery(
    ['CultivationsAll', { pagePagination, search }],
    () => CultivationsApi.GetAll(pagePagination, search),
    {
      keepPreviousData: true,
    }
  )

  const columns = [
    {
      Header: 'Nome',
      accessor: 'name',
    },
    {
      Header: '',
      accessor: 'id',
      Cell: (cell) =>
        ActionsModel(
          cell,
          handleEditCultivation,
          setIsOpenModalDelete,
          handleViewUser,
          setForm
        ),
    },
  ]

  const handleInputChange = (e) => setSearch(e.target.value)

  const handleEditCultivation = (dataedit) => {
    navigate(`/cultivations/edit/${dataedit?.id}`, {
      state: { dataEdit: dataedit },
    })
  }

  const handleViewUser = () => {}

  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false)
  }

  if (isLoading === true) return <div>Loading</div>
  return (
    <div className="w-full h-full md:px-10 sm:px-10 px-8 py-5">
      <div className="flex items-center pb-4 space-x-1">
        <PiPlantDuotone size={25} />
        <h2 className="font-medium text-2xl pl-1.5">Cultivos</h2>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center">
          <InputWithLabel
            id="search"
            name="search"
            placeholder="Pesquisar cultivos"
            type="text"
            onChange={handleInputChange}
            value={search}
            className="mb-0"
          />

          <button
            id="search-button"
            type="submit"
            className="rounded-sm flex w-full lg:w-auto justify-center ml-1 px-2 py-1.5 focus:outline-none bg-verde-texture1 focus:bg-ads-verde border border-verde-texture1 text-white hover:opacity-80 transition ease-in-out duration-150"
            // onClick={() => setSearchQuery(search)}
          >
            <AiOutlineSearch size={25} />
          </button>
          {/* <Tooltip text='Pesquisar' anchorSelect="#search-button" /> */}
        </div>

        <Link
          className="rounded-sm flex w-full lg:w-auto justify-center ml-1 px-2 py-1.5 focus:outline-none bg-verde-texture1 focus:bg-ads-verde border border-verde-texture1 text-white hover:opacity-80 transition ease-in-out duration-150"
          to="/cultivations/create"
        >
          <p className="flex items-center">
            <HiOutlinePlus size={20} />
            <span className="pl-1">Criar cultivo</span>
          </p>
        </Link>
      </div>

      <Table
        key="tableSite"
        columns={columns}
        data={data?.data?.cultivations}
        sort
        filter
        pagination
      />

      <Pagination
        from={data.data.from}
        to={data.data.to}
        page={data.data.page}
        pageSize={data.data.pageSize}
        totalCount={data.data.totalCount}
        hasNextPage={data.data.hasNextPage}
        hasPreviousPage={data.data.hasPreviousPage}
        setPagePagination={setPagePagination}
      />

      <DeleteModal
        closeModal={handleCloseModalDelete}
        dataDelete={dataForm}
        isOpen={isOpenModalDelete}
      />
    </div>
  )
}
