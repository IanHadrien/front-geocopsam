import { FaRegMap } from 'react-icons/fa'
import { PiPlant } from 'react-icons/pi'

export default function InfoWindowComponent() {
  return (
    <div className="space-y-3 px-2">
      <header className="">
        <h1 className="text-green-500 text-base">Ian Hadrien</h1>
        <h1 className="text-green-950 text-xl font-bold">Plantação 1</h1>
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
                Nome: <span className="font-normal">Teste</span>
              </p>
              <p className="font-semibold">
                Provavel data de colheita:{' '}
                <span className="font-normal">Teste</span>
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold">
                Cultivo anterior: <span className="font-normal">Teste</span>
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
                Propreitario: <span className="font-normal">Teste</span>
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold">
                Area total: <span className="font-normal">Teste</span>
              </p>
            </div>
          </div>
        </section>

        <button onClick={() => console.log('selectedMarker')}>Dados</button>
      </div>
    </div>
  )
}
