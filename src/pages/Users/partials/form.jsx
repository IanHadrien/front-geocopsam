import { InputMaskPhone } from '@/components/Form/Inputs/InputMask'
import LoadingClipLoader from '@/components/Loading/LoadingClipLoader'
import { InputWithLabel } from '@/components/ui/InputWithLabel'
import { SelectWithLabel } from '@/components/ui/SelectWithLabel'
import PropTypes from 'prop-types'

const dataRoles = [
  { id: 'Admin', name: 'Admin' },
  { id: 'Operator', name: 'Operador' },
  { id: 'View', name: 'Cliente' },
]

export default function Form({
  onSubmit,
  data,
  handleInputChange,
  errors,
  isLoading,
  editMode,
  viewMode,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="px-4 pt-2">
        <div className="grid md:gap-4 md:grid-cols-2">
          <InputWithLabel
            id="name"
            name="name"
            label="Nome"
            placeholder="Nome"
            type="text"
            onChange={handleInputChange}
            value={data?.name}
            error={errors && errors?.name}
            required
          />

          <InputMaskPhone
            id="phone"
            name="phone"
            label="Telefone"
            placeholder="Telefone"
            type="phone"
            onChange={handleInputChange}
            value={data?.phone}
            error={errors && errors?.phone}
          />
        </div>

        <InputWithLabel
          id="email"
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
          onChange={handleInputChange}
          value={data?.email}
          error={errors && errors?.email}
          required
        />

        <div className="grid md:gap-4 md:grid-cols-2">
          <InputWithLabel
            id="password"
            name="password"
            label="Senha"
            placeholder="Senha"
            type="password"
            onChange={handleInputChange}
            value={data?.password}
            error={errors && errors?.password}
            required
          />

          <InputWithLabel
            id="passwordConfirm"
            name="passwordConfirm"
            label="Confirmar senha"
            placeholder="Confirmar senha"
            type="password"
            onChange={handleInputChange}
            value={data?.passwordConfirm}
            error={errors && errors?.passwordConfirm}
            required
          />
        </div>

        <SelectWithLabel
          label="Permissão"
          id="role"
          placeholder="Selecione uma permissão"
          data={dataRoles}
          value={data?.role}
          onChange={(e) => handleInputChange(e, 'role')}
          error={errors && errors?.role}
          required
        />

        {!viewMode && (
          <p className="text-xs font-medium text-gray-500 pb-2 pt-1">
            Os campos marcados com * são obrigatórios.
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="px-4 py-3 sm:flex items-center">
          {!viewMode && (
            <button
              className="inline-flex w-full justify-center rounded-md bg-ds-verde px-3 py-2 text-base font-semibold text-white shadow-sm hover:opacity-80 sm:w-56 disabled:opacity-75"
              type="submit"
              disabled={isLoading}
            >
              {editMode ? 'Editar' : 'Salvar'}
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
