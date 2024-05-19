import { FaExpandArrowsAlt } from 'react-icons/fa'
import MenuBar from './MenuBar'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '../ui/menubar'
import { HiUser } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div
      id="topbar"
      className="fixed px-2 top-0 flex w-full items-center justify-between h-[55px] flex-shrink-0 bg-verde-texture1"
    >
      <div className="px-2.5 flex items-center pt-1">
        <div className="flex items-center">
          <div className="xl-1038:hidden mr-4">{/* <DropdownMenuUi /> */}</div>
          <div className="text-ds-verdec">
            {/* <img src={Logo} className="w-28 h-8 xl-1920:w-48 xl-1920:h-14" alt="" /> */}
            GeoCopSam
          </div>
        </div>

        <div className="ml-16 flex items-end space-x-2">
          <MenuBar />
        </div>
      </div>

      <div className="sm:flex sm:items-center">
        <div className="sm:flex sm:items-center mr-3 gap-4">
          <button
            className="text-white md:hover:text-gray-200 hidden sm:block"
            // onClick={() => handleToggleFullScreen()}
          >
            <FaExpandArrowsAlt id="expand-icon" />
            {/* <Tooltip text="Alterar modo" anchorSelect="#expand-icon" /> */}
          </button>
          <div className="relative z-50">
            <Menubar className="border-none py-6 shadow-none bg-verde-texture1">
              <MenubarMenu>
                <MenubarTrigger className="bg-white space-x-1 cursor-pointer flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-verde-texture1 focus:ring-offset-2inline-flex px-3 py-1 border border-gray-200 leading-4 font-medium text-gray-500 hover:text-gray-700 transition ease-in-out duration-150">
                  <span>
                    <HiUser size={20} />
                  </span>
                  <span>Ian Hadrien</span>
                  <span className="pl-1">
                    <IoIosArrowDown />
                  </span>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link to="/perfil" className={'p-2 text-sm w-full'}>
                      Meu perfil
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem
                    // onClick={() => mutate()}
                    className={'px-2 py-1 text-sm w-full cursor-pointer'}
                  >
                    Sair
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </div>
  )
}
