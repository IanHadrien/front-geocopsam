import UsersApi from '@/api/users'
import LoadingClipLoader from '@/components/Loading/LoadingClipLoader'
import { InputWithLabel } from '@/components/ui/InputWithLabel'
import { SelectWithLabel } from '@/components/ui/SelectWithLabel'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'

export default function Form({
  onSubmit,
  data,
  handleInputChange,
  errors,
  isLoading,
  editMode,
  viewMode,
}) {
  const { isLoading: isLoadingUsers, data: dataUsers } = useQuery(
    'UsersGetAll',
    async () => UsersApi.GetAll()
  )

  if (isLoadingUsers === true) {
    return <div className="p-4 flex justify-center">Loading...</div>
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="px-4 pt-2">
        <InputWithLabel
          id="name"
          name="name"
          label="Nome"
          placeholder="Nome da área mapeada"
          type="text"
          onChange={handleInputChange}
          value={data?.name}
          error={errors && errors?.name}
          required
        />

        <InputWithLabel
          id="geospatialData"
          name="geospatialData"
          label="Dados geográficos"
          placeholder="Dados geográficos"
          type="text"
          onChange={handleInputChange}
          value={data?.geospatialData}
          error={errors && errors?.geospatialData}
          required
        />

        <div className="grid md:gap-4 md:grid-cols-2">
          <InputWithLabel
            id="centerPont"
            name="centerPont"
            label="Ponto central"
            placeholder="Ponto central"
            type="text"
            onChange={handleInputChange}
            value={data?.centerPont}
            error={errors && errors?.centerPont}
          />

          <InputWithLabel
            id="totalArea"
            name="totalArea"
            label="Área total"
            placeholder="Área total"
            type="text"
            onChange={handleInputChange}
            value={data?.totalArea}
            error={errors && errors?.totalArea}
          />
        </div>

        <SelectWithLabel
          label="Proprietário da terra"
          id="userId"
          placeholder="Selecione o proprietário"
          data={dataUsers?.data?.users}
          value={data?.userId}
          onChange={(e) => handleInputChange(e, 'userId')}
          error={errors && errors?.userId}
          required
        />

        {!viewMode && (
          <p className="text-xs font-medium text-gray-500 pb-2 pt-1">
            Os campos marcados com * são obrigatórios.
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="px-4 py-3 sm:flex">
          {!viewMode && (
            <button
              className="inline-flex w-full justify-center rounded-md bg-ds-verde px-3 py-2 text-base font-semibold text-white shadow-sm hover:opacity-80 sm:w-56"
              type="submit"
              disabled={isLoading}
            >
              Salvar
            </button>
          )}

          <LoadingClipLoader
            color="#17171B"
            loading={isLoading}
            className={`${isLoading && 'ml-3'}`}
          />
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  data: PropTypes.object,
  handleInputChange: PropTypes.func,
  handleInputPhone: PropTypes.func,
  handleInputRadio: PropTypes.func,
  errors: PropTypes.object,
  isLoading: PropTypes.bool,
  editMode: PropTypes.bool,
  viewMode: PropTypes.bool,
  handleClearModule: PropTypes.func,
  isMulti: PropTypes.bool,
  chipNumTemp: PropTypes.string,
}
