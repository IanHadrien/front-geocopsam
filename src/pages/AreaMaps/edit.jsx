/* eslint-disable no-use-before-define */
import React, { useState } from 'react' // eslint-disable-line
import Form from './Partials/Form'
import { useMutation, useQueryClient } from 'react-query'
import MappedAreasApi from '@/api/mappedArea'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
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

export default function AreaMapsEdit() {
  const location = useLocation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { dataEdit } = location.state || {}

  const [editForm, setEditForm] = useState({
    ...dataEdit,
    mappedAreaId: dataEdit?.id || '',
    geospatialData: dataEdit?.geospatial_data || '',
    centerPont: dataEdit?.center_pont || '',
    totalArea: dataEdit?.total_area || '',
  })
  const [errors, setErrors] = useState({})

  const { mutate, isLoading, reset } = useMutation({
    mutationFn: async (data) => MappedAreasApi.Edit(data),
    onSuccess: () => {
      queryClient.refetchQueries(['AreasMapsAll'])
      toast.success('Área editada com sucesso.')
      navigate('/areas-map')
    },
    onError: (e) => {
      setErrors(transformErrors(e?.issues))
      toast.error('Erro ao editar área.')
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
              <h2 className="font-medium text-2xl pl-1.5">
                Editar área mapeada
              </h2>
            </div>

            <Form
              onSubmit={handleSubmit}
              data={editForm}
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
