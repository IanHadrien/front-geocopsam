/* eslint-disable react/prop-types */
import CultivationsApi from '@/api/cultivations'
import UsersApi from '@/api/users'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { SelectWithLabel } from '@/components/ui/SelectWithLabel'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useQuery } from 'react-query'

const defaultConfig = () => ({
  userId: '',
  cultivationId: '',
})

export default function FilterMap({ handleFilter, resetFilter }) {
  const [newSearch, setNewSearch] = useState(defaultConfig())

  const { isLoading: isLoadingCultivations, data: dataCultivations } = useQuery(
    {
      queryKey: ['CultivationsApiGetAllMap'],
      queryFn: () => CultivationsApi.GetAll(),
    }
  )
  const { isLoading: isLoadingUsers, data: dataUsers } = useQuery({
    queryKey: ['UsersGetAll'],
    queryFn: () => UsersApi.GetAll(),
  })

  const handleInputChange = (e, fieldName) => {
    let value = e?.target?.value ?? e?.value
    const name = e?.target?.name ?? fieldName

    setNewSearch((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (isLoadingCultivations === true || isLoadingUsers === true) {
    return <div className="p-4 flex justify-center">Loading...</div>
  }
  return (
    <div className="absolute top-3 left-2">
      <Menubar className="border-none shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="bg-white space-x-1 cursor-pointer flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-verde-texture1 focus:ring-offset-2inline-flex border-gray-200 leading-4 font-medium text-gray-500 hover:text-gray-700 transition ease-in-out duration-150">
            <span>Filtro</span>
            <span className="pl-1">
              <IoIosArrowDown />
            </span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <div>
                <SelectWithLabel
                  label="Cultivo"
                  id="cultivationId"
                  placeholder="Selecione o cultivo"
                  data={dataCultivations?.data?.cultivations}
                  value={newSearch?.cultivationId}
                  onChange={(e) => handleInputChange(e, 'cultivationId')}
                  // error={errors && errors?.cultivationId}
                />

                <SelectWithLabel
                  label="Proprietário da terra"
                  id="userId"
                  placeholder="Selecione o proprietário"
                  data={dataUsers?.data?.users}
                  value={newSearch?.userId}
                  onChange={(e) => handleInputChange(e, 'userId')}
                />

                <div className="mb-2">
                  <button
                    onClick={() => handleFilter(newSearch)}
                    className="inline-flex w-full justify-center rounded-md bg-ds-verde px-3 py-2 text-base font-semibold text-white shadow-sm hover:opacity-80 sm:w-56"
                  >
                    Pesquisar
                  </button>
                </div>

                <button
                  onClick={resetFilter}
                  className="inline-flex w-full justify-center rounded-md bg-ds-verde px-3 py-2 text-base font-semibold text-white shadow-sm hover:opacity-80 sm:w-56"
                >
                  Resetar filtro
                </button>
              </div>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
