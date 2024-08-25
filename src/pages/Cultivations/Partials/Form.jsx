import LoadingClipLoader from '@/components/Loading/LoadingClipLoader'
import { InputWithLabel } from '@/components/ui/InputWithLabel'
import PropTypes from 'prop-types'
// import Input from '../../../components/Form/Inputs/Input';

export default function Form({
  onSubmit,
  data,
  handleInputChange,
  errors,
  isLoading,
  // editMode,
  viewMode,
}) {
  console.log('Form: ', data)
  return (
    <form onSubmit={onSubmit}>
      <div className="px-4 pt-2">
        <div className="grid md:gap-4 md:grid-cols-2">
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

          <InputWithLabel
            id="probableHarvestDate"
            name="probableHarvestDate"
            label="Tempo até a colheita"
            placeholder="Tempo até a colheita"
            type="text"
            onChange={handleInputChange}
            value={data?.probableHarvestDate}
            error={errors && errors?.probableHarvestDate}
            required
          />
        </div>

        <InputWithLabel
          id="description"
          name="description"
          label="Descrição"
          placeholder="Descrição"
          type="text"
          onChange={handleInputChange}
          value={data?.description}
          error={errors && errors?.description}
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
