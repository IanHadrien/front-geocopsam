import UsersApi from '@/api/users'
import { InputMaskPhone } from '@/components/Form/Inputs/InputMask'
import LoadingClipLoader from '@/components/Loading/LoadingClipLoader'
import { InputWithLabel } from '@/components/ui/InputWithLabel'
import { FaRegUserCircle } from 'react-icons/fa'
import { useQuery } from 'react-query'

export default function Profile() {
  const { isLoading, data } = useQuery(
    ['PlantationGetAll'],
    () => UsersApi.GetMe(),
    {
      keepPreviousData: true,
    }
  )

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="w-full md:px-10 sm:px-10 px-8 mb-8 mt-5">
      <div className="border px-8 pb-4 pt-6 bg-white rounded-md">
        <div className="flex flex-1 flex-col lg:flex-row lg:space-x-2 lg:space-y-0 h-fit">
          <div className="flex flex-1 flex-col text-sm">
            <div className="flex items-center px-4 pt-2 mb-4">
              <FaRegUserCircle size={25} />
              <h2 className="font-medium text-2xl pl-1.5">Dados pessoais</h2>
            </div>

            <div className="px-4 pt-2">
              <div className="grid md:gap-4 md:grid-cols-2">
                <InputWithLabel
                  id="name"
                  name="name"
                  label="Nome"
                  placeholder="Nome"
                  type="text"
                  // onChange={handleInputChange}
                  value={'Ian Hadrien'}
                  // error={errors && errors?.name}
                  required
                />

                <InputMaskPhone
                  id="phone"
                  name="phone"
                  label="Telefone"
                  placeholder="Telefone"
                  type="phone"
                  // onChange={handleInputChange}
                  value={data?.data?.user.phone}
                  // error={errors && errors?.phone}
                />
              </div>

              <InputWithLabel
                id="email"
                name="email"
                label="Email"
                placeholder="Email"
                type="email"
                // onChange={handleInputChange}
                value={'ianhadrienteste@gmail.com'}
                // error={errors && errors?.email}
                required
              />

              <div className="grid md:gap-4 md:grid-cols-2">
                <InputWithLabel
                  id="password"
                  name="password"
                  label="Senha"
                  placeholder="Senha"
                  type="password"
                  // onChange={handleInputChange}
                  // value={data?.data?.user.password}
                  // error={errors && errors?.password}
                  required
                />

                <InputWithLabel
                  id="passwordConfirm"
                  name="passwordConfirm"
                  label="Confirmar senha"
                  placeholder="Confirmar senha"
                  type="password"
                  // onChange={handleInputChange}
                  // value={data?.passwordConfirm}
                  // error={errors && errors?.passwordConfirm}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="py-3 sm:flex items-center">
                  <button
                    className="inline-flex w-full justify-center rounded-md bg-ds-verde px-3 py-2 text-base font-semibold text-white shadow-sm hover:opacity-80 sm:w-56 disabled:opacity-75"
                    type="submit"
                    disabled={isLoading}
                  >
                    Atualizar
                  </button>

                  <LoadingClipLoader
                    color="#17171B"
                    loading={isLoading}
                    className={`${isLoading && 'ml-3'}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
