/* eslint-disable no-use-before-define */
import { useState } from 'react'
import Form from './Partials/Form'
import { useMutation, useQueryClient } from 'react-query'
import { HiOutlinePlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UsersApi from '@/api/users'

const defaultConfig = () => ({
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  phone: '',
  role: '',
})

function transformErrors(errors) {
  const transformedErrors = {}
  for (const key in errors) {
    if (key !== '_errors' && errors[key]._errors.length > 0) {
      transformedErrors[key] = errors[key]._errors[0]
    }
  }
  return transformedErrors
}

export default function UserCreate() {
  const [newUser, setNewUser] = useState(defaultConfig())
  const [errors, setErrors] = useState(null)

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const { mutate, isLoading, reset } = useMutation({
    mutationFn: async (data) => UsersApi.Add(data),
    onSuccess: () => {
      queryClient.refetchQueries(['UsersAll'])
      toast.success('Usuário cadastrado com sucesso.')
      navigate('/users')
    },
    onError: (e) => {
      setErrors(transformErrors(e?.issues))
      toast.error('Erro ao cadastrar usuário.')
      reset()
    },
  })

  const handleInputChange = (e, fieldName) => {
    let value = e?.target?.value ?? e?.value
    const name = e?.target?.name ?? fieldName

    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const tempObj = { ...newUser }

    if (tempObj?.phone === '') {
      tempObj.phone = undefined
    }

    mutate(tempObj)
  }

  return (
    <div className="w-full md:px-10 sm:px-10 px-8 mb-8 mt-5">
      <div className="border px-8 pb-4 pt-6 bg-white rounded-md">
        <div className="flex flex-1 flex-col lg:flex-row lg:space-x-2 lg:space-y-0 h-fit">
          <div className="flex flex-1 flex-col text-sm">
            <div className="flex items-center px-4 pt-2 mb-4">
              <HiOutlinePlus size={25} />
              <h2 className="font-medium text-2xl pl-1.5">Adicionar usuário</h2>
            </div>

            <Form
              onSubmit={handleSubmit}
              data={newUser}
              handleInputChange={handleInputChange}
              errors={errors}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
