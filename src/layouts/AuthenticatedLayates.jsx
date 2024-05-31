import { useState } from 'react'
import SideBar from '../components/SideBar/Sedebar'
import { Outlet } from 'react-router-dom'
import { FaExpandArrowsAlt } from 'react-icons/fa'
import Dropdown from '../components/DropDown/Index'
import { HiUser } from 'react-icons/hi'
import TopBar from '@/components/Sidebar/TopBar'

export default function AuthenticatedLayout() {
  const [showSideBar, setShowSideBar] = useState(false)

  const handleClose = () => {
    setShowSideBar(false)
  }

  console.log('Authenticated')
  return (
    <div className="flex w-full bg-branco-50" style={{ marginBottom: '-8px' }}>
      <TopBar />

      {/* SideBar-Mobile */}
      {/* {showSideBar &&
            <div className="relative flex z-20 md:hidden mobilebar">
                <button type='button' onClick={handleClose} className="fixed inset-0 w-full right-0 z-20 bg-gray-400 bg-opacity-75 opacity-100" />

                <div className="fixed inset-0 z-20 flex w-1/3">
                    <SideBar showSideBar={showSideBar} />
                    <div className="w-14 flex-shrink-0" />
                </div>
            </div>
        } */}

      <div className="flex flex-col w-full h-[100vh]">
        <main className="bg-branco-50 mt-[2.8rem] flex-grow-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
