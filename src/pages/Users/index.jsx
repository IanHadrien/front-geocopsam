import { useNavigate } from "react-router-dom";
import ActionsColumn from "../../components/Table/ActionsColumn";
import Table from '../../components/Table/TableReact';
import { useState } from "react";
import Input from "../../components/Form/Inputs/Input";
import { AiOutlineSearch } from 'react-icons/ai';

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
    name: "Teste",
  }
]

export default function Users() {
  const navigate = useNavigate();

  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [dataUser, setDataUser] = useState(null);
  const [search, setSearch] = useState('');
  
  const columns = [
    {
      Header: "Nome",
      accessor: 'name',
    },
    // {
    //   Header: "Modelo",
    //   accessor: 'model.name',
    // },
    // {
    //   Header: "Módulo de Telemetria",
    //   accessor: 'telemetryModuleModel.moduleId',
    // },
    {
      Header: "",
      accessor: 'id',
      Cell: (cell) => ActionsModel(cell, handleEditUser, setIsOpenModalDelete, handleViewUser, setDataUser),
    },
  ];

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleEditUser = (dataedit) => {
    navigate(`/users/edit/${dataedit.id}`, {
      state: { dataEdit: dataedit }
    })
  };

  const handleViewUser = (dataview) => {
    navigate(`/users/view/${dataview.id}`, {
      state: { dataView: dataview }
    })
  };

  return (
    <div className="w-full h-full md:px-10 sm:px-10 px-8 py-5">
      {/* {permissionEquipmentAdd &&
        <RegisterButtonLink 
          title="Cadastrar" 
          route="/equipment-create"
        />
      } */}
      <div>
        <div className="flex flex-1 flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
          <div className="flex flex-1 flex-col text-sm">
            <Input 
              label="Pesquisar usuário"
              placeholder="Pesquisar por nome, etc"
              size="small"
              className="w-full"
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