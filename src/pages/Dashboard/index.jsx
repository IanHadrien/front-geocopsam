import ChartComponent from '@/components/Chart/ChartBar'
import { GiPlantSeed } from 'react-icons/gi'
import { HiUser } from 'react-icons/hi'
import { PiPlantDuotone } from 'react-icons/pi'

export default function Dashboard() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl m-auto md:px-10 sm:px-10 px-5 py-7 flex justify-between space-x-4 border bg-gray-50 rounded-xl">
        <div className="px-2 w-2/3">
          <div className="flex justify-between">
            <div className="flex items-center border p-4 space-x-3 rounded-lg bg-ds-verde">
              <div>
                <GiPlantSeed size={35} color="white" />
              </div>
              <div>
                <h2 className="text-xs text-gray-300 font-medium">Cultivos</h2>
                <p className="text-2xl text-white">10 cultivos</p>
              </div>
            </div>

            <div className="flex items-center border p-4 space-x-3 rounded-lg bg-ds-verdec">
              <div>
                <HiUser size={35} color="black" />
              </div>
              <div>
                <h2 className="text-xs text-gray-700 font-medium">
                  Associados
                </h2>
                <p className="text-2xl text-ds-verde">52 Associados</p>
              </div>
            </div>

            <div className="flex items-center border p-4 space-x-3 rounded-lg bg-green-950">
              <div>
                <PiPlantDuotone size={35} color="white" />
              </div>
              <div>
                <h2 className="text-xs text-gray-300 font-medium">
                  Plantações
                </h2>
                <p className="text-2xl text-white">88 Plantações</p>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-white p-4 shadow">
            <h2 className="text-2xl text-ds-verde pb-2">
              Plantações por cultivo
            </h2>
            <ChartComponent />
          </div>
        </div>

        <div className="w-1/3 rounded-lg bg-white p-4 shadow">
          <h2 className="text-2xl text-ds-verde pb-4">
            Plantações próximas da colheita
          </h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Plantação
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Data
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status da Colheita
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div>
                      <div className="text-sm font-semibold">Plantação 19</div>
                      <div className="font-normal text-gray-500">Mandioca</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">07/12/2024</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-xs px-3 py-0.5 rounded-md bg-green-500 text-white font-medium">
                        Próxima
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div>
                      <div className="text-sm font-semibold">Plantação 15</div>
                      <div className="font-normal text-gray-500">Arroz</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">26/11/2024</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-xs px-3 py-0.5 rounded-md bg-green-500 text-white font-medium">
                        Próxima
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div>
                      <div className="text-sm font-semibold">Plantação 31</div>
                      <div className="font-normal text-gray-500">Mandioca</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">06/01/2024</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-xs px-3 py-0.5 rounded-md bg-orange-500 text-white font-medium">
                        Passou
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div>
                      <div className="text-sm font-semibold">Plantação 5</div>
                      <div className="font-normal text-gray-500">Mandioca</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">03/12/2024</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-xs px-3 py-0.5 rounded-md bg-green-500 text-white font-medium">
                        Próxima
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div>
                      <div className="text-sm font-semibold">Plantação 23</div>
                      <div className="font-normal text-gray-500">Mandioca</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">05/18/2024</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-xs px-3 py-0.5 rounded-md bg-orange-500 text-white font-medium">
                        Passou
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
