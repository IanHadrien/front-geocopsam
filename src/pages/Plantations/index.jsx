import { Link, useNavigate } from 'react-router-dom'
import ActionsColumn from '../../components/Table/ActionsColumn'
import Table from '../../components/Table/TableReact'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlinePlus } from 'react-icons/hi'
import { InputWithLabel } from '@/components/ui/InputWithLabel'
import { PiPlantDuotone } from 'react-icons/pi'
import { useQuery } from 'react-query'
import PlantationsApi from '@/api/plantations'
import DeleteModal from './Partials/deleteModal'

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
      permissionEdit="PlantationEdit"
      permissionDelete="PlantationDelete"
      permissionView="ViewPlantations"
      deleteButton
    />
  )
}

export default function Plantations() {
  const navigate = useNavigate()

  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [dataForm, setDataForm] = useState(null)
  const [search, setSearch] = useState('')

  const { isLoading, data } = useQuery({
    queryKey: ['PlantationGetAll'],
    queryFn: () => PlantationsApi.GetAll(),
  })

  const columns = [
    {
      Header: 'Nome',
      accessor: 'name',
    },
    {
      Header: 'Associado',
      accessor: 'user.name',
    },
    {
      Header: 'Cultivo',
      accessor: 'cultivation.name',
    },
    {
      Header: 'Data',
      accessor: 'planting_date',
    },
    {
      Header: '',
      accessor: 'id',
      Cell: (cell) =>
        ActionsModel(
          cell,
          handleEdit,
          setIsOpenModalDelete,
          handleView,
          setDataForm
        ),
    },
  ]

  const handleInputChange = (e) => setSearch(e.target.value)

  const handleEdit = (dataedit) => {
    navigate(`/plantations/edit/${dataedit?.id}`, {
      state: { dataEdit: dataedit },
    })
  }

  const handleView = () => {}

  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false)
  }

  if (isLoading === true) return <div>Loading...</div>
  return (
    <div className="w-full h-full md:px-10 sm:px-10 px-8 py-5">
      <div className="flex items-center pb-4 space-x-1">
        <PiPlantDuotone size={25} />
        <h2 className="font-medium text-2xl pl-1.5">Plantações</h2>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center">
          <InputWithLabel
            id="search"
            name="search"
            placeholder="Pesquisar plantações"
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
          to="/plantations/create"
        >
          <p className="flex items-center">
            <HiOutlinePlus size={20} />
            <span className="pl-1">Criar plantação</span>
          </p>
        </Link>
      </div>

      <Table
        key="tableSite"
        columns={columns}
        data={data?.data?.plantations}
        sort
        filter
        pagination
      />

      <DeleteModal
        closeModal={handleCloseModalDelete}
        dataDelete={dataForm}
        isOpen={isOpenModalDelete}
      />
    </div>
  )
}
