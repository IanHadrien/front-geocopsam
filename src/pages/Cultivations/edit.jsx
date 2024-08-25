import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Form from './partials/form'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import CultivationsApi from '@/api/cultivations'
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

export default function CultivationEdit() {
  const location = useLocation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { dataEdit } = location.state || {}

  const [editForm, setEditForm] = useState({
    ...dataEdit,
    cultivationId: dataEdit.id,
    probableHarvestDate: dataEdit?.probable_harvest_date,
  })
  const [errors, setErrors] = useState(null)

  const { mutate, isLoading, reset } = useMutation({
    mutationFn: async (data) => CultivationsApi.Edit(data),
    onSuccess: (e) => {
      console.log('Sucess: ', e)
      queryClient.refetchQueries(['CultivationsAll'])
      toast.success('Cultivo editado com sucesso.')
      navigate('/cultivations')
    },
    onError: (e) => {
      console.log('Error: ', e)
      setErrors(transformErrors(e?.issues))
      toast.error('Erro ao editado cultivo.')
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

    console.log('Submit', editForm)

    mutate(editForm)
  }

  return (
    <div className="w-full md:px-10 sm:px-10 px-8 mb-8 mt-5">
      <div className="border px-8 pb-4 pt-6 bg-white rounded-md">
        <div className="flex flex-1 flex-col lg:flex-row lg:space-x-2 lg:space-y-0 h-fit">
          <div className="flex flex-1 flex-col text-sm">
            <div className="flex items-center px-4 pt-2 mb-4">
              <FaRegEdit size={25} />
              <h2 className="font-medium text-2xl pl-1.5 ">Editar cultivo</h2>
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
