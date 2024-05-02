import { Link, useNavigate } from "react-router-dom";
import ActionsColumn from "../../components/Table/ActionsColumn";
import Table from '../../components/Table/TableReact';
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlinePlus } from "react-icons/hi";
import { InputWithLabel } from "@/components/ui/InputWithLabel";

function ActionsModel(cell, setIsOpenModalEdit, setIsOpenModalDelete, setIsOpenModalView, setData) {
  return <ActionsColumn
    cell={cell}
    setIsOpenModalEdit={setIsOpenModalEdit}
    setIsOpenModalDelete={setIsOpenModalDelete}
    setIsOpenModalView={setIsOpenModalView}
    setData={setData}
    permissionEdit="UserEdit"
    permissionDelete="UserDelete"
    permissionView="ViewUsers"
    deleteButton
  />;
}

const dataTemp = [
  {
    id: "1",
    name: "Plantação 1",
    associate: "Ian Hadrien",
    cultivation: "Milho",
    data: "09/03/2024"
  }
]

export default function Plantations() {
  const navigate = useNavigate();

  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [dataUser, setDataUser] = useState(null);
  const [search, setSearch] = useState('');
  
  const columns = [
    {
      Header: "Nome",
      accessor: 'name',
    },
    {
      Header: "Associado",
      accessor: 'associate',
    },
    {
      Header: "Cultivo",
      accessor: 'cultivation',
    },
    {
      Header: "Data",
      accessor: 'data',
    },
    // {
    //   Header: "Modelo",
    //   accessor: 'model.name',
    // },
    {
      Header: "",
      accessor: 'id',
      Cell: (cell) => ActionsModel(cell, handleEditUser, setIsOpenModalDelete, handleViewUser, setDataUser),
    },
  ];

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleEditUser = (dataedit) => {
    navigate('/user-edit', {
      state: { dataEdit: dataedit }
    })
  };

  const handleViewUser = (dataview) => {
    navigate('/user-view', {
      state: { dataView: dataview }
    })
  };

  return (
    <div className="w-full h-full md:px-10 sm:px-10 px-8 py-5">
      <div className="flex justify-between">
        <div className="flex items-center">
          <InputWithLabel 
            id="search"
            name="search"
            placeholder="Pesquisar plantação"
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

        <div>
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
      </div>

      <Table
        key="tableSite"
        columns={columns}
        data={dataTemp}
        sort
        filter
        pagination
        // handleSeach={setSearch}
      />
    </div>
  )
}