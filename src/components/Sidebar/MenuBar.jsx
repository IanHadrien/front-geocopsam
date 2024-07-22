import { Link, useLocation } from 'react-router-dom'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '../ui/menubar'
import { IoIosArrowDown } from 'react-icons/io'

export default function MenuBar() {
  const location = useLocation()

  const handleCurrent = (route) => location.pathname.includes(route)

  return (
    <Menubar className="py-6 border-none bg-green-950 text-green-50 ">
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]:bg-transparent data-[state=open]:text-green-50">
          <Link
            to="/maps"
            className={`text-xs border-b-2 hover:border-b-green-50 py-4 transition ${
              handleCurrent('/maps')
                ? 'border-b-green-50 '
                : 'border-b-transparent'
            }`}
          >
            Mapa
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]:bg-transparent data-[state=open]:text-green-50">
          <Link
            to="/dashboard"
            className={`text-xs border-b-2 hover:border-b-green-50 py-4 transition ${
              handleCurrent('/dashboard')
                ? 'border-b-green-50 '
                : 'border-b-transparent'
            }`}
          >
            Dashboard
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]:bg-transparent data-[state=open]:text-green-50">
          <Link
            to="/plantations"
            className={`text-xs border-b-2 hover:border-b-green-50  py-4 transition ${
              handleCurrent('/plantations')
                ? 'border-b-green-50 '
                : 'border-b-transparent'
            }`}
          >
            Plantações
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className={`data-[state=open]:bg-transparent data-[state=open]:text-green-50 text-xs transition rounded-none cursor-pointer py-4 border-b-2 border-b-transparent hover:border-b-green-50 
            ${
              handleCurrent('/users') ||
              handleCurrent('/cultivations') ||
              handleCurrent('/areas-map')
                ? 'border-b-roxo-roxo2'
                : 'border-b-transparent'
            }`}
        >
          Cadastros
          <span className="pl-1">
            <IoIosArrowDown />
          </span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link
              to="/users"
              className={`p-1 text-xs w-full ${
                handleCurrent('/users') && 'text-green-50  underline'
              }`}
            >
              Usuários
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link
              to="/cultivations"
              className={`p-1 text-xs w-full ${
                handleCurrent('/cultivations') && 'text-green-50  underline'
              }`}
            >
              Cultivos
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link
              to="/areas-map"
              className={`p-1 text-xs w-full ${
                handleCurrent('/areas-map') && 'text-green-50  underline'
              }`}
            >
              Áreas mapeadas
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
