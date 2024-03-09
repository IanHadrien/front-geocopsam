import PropTypes from 'prop-types';
import { FaTrash } from "react-icons/fa";
import { MdEdit, MdRemoveRedEye } from "react-icons/md";
// import usePermissions from '../../hooks/usePermissions';
// import Tooltip from "../Tooltip";

const userCan = true;
// const userCan = (permission) => usePermissions(permission);

export default function ActionsColumn({ cell, setIsOpenModalEdit, setIsOpenModalDelete, setIsOpenModalView, setData, permissionEdit, permissionDelete, permissionView, deleteButton }) {
    const { row: { original: data } } = cell;
    return (
        <div className='flex justify-end items-center'>
            {/* {userCan(permissionEdit) && */}
            {userCan &&
                <div>
                    <button id={`editBtn-${data.id}`} className="rounded-full p-1 hover:bg-gray-100 transition" onClick={() => {
                        setIsOpenModalEdit(data);
                        setData(data)
                    }}>
                        <MdEdit size={20} color='gray' />
                    </button>
                    {/* <Tooltip text='Editar' anchorSelect={`#editBtn-${data.id}`} /> */}
                </div>
            }
            {userCan &&
                <div>
                    <button id={`deleteBtn-${data.id}`} className="rounded-full p-2 hover:bg-gray-100 transition" onClick={() => {
                        setIsOpenModalDelete(true)
                        setData(data)
                    }}>
                        <FaTrash size={15} color='gray' />
                    </button>
                    {/* <Tooltip text='Excluir' anchorSelect={`#deleteBtn-${data.id}`} /> */}
                </div>
            }
            {userCan &&
                <div>
                    <button id={`viewBtn-${data.id}`} className="rounded-full pt-1 pl-1 hover:bg-gray-100 transition" onClick={() => {
                        setIsOpenModalView(data)
                        setData(data)
                    }}>
                        <MdRemoveRedEye size={20} color='gray' />
                    </button>
                    {/* <Tooltip text='Visualizar' anchorSelect={`#viewBtn-${data.id}`} /> */}
                </div>
            }
        </div>
    );
}

ActionsColumn.propTypes = {
  cell: PropTypes.object,
  setIsOpenModalEdit: PropTypes.func,
  setIsOpenModalDelete: PropTypes.func,
  setIsOpenModalView: PropTypes.func,
  setData: PropTypes.func,
  permissionEdit: PropTypes.string,
  permissionDelete: PropTypes.string,
  permissionView: PropTypes.string,
  deleteButton: PropTypes.bool,
};