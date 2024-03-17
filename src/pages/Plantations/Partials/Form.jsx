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
          placeholder="Nome da plantação"
          type="text" 
          onChange={handleInputChange}
          value={data?.name}
          required
        />

        <SelectWithLabel 
          label="Associado"
          id="id_associate"
          placeholder="Associado" 
          // onChange
          required
        />

        <div className="grid md:gap-4 md:grid-cols-2">
          <SelectWithLabel 
            label="Cultivo"
            id="id_cultivation"
            placeholder="Cultivo" 
            // onChange
            required
          />

          <SelectWithLabel 
            label="Área mapeada"
            id="id_mapArea"
            placeholder="Área mapeada" 
            // onChange
            required
          />
        </div>

        <div className="grid md:gap-4 md:grid-cols-2">
          <InputWithLabel 
            id="planting_date"
            name="planting_date"
            label="Data de plantio"
            placeholder="Data de plantio"
            type="date" 
            onChange={handleInputChange}
            value={data?.planting_date}
          />

          <InputWithLabel 
            id="previous_culture"
            name="previous_culture"
            label="Cultura anterior"
            placeholder="Cultura anterior"
            type="text" 
            onChange={handleInputChange}
            value={data?.previous_culture}
          />
        </div>

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