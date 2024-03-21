import { InputWithLabel } from '@/components/ui/InputWithLabel';
import { SelectWithLabel } from '@/components/ui/SelectWithLabel';
import PropTypes from 'prop-types';
// import Input from '../../../components/Form/Inputs/Input';

export default function Form({ onSubmit, data, handleInputChange, errors, isLoading, editMode, viewMode }) {
  return (
    <form onSubmit={onSubmit}>
      <div className='px-4 pt-2'>
        <InputWithLabel 
          id="name"
          name="name"
          label="Nome"
          placeholder="Nome da área mapeada"
          type="text" 
          onChange={handleInputChange}
          value={data?.name}
          required
        />

        <InputWithLabel 
          id="geospatial_data"
          name="geospatial_data"
          label="Dados geográficos"
          placeholder="Dados geográficos"
          type="text" 
          onChange={handleInputChange}
          value={data?.geospatial_data}
          required
        />

        <InputWithLabel 
          id="certer_pont"
          name="certer_pont"
          label="Ponto central"
          placeholder="Ponto central"
          type="text" 
          onChange={handleInputChange}
          value={data?.certer_pont}
        />

        <InputWithLabel 
          id="total_area"
          name="total_area"
          label="Área total"
          placeholder="Área total"
          type="text" 
          onChange={handleInputChange}
          value={data?.total_area}
        />

        {!viewMode &&
          <p className='text-xs font-medium text-gray-500 pb-2 pt-1'>
            Os campos marcados com * são obrigatórios.
          </p>
        }
      </div>

      <div className="flex items-center justify-between">
        <div className="px-4 py-3 sm:flex">
          {!viewMode &&
            <button
              className="inline-flex w-full justify-center rounded-md bg-ds-verde px-3 py-2 text-base font-semibold text-white shadow-sm hover:opacity-80 sm:w-56"
              type="submit"
              disabled={isLoading}
            >
              Salvar
            </button>
          }

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
};