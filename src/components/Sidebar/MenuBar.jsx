import { Link, useLocation } from "react-router-dom";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "../ui/menubar";
import { IoIosArrowDown } from "react-icons/io";

export default function MenuBar() {
  const location = useLocation();

  const handleCurrent = route => location.pathname === route
  const handleCurrentGroup = routeArr => routeArr.includes(location.pathname)

  const registerRoutes = ['/tipos-manutencao', '/motivos-manutencao', '/especies', '/greenhouse']

  return (
    <Menubar className="py-6 border-none bg-verde-texture1 text-white">
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]:bg-transparent">
          <Link
            to='/maps'
            className="text-xs hover:border-b-2 hover:border-b-white py-4 transition"
          >
            Mapa
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]:bg-transparent">
          <Link
            to='/dashboard'
            className={`text-xs border-b-2 hover:border-b-white py-4 transition ${handleCurrent('/visao-geral') ? 'border-b-white' : 'border-b-transparent'}`}
          >
            Dashboard
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]:bg-transparent">
          <Link
            to='/plantations'
            className={`text-xs border-b-2 hover:border-b-white py-4 transition ${handleCurrent('/visao-geral') ? 'border-b-white' : 'border-b-transparent'}`}
          >
            Plantações
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={`text-xs transition rounded-none cursor-pointer py-4 border-b-2 border-b-transparent hover:border-b-white ${handleCurrentGroup(registerRoutes) && 'border-b-white'}`}>
          Cadastros
          <span className="pl-1"><IoIosArrowDown /></span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link
              to='/users'
              className={`p-1 text-xs w-full ${handleCurrent('/motivos-manutencao') && 'text-white underline'}`}
            >
              Usuários
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link
              to='/cultivations'
              className={`p-1 text-xs w-full ${handleCurrent('/tipos-manutencao') && 'text-white underline'}`}>
              Cultivos
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link
              to='/areas-map'
              className={`p-1 text-xs w-full ${handleCurrent('/especies') && 'text-white underline'}`}
            >
              Áreas mapeadas
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}