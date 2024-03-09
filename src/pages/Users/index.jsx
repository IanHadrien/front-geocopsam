import { useNavigate } from "react-router-dom";
import ActionsColumn from "../../components/Table/ActionsColumn";
import Table from '../../components/Table/TableReact';
import { useState } from "react";

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
      {/* {permissionEquipmentAdd &&
        <RegisterButtonLink 
          title="Cadastrar" 
          route="/equipment-create"
        />
      } */}
      <div>
        <div className="flex flex-1 flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
          <div className="flex flex-1 flex-col text-sm">
            <input type="text" />
          </div>

          <div className="pt-1">
            <button
              id="search-button"
              type="submit"
              className="rounded-md flex w-full lg:w-auto justify-center px-2 py-1.5 focus:outline-none bg-azul-700 focus:bg-azul-800 border border-azul-700 text-white hover:opacity-80 transition ease-in-out duration-150"
              // onClick={() => setSearchQuery(search)}
            >
              {/* <AiOutlineSearch size={25} /> */}
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