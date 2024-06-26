/* eslint-disable no-use-before-define */
import React, { useState } from 'react' // eslint-disable-line
import Form from './Partials/Form'
import { useMutation, useQueryClient } from 'react-query'
import MappedAreasApi from '@/api/mappedArea'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { HiOutlinePlus } from 'react-icons/hi'

const defaultConfig = () => ({
  name: '',
  geospatialData: '',
  centerPont: '',
  totalArea: '',
  userId: '',
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

export default function AreaMapsCreate() {
  const [newAreaMap, setNewAreaMap] = useState(defaultConfig())
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate, isLoading, reset } = useMutation({
    mutationFn: async (data) => MappedAreasApi.Add(data),
    onSuccess: () => {
      queryClient.refetchQueries(['AreasMapsAll'])
      toast.success('Área cadastrado com sucesso.')
      navigate('/areas-map')
    },
    onError: (e) => {
      setErrors(transformErrors(e?.issues))
      toast.error('Erro ao cadastrar área.')
      reset()
    },
  })

  const handleInputChange = (e, fieldName) => {
    let value = e?.target?.value ?? e?.value
    const name = e?.target?.name ?? fieldName

    setNewAreaMap((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(newAreaMap)
  }

  return (
    <div className="w-full md:px-10 sm:px-10 px-8 mb-8 mt-5">
      <div className="border px-8 pb-4 pt-6 bg-white rounded-md">
        <div className="flex flex-1 flex-col lg:flex-row lg:space-x-2 lg:space-y-0 h-fit">
          <div className="flex flex-1 flex-col text-sm">
            <div className="flex items-center px-4 pt-2 mb-4">
              <HiOutlinePlus size={25} />
              <h2 className="font-medium text-2xl pl-1.5">
                Adicionar área mapeada
              </h2>
            </div>

            <Form
              onSubmit={handleSubmit}
              data={newAreaMap}
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
