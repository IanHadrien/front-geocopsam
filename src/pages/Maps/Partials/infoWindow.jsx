/* eslint-disable react/prop-types */
import { FaRegMap } from 'react-icons/fa'
import { PiPlant } from 'react-icons/pi'
import { IoIosContact } from 'react-icons/io'
import moment from 'moment/moment'

export default function InfoWindowComponent({ data }) {
  const calculateProbableHarvestDate = (date, time) => {
    const regex = /^(\d+)\s*(\w+)/
    let timeProbable = 0

    if (time.includes('ano') || time.includes('anos')) {
      timeProbable = Number(time.match(regex)[1])

      const newDate = new Date(date)
      newDate.setFullYear(newDate.getFullYear() + timeProbable)

      return moment(newDate.toISOString()).format('DD/MM/YYYY')
    }

    if (time.includes('meses') || time.includes('mes')) {
      timeProbable = Number(time.match(regex)[1])

      const newDate = new Date(date)
      const currentMonth = newDate.getMonth()
      const newMonth = currentMonth + timeProbable
      newDate.setMonth(newMonth)

      return moment(newDate.toISOString()).format('DD/MM/YYYY')
    }
  }

  return (
    <div className="space-y-3 px-2 mb-2 -mt-1">
      <header className="">
        <h1 className="text-green-500 text-base">{data?.user?.name}</h1>
        <h1 className="text-green-950 text-xl font-bold">{data?.name}</h1>
      </header>
      <div className="border-t-2 border-green-500" />
      <div className="space-y-3">
        <section className="space-y-1">
          <h1 className="text-green-950 text-lg font-bold flex items-center">
            <span className="mr-1">
              <PiPlant size={20} />
            </span>
            Cultivo
          </h1>
          <div className="flex justify-between space-x-6">
            <div className="space-y-1">
              <p className="font-semibold">
                Nome:{' '}
                <span className="font-normal">{data?.cultivation?.name}</span>
              </p>
              <p className="font-semibold">
                Cultivo anterior:{' '}
                <span className="font-normal">{data?.previous_culture}</span>
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold">
                Data da plantação:{' '}
                <span className="font-normal">
                  {moment(data?.planting_date).format('DD/MM/YYYY')}
                </span>
              </p>
              <p className="font-semibold">
                Provavel data de colheita:{' '}
                <span className="font-normal">
                  {calculateProbableHarvestDate(
                    data?.planting_date,
                    data?.cultivation?.probable_harvest_date
                  )}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-1">
          <h1 className="text-green-950 text-lg font-bold flex items-center">
            <span className="mr-1">
              <FaRegMap size={20} />
            </span>
            Area Mapeada
          </h1>
          <div className="flex justify-between space-x-6">
            <div className="space-y-1">
              <p className="font-semibold">
                Propreitario:{' '}
                <span className="font-normal">{data?.user?.name}</span>
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold">
                Area total:{' '}
                <span className="font-normal">
                  {data?.mappedArea?.total_area
                    ? data?.mappedArea.total_area
                    : 'Não informado'}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-1">
          <h1 className="text-green-950 text-lg font-bold flex items-center">
            <span className="mr-1">
              <IoIosContact size={20} />
            </span>
            Contato
          </h1>
          <div className="flex justify-between space-x-6">
            <div className="space-y-1">
              <p className="font-semibold">
                Email: <span className="font-normal">{data?.user?.email}</span>
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold">
                Telefone:{' '}
                <span className="font-normal">{data?.user?.phone}</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
