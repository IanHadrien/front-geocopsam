import CultivationsApi from '@/api/cultivations'
import MappedAreasApi from '@/api/mappedArea'
import UsersApi from '@/api/users'
import { InputWithLabel } from '@/components/ui/InputWithLabel'
import { SelectWithLabel } from '@/components/ui/SelectWithLabel'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
// import Input from '../../../components/Form/Inputs/Input';

export default function Form({
  onSubmit,
  data,
  handleInputChange,
  errors,
  isLoading,
  editMode,
  viewMode,
}) {
  const { isLoading: isLoadingMappedAreas, data: dataMappedAreas } = useQuery({
    queryKey: ['MappedAreasGetAll'],
    queryFn: () => MappedAreasApi.GetAll(),
  })
  const { isLoading: isLoadingCultivations, data: dataCultivations } = useQuery(
    {
      queryKey: ['CultivationsApiGetAll'],
      queryFn: () => CultivationsApi.GetAll(),
    }
  )
  const { isLoading: isLoadingUsers, data: dataUsers } = useQuery({
    queryKey: ['UsersGetAll'],
    queryFn: () => UsersApi.GetAll(),
  })
  console.log(dataMappedAreas)

  if (
    isLoadingUsers === true ||
    isLoadingMappedAreas === true ||
    isLoadingCultivations === true
  ) {
    return <div className="p-4 flex justify-center">Loading...</div>
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="px-4 pt-2">
        <InputWithLabel
          id="name"
          name="name"
          label="Nome"
          placeholder="Nome da plantação"
          type="text"
          onChange={handleInputChange}
          value={data?.name}
          error={errors && errors?.name}
          required
        />

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

        <div className="grid md:gap-4 md:grid-cols-2">
          <SelectWithLabel
            label="Cultivo"
            id="cultivationId"
            placeholder="Selecione o cultivo"
            data={dataCultivations?.data?.cultivations}
            value={data?.cultivationId}
            onChange={(e) => handleInputChange(e, 'cultivationId')}
            error={errors && errors?.cultivationId}
            required
          />

          <SelectWithLabel
            label="Área mapeada"
            id="mappedAreaId"
            placeholder="Selecione a área mapeada"
            data={dataMappedAreas?.data?.mappedAreas}
            value={data?.mappedAreaId}
            onChange={(e) => handleInputChange(e, 'mappedAreaId')}
            error={errors && errors?.mappedAreaId}
            required
          />
        </div>

        <div className="grid md:gap-4 md:grid-cols-2">
          <InputWithLabel
            id="plantingDate"
            name="plantingDate"
            label="Data de plantio"
            placeholder="Data de plantio"
            type="date"
            onChange={handleInputChange}
            value={data?.plantingDate}
            error={errors && errors?.plantingDate}
          />

          <InputWithLabel
            id="previousCulture"
            name="previousCulture"
            label="Cultura anterior"
            placeholder="Cultura anterior"
            type="text"
            onChange={handleInputChange}
            value={data?.previousCulture}
            error={errors && errors?.previousCulture}
          />
        </div>

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

          {/* <LoadingClipLoader
            color="#155794"
            loading={isLoading}
            className={`${isLoading && "ml-3"}`}
          /> */}
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
