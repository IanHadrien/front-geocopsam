import { useNavigate } from "react-router-dom";
import ActionsColumn from "../../components/Table/ActionsColumn";
import Table from '../../components/Table/TableReact';
import { useState } from "react";
import Input from "../../components/Form/Inputs/Input";
import { AiOutlineSearch } from 'react-icons/ai';
import RegisterButton from "../../components/Buttons/RegisterButton";

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
      {/* {permissionEquipmentAdd && */}
        <RegisterButton
          title="Cadastrar" 
          route="/plantations/create"
          showButton
        />
      {/* } */}
      <div>
        <div className="flex flex-1 flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
          <div className="flex flex-1 flex-col text-sm">
            <Input 
              label="Pesquisar plantação"
              placeholder="Pesquisar por nome, associado e cultivo"
              size="small"
              className="w-full bg-white"
              onChange={handleInputChange}
              value={search}
            />
          </div>

          <div>
            <button
              id="search-button"
              type="submit"
              className="rounded-md flex w-full lg:w-auto justify-center px-2 py-1.5 focus:outline-none bg-ds-verde focus:bg-ads-verde border border-ds-verde text-white hover:opacity-80 transition ease-in-out duration-150"
              // onClick={() => setSearchQuery(search)}
            >
              <AiOutlineSearch size={25} />
            </button>
            {/* <Tooltip text='Pesquisar' anchorSelect="#search-button" /> */}
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
    </div>
  )
}