import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Form from './partials/form'
import { useMutation, useQueryClient } from 'react-query'
import UsersApi from '@/api/users'
import { toast } from 'react-toastify'
import { FaRegEdit } from 'react-icons/fa'

function transformErrors(errors) {
  const transformedErrors = {}
  for (const key in errors) {
    if (key !== '_errors' && errors[key]._errors.length > 0) {
      transformedErrors[key] = errors[key]._errors[0]
    }
  }
  return transformedErrors
}

export default function UserEdit() {
  const location = useLocation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { dataEdit } = location.state || {}

  const [editForm, setEditForm] = useState({
    ...dataEdit,
    userId: dataEdit.id,
  })
  const [errors, setErrors] = useState(null)

  const { mutate, isLoading, reset } = useMutation({
    mutationFn: async (data) => UsersApi.Edit(data),
    onSuccess: () => {
      queryClient.refetchQueries(['UsersAll'])
      toast.success('Usuário editado com sucesso.')
      navigate('/users')
    },
    onError: (e) => {
      setErrors(transformErrors(e?.issues))
      toast.error('Erro ao editado usuário.')
      reset()
    },
  })

  const handleInputChange = (e, fieldName) => {
    let value = e?.target?.value ?? e?.value
    const name = e?.target?.name ?? fieldName

    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    mutate(editForm)
  }

  return (
    <div className="w-full md:px-10 sm:px-10 px-8 mb-8 mt-5">
      <div className="border px-8 pb-4 pt-6 bg-white rounded-md">
        <div className="flex flex-1 flex-col lg:flex-row lg:space-x-2 lg:space-y-0 h-fit">
          <div className="flex flex-1 flex-col text-sm">
            <div className="flex items-center px-4 pt-2 mb-4">
              <FaRegEdit size={25} />
              <h2 className="font-medium text-2xl pl-1.5">Editar usuário</h2>
            </div>

            <Form
              onSubmit={handleSubmit}
              data={editForm}
              handleInputChange={handleInputChange}
              errors={errors}
              editMode
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
