import { Link, useNavigate } from "react-router-dom";
import ActionsColumn from "../../components/Table/ActionsColumn";
import Table from '../../components/Table/TableReact';
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { HiOutlinePlus } from "react-icons/hi";
import { useQuery } from "react-query";
import UsersApi from "@/api/users";
import TanStackTable from "@/components/Table2/table";
import { createColumnHelper } from "@tanstack/react-table";
import RegisterButton from "@/components/Buttons/RegisterButton";

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
  const [search, setSearch] = useState('');

  const { isLoading, data } = useQuery("UsersAll", async () => UsersApi.GetAll());
  
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Nome",
    }),
    columnHelper.accessor("", {
      cell: (cell) => ActionsModel(cell, handleEditUser, setIsOpenModalDelete, handleViewUser, setDataUser),
      header: " ",
    }),
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
      <RegisterButton
        showButton
        title="Cadastrar"
        route={"/users/create"}
      />

      {data?.data?.users && 
        <TanStackTable 
          columns={columns}
          dataTable={data?.data?.users || []}
        />
      }
    </div>
  )
}