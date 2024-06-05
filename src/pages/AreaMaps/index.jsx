import { Link, useNavigate } from 'react-router-dom'
import ActionsColumn from '../../components/Table/ActionsColumn'
import Table from '../../components/Table/TableReact'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegMap } from 'react-icons/fa'
import { useQuery } from 'react-query'
import MappedAreasApi from '@/api/mappedArea'
import { InputWithLabel } from '@/components/ui/InputWithLabel'
import Tooltip from '@/components/Tooltip/TooltipReact'
import { HiOutlinePlus } from 'react-icons/hi'
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
      permissionEdit="AreaMapEdit"
      permissionDelete="AreaMapDelete"
      permissionView="ViewAreaMaps"
      deleteButton
      viewButtonActived
    />
  )
}

export default function AreasMaps() {
  const navigate = useNavigate()

  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [dataAreaMap, setAreaMap] = useState(null)
  const [search, setSearch] = useState('')
  const [pagePagination, setPagePagination] = useState(1)

  const { isLoading, data } = useQuery(
    ['AreasMapsAll', { pagePagination, search }],
    () => MappedAreasApi.GetAll(pagePagination, search),
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
          handleEditAreaMapped,
          setIsOpenModalDelete,
          handleViewUser,
          setAreaMap
        ),
    },
  ]

  const handleInputChange = (e) => setSearch(e.target.value)

  const handleEditAreaMapped = (dataedit) => {
    navigate(`/areas-map/edit/${dataedit?.id}`, {
      state: { dataEdit: dataedit },
    })
  }

  const handleViewUser = (dataView) => {
    navigate(`/areas-map/view/${dataView?.id}`, {
      state: { dataView: dataView },
    })
  }

  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false)
  }

  if (isLoading === true) return <div>Loading</div>
  return (
    <div className="w-full h-full md:px-10 sm:px-10 px-8 py-5">
      <div className="flex items-center pb-4 space-x-1">
        <FaRegMap size={25} />
        <h2 className="font-medium text-2xl pl-1.5">Áreas mapeadas</h2>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center">
          <InputWithLabel
            id="search"
            name="search"
            placeholder="Pesquisar área mapeada"
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
          <Tooltip text="Pesquisar áreas mapas" anchorSelect="#search-button" />
        </div>

        <div>
          <Link
            className="rounded-sm flex w-full lg:w-auto justify-center ml-1 px-2 py-1.5 focus:outline-none bg-verde-texture1 focus:bg-ads-verde border border-verde-texture1 text-white hover:opacity-80 transition ease-in-out duration-150"
            to="/areas-map/create"
          >
            <p className="flex items-center">
              <HiOutlinePlus size={20} />
              <span className="pl-1">Adicionar área</span>
            </p>
          </Link>
        </div>
      </div>

      <Table
        key="tableSite"
        columns={columns}
        data={data?.data?.mappedAreas}
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
        dataDelete={dataAreaMap}
        isOpen={isOpenModalDelete}
      />
    </div>
  )
}
