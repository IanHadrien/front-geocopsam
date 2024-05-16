import { useNavigate } from "react-router-dom";
import ActionsColumn from "../../components/Table/ActionsColumn";
import { useState } from "react";
import { useQuery } from "react-query";
import UsersApi from "@/api/users";
import RegisterButton from "@/components/Buttons/RegisterButton";
import Table from "@/components/Table/TableReact";
import DeleteModal from "./partials/deleteModal";

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

export default function Users() {
  const navigate = useNavigate();

  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [dataUser, setDataUser] = useState(null);
  // const [search, setSearch] = useState('');

  const { isLoading, data } = useQuery("UsersAll", async () => UsersApi.GetAll());
  console.log("Teste", data)
  
  const columns = [
    {
      Header: "Nome",
      accessor: 'name',
    },
    {
      Header: "",
      accessor: 'id',
      Cell: (cell) => ActionsModel(cell, handleEditUser, setIsOpenModalDelete, handleViewUser, setDataUser),
    }
  ];

  // const handleInputChange = (e) => setSearch(e.target.value);

  const handleEditUser = (dataedit) => {
    console.log(dataedit);
    navigate(`/users/edit/${dataedit.id}`, {
      state: { dataEdit: dataedit }
    })
  };

  const handleViewUser = (dataview) => {
    navigate(`/users/view/${dataview.id}`, {
      state: { dataView: dataview }
    })
  };

  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false);
  };

  if (isLoading === true) return <div>Loading</div>
  return (
    <div className="w-full h-full md:px-10 sm:px-10 px-8 py-5">
      <RegisterButton
        showButton
        title="Cadastrar"
        route={"/users/create"}
      />

      <Table
        key="tableSite"
        columns={columns}
        data={data?.data?.users}
        sort
        filter
        pagination
      />

      <DeleteModal
        closeModal={handleCloseModalDelete}
        dataDelete={dataUser}
        isOpen={isOpenModalDelete}
      />
    </div>
  )
}