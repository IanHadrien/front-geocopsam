/* eslint-disable no-use-before-define */
import React, { useState } from 'react' // eslint-disable-line
import Form from './Partials/Form'
import { HiOutlinePlus } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import PlantationsApi from '@/api/plantations'

const defaultConfig = () => ({
  userId: '',
  cultivationId: '',
  mappedAreaId: '',
  name: '',
  plantingDate: '',
  previousCulture: '',
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

export default function PlantationCreate() {
  const [newPlantation, setNewPlantation] = useState(defaultConfig())
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate, isLoading, reset } = useMutation({
    mutationFn: async (data) => PlantationsApi.Add(data),
    onSuccess: () => {
      queryClient.refetchQueries(['PlantationGetAll'])
      toast.success('Plantação cadastrada com sucesso.')
      navigate('/plantations')
    },
    onError: (e) => {
      setErrors(transformErrors(e?.issues))
      toast.error('Erro ao cadastrar plantação.')
      reset()
    },
  })

  const handleInputChange = (e, fieldName) => {
    let value = e?.target?.value ?? e?.value
    const name = e?.target?.name ?? fieldName

    setNewPlantation((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(newPlantation)
  }

  return (
    <div className="w-full md:px-10 sm:px-10 px-8 mb-8 mt-5">
      <div className="border px-8 pb-4 pt-6 bg-white rounded-md">
        <div className="flex flex-1 flex-col lg:flex-row lg:space-x-2 lg:space-y-0 h-fit">
          <div className="flex flex-1 flex-col text-sm">
            <div className="flex items-center px-4 pt-2 mb-4">
              <HiOutlinePlus size={25} />
              <h2 className="font-medium text-2xl pl-1.5">
                Adicionar plantação
              </h2>
            </div>

            <Form
              onSubmit={handleSubmit}
              data={newPlantation}
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
